import mongoose, { Document, Schema } from 'mongoose';

export interface IInquiry extends Document {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  website?: string;
  businessType: string;
  inquiryCategory: string;
  productOrServiceNeeded: string;
  quantityOrVolume?: string;
  targetMarket?: string;
  message: string;
  consent: boolean;
  status: 'new' | 'reviewed' | 'contacted' | 'closed';
  source: 'contact' | 'product-modal' | 'homepage' | 'partnership' | 'industries';
  createdAt: Date;
  updatedAt: Date;
}

const InquirySchema = new Schema<IInquiry>(
  {
    fullName: { type: String, required: true, trim: true },
    companyName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    country: { type: String, required: true, trim: true },
    website: { type: String, trim: true },
    businessType: { type: String, required: true },
    inquiryCategory: { type: String, required: true },
    productOrServiceNeeded: { type: String, required: true, trim: true },
    quantityOrVolume: { type: String, trim: true },
    targetMarket: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    consent: { type: Boolean, required: true },
    status: {
      type: String,
      enum: ['new', 'reviewed', 'contacted', 'closed'],
      default: 'new',
    },
    source: {
      type: String,
      enum: ['contact', 'product-modal', 'homepage', 'partnership', 'industries'],
      default: 'contact',
    },
  },
  { timestamps: true }
);

export default mongoose.models.Inquiry || mongoose.model<IInquiry>('Inquiry', InquirySchema);
