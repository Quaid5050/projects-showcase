const { chromium } = require("playwright");

const URL =
  "https://web.archive.org/web/20250624094410/https://www.skipthedishes.com/chan-garden";

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 120000 });
  await page.waitForTimeout(8000);
  await page.evaluate(async () => {
    for (let i = 0; i < 25; i++) {
      window.scrollBy(0, 700);
      await new Promise((r) => setTimeout(r, 250));
    }
  });
  await page.waitForTimeout(2000);

  const debug = await page.evaluate(() => {
    const sections = [...document.querySelectorAll('[data-testid^="menu-category-"]')];
    return sections.slice(0, 3).map((section) => ({
      testId: section.getAttribute("data-testid"),
      html: section.innerHTML.slice(0, 1200),
      childTags: [...section.querySelectorAll("*")].slice(0, 30).map((el) => el.tagName + ":" + (el.getAttribute("data-testid") || el.className?.toString()?.slice(0, 40) || "")),
    }));
  });
  console.log(JSON.stringify(debug, null, 2));

  const items = await page.evaluate(() => {
    const results = [];
    const seen = new Set();
    const sections = document.querySelectorAll('[data-testid^="menu-category-"]');

    sections.forEach((section) => {
      const testId = section.getAttribute("data-testid") || "";
      if (testId === "menu-category-place-settings") return;

      const category =
        section.querySelector("h2")?.textContent?.trim() ||
        testId.replace("menu-category-", "").replace(/-/g, " ");

      section.querySelectorAll("h3, h4").forEach((heading) => {
        const name = heading.textContent?.trim() || "";
        if (!name || name.startsWith("$")) return;

        const container = heading.closest("div")?.parentElement || heading.parentElement;
        const text = container?.textContent || "";
        const priceMatch = text.match(/\$\s*(\d+\.\d{2})/);
        if (!priceMatch) return;

        const key = `${category}::${name}`;
        if (seen.has(key)) return;
        seen.add(key);

        const description =
          container?.querySelector("p")?.textContent?.trim() ||
          Array.from(container?.querySelectorAll("p, span") || [])
            .map((el) => el.textContent?.trim() || "")
            .find((value) => value && value !== name && !/^\$\d/.test(value) && !/sold out/i.test(value)) ||
          "";

        results.push({
          category,
          name,
          description,
          price: parseFloat(priceMatch[1]),
          isAvailable: !/sold out/i.test(text),
        });
      });
    });

    return results;
  });

  console.log("count", items.length);
  console.log(JSON.stringify(items.slice(0, 10), null, 2));
  console.log(JSON.stringify(items.slice(-5), null, 2));
  await browser.close();
})();
