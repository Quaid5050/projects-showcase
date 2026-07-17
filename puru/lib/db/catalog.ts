import connectDB from '@/lib/mongodb';
import ProductCategory from '@/models/ProductCategory';
import Industry from '@/models/Industry';
import PartnershipType from '@/models/PartnershipType';
import { productCategories } from '@/lib/data/products';
import { industries } from '@/lib/data/industries';
import { partnershipTypes } from '@/lib/data/partnerships';

const DEFAULT_IMAGE = '/hero-background.png';

export async function getProductsFromDb() {
  try {
    await connectDB();
    const docs = await ProductCategory.find({}).sort({ order: 1 }).lean();
    if (docs.length > 0) {
      return docs.map((doc) => ({
        id: doc._id.toString(),
        title: doc.title,
        slug: doc.slug,
        category: doc.category,
        shortDescription: doc.shortDescription,
        audience: doc.audience,
        icon: doc.icon || 'Package',
        order: doc.order,
        isFeatured: doc.isFeatured,
      }));
    }
  } catch {
    /* fallback below */
  }

  return productCategories.map((p, i) => ({
    id: String(i + 1),
    title: p.title,
    slug: p.slug,
    category: p.category,
    shortDescription: p.shortDescription,
    audience: p.audience.join(', '),
    icon: p.icon,
    order: i + 1,
    isFeatured: i < 3 || p.slug === 'custom-product-sourcing',
  }));
}

export async function getIndustriesFromDb() {
  try {
    await connectDB();
    const docs = await Industry.find({}).sort({ order: 1 }).lean();
    if (docs.length > 0) {
      return docs.map((doc) => ({
        id: doc._id.toString(),
        title: doc.title,
        slug: doc.slug,
        description: doc.description,
        icon: doc.icon,
        image: doc.image,
        order: doc.order,
      }));
    }
  } catch {
    /* fallback below */
  }

  return industries.map((ind, i) => ({
    id: String(i + 1),
    title: ind.title,
    slug: ind.slug,
    description: ind.description,
    icon: ind.icon,
    image: DEFAULT_IMAGE,
    order: i + 1,
  }));
}

export async function getPartnershipsFromDb() {
  try {
    await connectDB();
    const docs = await PartnershipType.find({}).sort({ order: 1 }).lean();
    if (docs.length > 0) {
      return docs.map((doc) => ({
        id: doc._id.toString(),
        title: doc.title,
        slug: doc.slug,
        description: doc.description,
        icon: doc.icon,
        image: doc.image,
        order: doc.order,
      }));
    }
  } catch {
    /* fallback below */
  }

  return partnershipTypes.map((p, i) => ({
    id: String(i + 1),
    title: p.title,
    slug: p.slug,
    description: p.description,
    icon: p.icon,
    image: p.image,
    order: i + 1,
  }));
}
