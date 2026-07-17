import { chromium, devices } from '@playwright/test';
import fs from 'node:fs/promises';
import path from 'node:path';

const baseUrl = process.env.PLAYWRIGHT_BASE_URL || process.env.ROUTE_BASE_URL || 'http://localhost:3000';
const screenshotDir = path.join(process.cwd(), 'docs', 'review-screenshots');

const desktopShots = [
  ['homepage-desktop.png', '/'],
  ['products-desktop.png', '/products'],
  ['new-products-desktop.png', '/products/new-products'],
  ['safe-solution-desktop.png', '/products/new-products/safe-solution-floor-safety-system'],
  ['industries-desktop.png', '/industries'],
  ['resources-desktop.png', '/resources'],
  ['distributors-desktop.png', '/partnerships/distributors-wanted'],
  ['global-markets-desktop.png', '/global-markets'],
  ['contact-form-desktop.png', '/contact#inquiry-form'],
];

const mobileShots = [
  ['homepage-mobile.png', '/'],
  ['products-mobile.png', '/products'],
  ['industries-mobile.png', '/industries'],
  ['safe-solution-mobile.png', '/products/new-products/safe-solution-floor-safety-system'],
  ['distributor-form-mobile.png', '/partnerships/distributors-wanted#distributor-application'],
  ['contact-form-mobile.png', '/contact#inquiry-form'],
];

async function revealPage(page) {
  await page.evaluate(async () => {
    const step = Math.max(window.innerHeight * 0.75, 400);
    for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 80));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(250);
}

async function capture(contextOptions, shots) {
  const browser = await chromium.launch();
  const context = await browser.newContext(contextOptions);
  const page = await context.newPage();
  for (const [filename, route] of shots) {
    await page.goto(new URL(route, baseUrl).toString(), { waitUntil: 'domcontentloaded', timeout: 60_000 });
    await page.waitForTimeout(800);
    await revealPage(page);
    const buffer = await page.screenshot({ fullPage: true });
    await fs.writeFile(path.join(screenshotDir, filename), buffer);
    console.log(`Captured ${filename}`);
  }
  await browser.close();
}

await fs.mkdir(screenshotDir, { recursive: true });
await capture({ viewport: { width: 1440, height: 1200 } }, desktopShots);
await capture({ ...devices['Pixel 5'], viewport: { width: 390, height: 844 } }, mobileShots);
await capture(
  { ...devices['Pixel 5'], viewport: { width: 430, height: 932 } },
  [['homepage-mobile-430.png', '/'], ['products-mobile-430.png', '/products']]
);
console.log(`Screenshot directory: ${screenshotDir}`);
console.log((await fs.readdir(screenshotDir)).join('\n'));
