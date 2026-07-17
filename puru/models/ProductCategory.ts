import mongoose, { Document, Schema } from 'mongoose';

export interface IProductCategory extends Document {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  image: string;
  icon: string;
  audience: string;
  order: number;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProductCategorySchema = new Schema<IProductCategory>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    category: { type: String, required: true },
    shortDescription: { type: String, required: true, trim: true },
    image: { type: String, default: '/hero-background.png' },
    icon: { type: String, default: 'Package' },
    audience: { type: String, required: true, trim: true },
    order: { type: Number, default: 0 },
    isFeatured: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.models.ProductCategory || mongoose.model<IProductCategory>('ProductCategory', ProductCategorySchema);
