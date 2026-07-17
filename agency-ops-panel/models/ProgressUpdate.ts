import mongoose, { Schema, Document, Model } from 'mongoose';
import { ProgressVisibility } from '@/types';

export interface IProgressUpdate extends Document {
  _id: mongoose.Types.ObjectId;
  clientId: mongoose.Types.ObjectId;
  projectId: mongoose.Types.ObjectId;
  serviceId: mongoose.Types.ObjectId;
  updateTitle: string;
  updateText: string;
  completedWork: string;
  pendingWork: string;
  blockers: string;
  nextSteps: string;
  eta: string;
  visibility: ProgressVisibility;
  createdBy: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const ProgressUpdateSchema = new Schema<IProgressUpdate>({
  clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
  updateTitle: { type: String, required: true, trim: true },
  updateText: { type: String, required: true },
  completedWork: { type: String, default: '' },
  pendingWork: { type: String, default: '' },
  blockers: { type: String, default: '' },
  nextSteps: { type: String, default: '' },
  eta: { type: String, default: '' },
  visibility: { type: String, enum: ['internal','client_safe'], default: 'internal' },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

ProgressUpdateSchema.index({ projectId: 1, createdAt: -1 });
ProgressUpdateSchema.index({ clientId: 1 });

const ProgressUpdate: Model<IProgressUpdate> =
  mongoose.models.ProgressUpdate ||
  mongoose.model<IProgressUpdate>('ProgressUpdate', ProgressUpdateSchema);
export default ProgressUpdate;
