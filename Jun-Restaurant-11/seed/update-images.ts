/**
 * Scans public/images/menu and matches every image to a menu item by slug.
 * Updates the `image` field in MongoDB for all matched items.
 *
 * Run: node_modules\.bin\tsx.cmd seed/update-images.ts
 */

import mongoose from 'mongoose';
import { readdirSync } from 'fs';
import { resolve } from 'path';

// Load .env.local
try {
  const { readFileSync } = require('fs');
  const envFile = readFileSync(resolve(process.cwd(), '.env.local'), 'utf-8');
  for (const line of envFile.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const idx = trimmed.indexOf('=');
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, '');
    if (!process.env[key]) process.env[key] = value;
  }
} catch { console.warn('Could not load .env.local'); }

const MONGODB_URI = process.env.MONGODB_URI!;
if (!MONGODB_URI) throw new Error('MONGODB_URI not set');

const MenuItemSchema = new mongoose.Schema(
  { name: String, slug: { type: String, unique: true }, image: String },
  { strict: false, timestamps: true }
);
const MenuItem = mongoose.models.MenuItem || mongoose.model('MenuItem', MenuItemSchema);

// The folder where images live
const IMAGE_DIR = resolve(process.cwd(), 'public/images/menu');
const IMAGE_URL_BASE = '/images/menu';

async function run() {
  await mongoose.connect(MONGODB_URI);
  console.log('✅ Connected to MongoDB');

  // Read all files in the directory
  const files = readdirSync(IMAGE_DIR);
  console.log(`📁 Found ${files.length} image files\n`);

  // Build a lookup: stripped-slug → actual filename
  // Handle double extensions like "beef-fried-rice.jpg.png" → slug "beef-fried-rice"
  const fileMap: Record<string, string> = {};
  for (const file of files) {
    // Strip all extensions to get the bare slug
    let bare = file;
    // Remove extensions repeatedly until none left that are image types
    while (/\.(jpg|jpeg|png|webp|gif)$/i.test(bare)) {
      bare = bare.replace(/\.(jpg|jpeg|png|webp|gif)$/i, '');
    }
    // Normalize to lowercase
    bare = bare.toLowerCase();
    fileMap[bare] = file;
  }

  // Fetch all menu items
  const items = await MenuItem.find({}).lean() as { _id: mongoose.Types.ObjectId; slug: string; name: string }[];
  console.log(`📋 Processing ${items.length} menu items\n`);

  let updated = 0;
  let notFound = 0;
  const missed: string[] = [];

  for (const item of items) {
    const slug = (item.slug || '').toLowerCase();
    const filename = fileMap[slug];

    if (filename) {
      const imagePath = `${IMAGE_URL_BASE}/${filename}`;
      await MenuItem.findByIdAndUpdate(item._id, { image: imagePath });
      console.log(`  ✅ ${slug} → ${filename}`);
      updated++;
    } else {
      console.log(`  ⚠️  No image for: ${slug}`);
      missed.push(slug);
      notFound++;
    }
  }

  console.log(`\n── Summary ──`);
  console.log(`  Updated : ${updated}`);
  console.log(`  Missing : ${notFound}`);

  if (missed.length > 0) {
    console.log(`\n── Items without images ──`);
    missed.forEach(s => console.log(`  - ${s}`));
  }

  await mongoose.disconnect();
  console.log('\n🎉 Done!');
}

run().catch((err) => {
  console.error('Error:', err);
  process.exit(1);
});
