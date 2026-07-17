import mongoose, { Schema, Document, Model } from "mongoose";

export interface IPricingItem extends Document {
  title: string;
  description: string;
  price: string;
  duration?: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const PricingItemSchema = new Schema<IPricingItem>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    price: { type: String, default: "Contact on WhatsApp" },
    duration: { type: String },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const PricingItem: Model<IPricingItem> =
  mongoose.models.PricingItem ||
  mongoose.model<IPricingItem>("PricingItem", PricingItemSchema);

export default PricingItem;
