import mongoose, { Document, Schema } from 'mongoose';

export interface IPartnershipType extends Document {
  title: string;
  slug: string;
  description: string;
  icon: string;
  image: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

const PartnershipTypeSchema = new Schema<IPartnershipType>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    description: { type: String, required: true, trim: true },
    icon: { type: String, required: true },
    image: { type: String, required: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

export default mongoose.models.PartnershipType || mongoose.model<IPartnershipType>('PartnershipType', PartnershipTypeSchema);
