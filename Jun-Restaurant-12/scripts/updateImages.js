/**
 * Fixes menu item images in MongoDB.
 * 1. Clears ALL existing images (removes wrong mappings)
 * 2. Ensures the 21 whitelisted products exist
 * 3. Sets images ONLY on whitelisted products (exact name match)
 *
 * Run: node scripts/updateImages.js
 */

const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env.local") });

const {
  IMAGE_BY_NAME,
  getMenuItemImage,
  MENU_ITEMS_TO_ENSURE,
} = require("./menuImages");

async function run() {
  console.log("🔌 Connecting to MongoDB...");
  await mongoose.connect(process.env.MONGODB_URI, { bufferCommands: false });
  console.log("✅ Connected\n");

  const col = mongoose.connection.db.collection("menuitems");

  // Remove corrupt documents from prior failed imports
  const removed = await col.deleteMany({
    $or: [{ name: null }, { name: { $exists: false } }, { name: "" }],
  });
  if (removed.deletedCount > 0) {
    console.log(`🗑️  Removed ${removed.deletedCount} invalid menu item(s)\n`);
  }

  // Step 1: Clear every image field
  const cleared = await col.updateMany({}, { $set: { image: "" } });
  console.log(`🧹 Cleared images from ${cleared.modifiedCount} items\n`);

  // Step 2: Ensure whitelisted products exist in the database
  let added = 0;
  for (const item of MENU_ITEMS_TO_ENSURE) {
    const image = getMenuItemImage(item.name);
    const existing = await col.findOne({
      name: { $regex: `^${item.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, $options: "i" },
      category: item.category,
    });

    if (existing) {
      await col.updateOne(
        { _id: existing._id },
        { $set: { price: item.price, image, updatedAt: new Date() } }
      );
      continue;
    }

    await col.insertOne({
      name: item.name,
      category: item.category,
      description: "",
      price: item.price,
      image,
      isAvailable: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    console.log(`  + Added: [${item.category}] ${item.name}`);
    added++;
  }
  if (added > 0) console.log(`\n📦 Added ${added} missing menu items\n`);

  // Step 3: Set images on exact matches (canonical + DB aliases)
  let updated = 0;
  for (const [name, image] of Object.entries(IMAGE_BY_NAME)) {
    const result = await col.updateMany(
      { name: { $regex: `^${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, $options: "i" } },
      { $set: { image } }
    );
    if (result.modifiedCount > 0) {
      console.log(`  ✓ ${name}`);
      updated += result.modifiedCount;
    }
  }

  // Step 4: Verify — no item outside whitelist should have an image
  const allowedNames = Object.keys(IMAGE_BY_NAME).map((n) => n.toLowerCase());
  const withImages = await col.find({ image: { $ne: "" } }).toArray();
  const stray = withImages.filter(
    (i) => !allowedNames.includes(i.name.trim().toLowerCase())
  );
  if (stray.length > 0) {
    console.warn("\n⚠️  Removing stray images from non-whitelisted items:");
    for (const item of stray) {
      await col.updateOne({ _id: item._id }, { $set: { image: "" } });
      console.warn(`  ✗ ${item.name}`);
    }
  }

  const finalCount = await col.countDocuments({ image: { $ne: "" } });
  await mongoose.disconnect();
  console.log(`\n✅ Done — ${updated} images set, ${finalCount} items now have photos.`);
  process.exit(0);
}

run().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
