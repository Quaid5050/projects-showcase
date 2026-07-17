import mongoose, { Document, Schema } from 'mongoose';

export interface ISiteContent extends Document {
  section: string;       // e.g. 'hero', 'about', 'navbar', 'footer'
  key: string;           // e.g. 'headline', 'subheadline', 'ctaText'
  value: string;
  type: 'text' | 'textarea' | 'url' | 'color' | 'boolean';
  label: string;         // Human readable label
  updatedAt: Date;
}

const SiteContentSchema = new Schema<ISiteContent>(
  {
    section: { type: String, required: true, trim: true },
    key: { type: String, required: true, trim: true },
    value: { type: String, default: '' },
    type: { type: String, enum: ['text', 'textarea', 'url', 'color', 'boolean'], default: 'text' },
    label: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

SiteContentSchema.index({ section: 1, key: 1 }, { unique: true });

export default mongoose.models.SiteContent || mongoose.model<ISiteContent>('SiteContent', SiteContentSchema);
