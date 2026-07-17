/**
 * Seeds products, industries, and partnerships into MongoDB.
 * Run: npx tsx scripts/seed-entities.ts
 * Or: npm run seed (includes this step)
 */

import mongoose from 'mongoose';
import { productCategories } from '../lib/data/products';
import { industries } from '../lib/data/industries';
import { partnershipTypes } from '../lib/data/partnerships';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/yuvaan-international';
const DEFAULT_IMAGE = '/hero-background.png';

const ProductCategorySchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    category: String,
    shortDescription: String,
    image: { type: String, default: DEFAULT_IMAGE },
    icon: { type: String, default: 'Package' },
    audience: String,
    order: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const IndustrySchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    description: String,
    image: { type: String, default: DEFAULT_IMAGE },
    icon: String,
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const PartnershipTypeSchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    description: String,
    icon: String,
    image: { type: String, default: DEFAULT_IMAGE },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const ProductCategory = mongoose.models.ProductCategory || mongoose.model('ProductCategory', ProductCategorySchema);
const Industry = mongoose.models.Industry || mongoose.model('Industry', IndustrySchema);
const PartnershipType = mongoose.models.PartnershipType || mongoose.model('PartnershipType', PartnershipTypeSchema);

async function seedEntities() {
  console.log('\n📦 Seeding catalog entities (products, industries, partnerships)...');
  console.log('📡 Connecting to:', MONGODB_URI);

  await mongoose.connect(MONGODB_URI, { serverSelectionTimeoutMS: 8000 });

  let productsAdded = 0;
  for (let i = 0; i < productCategories.length; i++) {
    const p = productCategories[i];
    const existing = await ProductCategory.findOne({ slug: p.slug });
    if (!existing) {
      await ProductCategory.create({
        title: p.title,
        slug: p.slug,
        category: p.category,
        shortDescription: p.shortDescription,
        image: DEFAULT_IMAGE,
        icon: p.icon,
        audience: p.audience.join(', '),
        order: i + 1,
        isFeatured: i < 3 || p.slug === 'custom-product-sourcing',
      });
      productsAdded++;
    }
  }
  console.log(`   ✅ Products: ${productsAdded} added (${productCategories.length - productsAdded} existed)`);

  let industriesAdded = 0;
  for (let i = 0; i < industries.length; i++) {
    const ind = industries[i];
    const existing = await Industry.findOne({ slug: ind.slug });
    if (!existing) {
      await Industry.create({
        title: ind.title,
        slug: ind.slug,
        description: ind.description,
        image: DEFAULT_IMAGE,
        icon: ind.icon,
        order: i + 1,
      });
      industriesAdded++;
    }
  }
  console.log(`   ✅ Industries: ${industriesAdded} added (${industries.length - industriesAdded} existed)`);

  let partnershipsAdded = 0;
  for (let i = 0; i < partnershipTypes.length; i++) {
    const p = partnershipTypes[i];
    const existing = await PartnershipType.findOne({ slug: p.slug });
    if (!existing) {
      await PartnershipType.create({
        title: p.title,
        slug: p.slug,
        description: p.description,
        icon: p.icon,
        image: p.image,
        order: i + 1,
      });
      partnershipsAdded++;
    }
  }
  console.log(`   ✅ Partnerships: ${partnershipsAdded} added (${partnershipTypes.length - partnershipsAdded} existed)`);

  await mongoose.disconnect();
  console.log('📦 Catalog seed complete.\n');
}

seedEntities().catch((err) => {
  console.error('❌ Entity seed failed:', err.message);
  process.exit(1);
});
