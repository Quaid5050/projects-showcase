import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IService extends Document {
  _id: mongoose.Types.ObjectId;
  name: string; slug: string; description: string;
  discoveryQuestions: string[]; processSteps: string[];
  deliverables: string[]; commonObjections: string[];
  reportingFields: string[];
  isActive: boolean;
  createdAt: Date; updatedAt: Date;
}

const ServiceSchema = new Schema<IService>({
  name: { type: String, required: true, trim: true },
  slug: { type: String, required: true, unique: true, lowercase: true },
  description: { type: String, default: '' },
  discoveryQuestions: { type: [String], default: [] },
  processSteps: { type: [String], default: [] },
  deliverables: { type: [String], default: [] },
  commonObjections: { type: [String], default: [] },
  reportingFields: { type: [String], default: [] },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const Service: Model<IService> = mongoose.models.Service || mongoose.model<IService>('Service', ServiceSchema);
export default Service;
