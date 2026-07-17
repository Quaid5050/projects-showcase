import mongoose, { Document, Schema } from 'mongoose';

export interface IIndustry extends Document {
  title: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const IndustrySchema = new Schema<IIndustry>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    description: { type: String, required: true, trim: true },
    image: { type: String, required: true },
    icon: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.Industry || mongoose.model<IIndustry>('Industry', IndustrySchema);
