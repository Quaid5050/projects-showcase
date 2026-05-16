/**
 * Download placeholder JPGs into public/placeholders/ (filenames match src/lib/content.ts).
 * Run: node scripts/download-placeholders.mjs
 *
 * Uses loremflickr (car tags) and picsum.photos (seeded squares) for reliable bytes.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "placeholders");

async function downloadFromUrl(url, name) {
  const res = await fetch(url, {
    redirect: "follow",
    headers: { "User-Agent": "PAC-Phantom-AssetBot/1.0" },
  });
  if (!res.ok) throw new Error(`${name}: HTTP ${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 8000) throw new Error(`${name}: too small (${buf.length})`);
  fs.writeFileSync(path.join(outDir, name), buf);
  console.log("OK", name, buf.length);
}

/** [filename, full URL] */
const EXACT = [
  [
    "before-after-before.jpg",
    "https://loremflickr.com/1600/1000/car,weathered,faded",
  ],
  [
    "before-after-after.jpg",
    "https://loremflickr.com/1600/1000/car,showroom,gloss,chrome",
  ],
];

/** [filename, w, h, comma-separated tags] → loremflickr */
const LOREM = [
  ["hero-cinematic-bg.jpg", 1920, 1080, "car,night,highway,street"],
  ["placeholder-mechanical-service.jpg", 1400, 933, "car,engine,repair,garage"],
  ["placeholder-tires.jpg", 1400, 900, "car,wheel,tire,alloy"],
  ["placeholder-brakes.jpg", 1400, 900, "car,brake,rotor"],
  ["placeholder-oil-change.jpg", 1200, 800, "car,motor,garage,mechanic"],
  ["placeholder-safety-cert.jpg", 1400, 900, "car,inspection,garage"],
  ["placeholder-vinyl-wrap.jpg", 1400, 900, "car,wrap,color,neon"],
  ["placeholder-detailing.jpg", 1400, 900, "car,interior,leather,luxury"],
  ["placeholder-paint-correction.jpg", 1400, 900, "car,polish,shine,detail"],
  ["placeholder-ambient-lighting.jpg", 1400, 900, "car,neon,lights,night"],
  ["placeholder-starlight-headliner.jpg", 1400, 900, "car,roof,stars,night"],
  ["placeholder-dashcam-install.jpg", 1400, 900, "car,dashboard,camera"],
  ["placeholder-carplay-install.jpg", 1200, 800, "car,dashboard,screen,gps"],
  ["placeholder-ppf.jpg", 1400, 900, "car,mask,front,bumper"],
  ["placeholder-ceramic-coating.jpg", 1200, 800, "car,water,droplet,shine"],
  ["featured-placeholder-wrap.jpg", 1600, 1000, "car,wrap,vinyl,color"],
  ["featured-placeholder-ambient.jpg", 1600, 1000, "car,cabin,lights,ambient"],
  ["featured-placeholder-starlight.jpg", 1600, 1000, "car,ceiling,stars,night"],
  ["featured-placeholder-ppf-wide.jpg", 1800, 1000, "car,front,protection,clear"],
  ["featured-placeholder-ceramic-wide.jpg", 1800, 1000, "car,gloss,wet,finish"],
  ["featured-placeholder-carplay.jpg", 1600, 1000, "car,screen,technology,dash"],
  ["gallery-placeholder-correction-01.jpg", 1200, 1200, "car,paint,reflection,shine"],
  ["gallery-placeholder-wrap-02.jpg", 1200, 1200, "car,wrap,red,sports"],
  ["gallery-placeholder-detail-01.jpg", 1200, 1200, "car,interior,leather,detail"],
  ["gallery-placeholder-detail-02.jpg", 1200, 1200, "car,engine,enginebay,detail"],
];

/** Square gallery: picsum seeds avoid occasional loremflickr “default” strips */
const PICSUM = [
  ["gallery-placeholder-wrap-01.jpg", "pacwrap01"],
  ["gallery-placeholder-starlight-01.jpg", "pacstar01"],
  ["gallery-placeholder-ppf-01.jpg", "pacppf01"],
  ["gallery-placeholder-ceramic-01.jpg", "paccera01"],
];

fs.mkdirSync(outDir, { recursive: true });

for (const [name, url] of EXACT) {
  await downloadFromUrl(url, name);
}

for (const [name, w, h, tags] of LOREM) {
  const url = `https://loremflickr.com/${w}/${h}/${tags}`;
  await downloadFromUrl(url, name);
}

for (const [name, seed] of PICSUM) {
  const url = `https://picsum.photos/seed/${seed}/1200/1200.jpg`;
  await downloadFromUrl(url, name);
}

console.log("Done. Files in", outDir);
