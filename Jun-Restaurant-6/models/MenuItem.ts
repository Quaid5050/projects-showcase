import mongoose, { Schema, Document } from "mongoose";

const OptionItemSchema = new Schema({
  key: String,
  label: String,
  priceModifier: { type: Number, default: 0 },
});

const OptionGroupSchema = new Schema({
  groupKey: String,
  groupLabel: String,
  minSelect: { type: Number, default: 0 },
  maxSelect: { type: Number, default: 1 },
  isRequired: { type: Boolean, default: false },
  options: [OptionItemSchema],
});

export interface IMenuItem extends Document {
  name: string;
  slug: string;
  description?: string;
  price: number;
  category: mongoose.Types.ObjectId;
  image?: string;
  ingredients: string[];
  badges: string[];
  isAvailable: boolean;
  isFeatured: boolean;
  isPopular: boolean;
  isSpicy: boolean;
  isVegetarian: boolean;
  options: any[];
}

const MenuItemSchema = new Schema<IMenuItem>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    description: String,
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
    image: String,
    ingredients: [String],
    badges: [String],
    isAvailable: { type: Boolean, default: true },
    isFeatured: { type: Boolean, default: false },
    isPopular: { type: Boolean, default: false },
    isSpicy: { type: Boolean, default: false },
    isVegetarian: { type: Boolean, default: false },
    options: [OptionGroupSchema],
  },
  { timestamps: true }
);

export default mongoose.models.MenuItem || mongoose.model<IMenuItem>("MenuItem", MenuItemSchema);
