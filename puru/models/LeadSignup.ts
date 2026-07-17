import mongoose, { Document, Schema } from 'mongoose';

export interface ILeadSignup extends Document {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  businessType?: string;
  status: 'new' | 'contacted';
  createdAt: Date;
  updatedAt: Date;
}

const LeadSignupSchema = new Schema<ILeadSignup>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true },
    company: { type: String, trim: true },
    businessType: { type: String },
    status: { type: String, enum: ['new', 'contacted'], default: 'new' },
  },
  { timestamps: true }
);

export default mongoose.models.LeadSignup || mongoose.model<ILeadSignup>('LeadSignup', LeadSignupSchema);
