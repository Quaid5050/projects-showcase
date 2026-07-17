import mongoose, { Schema, Document, Model } from 'mongoose';
import { LeadStage, Priority } from '@/types';

export interface ILead extends Document {
  _id: mongoose.Types.ObjectId;
  name: string; email?: string; phone?: string;
  companyName?: string; businessType?: string;
  source?: string; serviceInterest?: string;
  budget?: string; timeline?: string; location?: string;
  message: string;
  assignedTo?: mongoose.Types.ObjectId;
  stage: LeadStage; priority: Priority;
  aiSummary?: string; qualificationScore?: number;
  tags: string[];
  convertedClientId?: mongoose.Types.ObjectId;
  createdAt: Date; updatedAt: Date;
}

const LeadSchema = new Schema<ILead>({
  name: { type: String, required: true, trim: true },
  email: { type: String, lowercase: true, trim: true },
  phone: String,
  companyName: String,
  businessType: String,
  source: String,
  serviceInterest: String,
  budget: String,
  timeline: String,
  location: String,
  message: { type: String, required: true },
  assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
  stage: { type: String, enum: ['new','contacted','qualifying','proposal_sent','negotiation','won','lost'], default: 'new' },
  priority: { type: String, enum: ['low','medium','high','urgent'], default: 'medium' },
  aiSummary: String,
  qualificationScore: { type: Number, min: 0, max: 100 },
  tags: { type: [String], default: [] },
  convertedClientId: { type: Schema.Types.ObjectId, ref: 'Client' },
}, { timestamps: true });

LeadSchema.index({ stage: 1 });
LeadSchema.index({ assignedTo: 1 });

const Lead: Model<ILead> = mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);
export default Lead;
