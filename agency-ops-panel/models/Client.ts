import mongoose, { Schema, Document, Model } from 'mongoose';
import { ClientStatus } from '@/types';

export interface IClient extends Document {
  _id: mongoose.Types.ObjectId;
  name: string; companyName?: string; email?: string; phone?: string;
  businessType?: string; source?: string;
  status: ClientStatus;
  assignedSales?: mongoose.Types.ObjectId;
  assignedManager?: mongoose.Types.ObjectId;
  notes: string; tags: string[];
  createdAt: Date; updatedAt: Date;
}

const ClientSchema = new Schema<IClient>({
  name: { type: String, required: true, trim: true },
  companyName: { type: String, trim: true },
  email: { type: String, lowercase: true, trim: true },
  phone: { type: String, trim: true },
  businessType: String,
  source: String,
  status: { type: String, enum: ['lead','active','paused','completed','lost'], default: 'active' },
  assignedSales: { type: Schema.Types.ObjectId, ref: 'User' },
  assignedManager: { type: Schema.Types.ObjectId, ref: 'User' },
  notes: { type: String, default: '' },
  tags: { type: [String], default: [] },
}, { timestamps: true });

ClientSchema.index({ status: 1 });
ClientSchema.index({ assignedSales: 1 });
ClientSchema.index({ name: 'text', companyName: 'text' });

const Client: Model<IClient> = mongoose.models.Client || mongoose.model<IClient>('Client', ClientSchema);
export default Client;
