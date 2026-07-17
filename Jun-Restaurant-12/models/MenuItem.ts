import mongoose, { Schema, Document, Model } from "mongoose";

export interface IMenuItem extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isAvailable: boolean;
  sourceUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

const MenuItemSchema = new Schema<IMenuItem>(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true, min: 0 },
    category: { type: String, required: true, trim: true },
    image: { type: String, default: "" },
    isAvailable: { type: Boolean, default: true },
    sourceUrl: { type: String, default: "" },
  },
  { timestamps: true }
);

MenuItemSchema.index({ category: 1 });
MenuItemSchema.index({ name: 1, category: 1 }, { unique: true });

const MenuItem: Model<IMenuItem> =
  mongoose.models.MenuItem ||
  mongoose.model<IMenuItem>("MenuItem", MenuItemSchema);

export default MenuItem;
