import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IMenuItemDocument extends Document {
  name: string;
  slug: string;
  description?: string;
  price: number;
  category: mongoose.Types.ObjectId;
  image?: string;
  isAvailable: boolean;
  isFeatured: boolean;
  sortOrder: number;
  createdAt: Date;
  updatedAt: Date;
}

const MenuItemSchema = new Schema<IMenuItemDocument>(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    description: { type: String, trim: true },
    price: { type: Number, required: true, min: 0 },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    image: { type: String },
    isAvailable: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    sortOrder: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default models.MenuItem || model<IMenuItemDocument>('MenuItem', MenuItemSchema);
