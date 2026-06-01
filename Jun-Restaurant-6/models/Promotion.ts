import mongoose, { Schema, Document } from "mongoose";

export interface IPromotion extends Document {
  code: string;
  discountType: "percentage" | "fixed";
  value: number;
  minOrder?: number;
  maxUses?: number;
  usedCount: number;
  active: boolean;
  startDate?: Date;
  endDate?: Date;
}

const PromotionSchema = new Schema<IPromotion>(
  {
    code: { type: String, required: true, unique: true, uppercase: true },
    discountType: { type: String, enum: ["percentage", "fixed"], required: true },
    value: { type: Number, required: true },
    minOrder: Number,
    maxUses: Number,
    usedCount: { type: Number, default: 0 },
    active: { type: Boolean, default: true },
    startDate: Date,
    endDate: Date,
  },
  { timestamps: true }
);

export default mongoose.models.Promotion || mongoose.model<IPromotion>("Promotion", PromotionSchema);
