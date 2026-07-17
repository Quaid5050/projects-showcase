import mongoose, { Schema, Document, Model } from 'mongoose';
import { ProjectType, ProjectStatus, Priority } from '@/types';

export interface IProject extends Document {
  _id: mongoose.Types.ObjectId;
  clientId: mongoose.Types.ObjectId;
  serviceId: mongoose.Types.ObjectId;
  name: string;
  description: string;
  type: ProjectType;
  status: ProjectStatus;
  priority: Priority;
  assignedManager?: mongoose.Types.ObjectId;
  assignedTeam: mongoose.Types.ObjectId[];
  startDate?: Date;
  dueDate?: Date;
  completedAt?: Date;
  progressPercentage: number;
  currentStage: string;
  latestUpdate: string;
  risks: string;
  nextStep: string;
  clientPortalEnabled: boolean;
  clientPortalToken: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>({
  clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
  serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
  name: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  type: {
    type: String,
    enum: ['website_development','app_development','google_ads','meta_ads','seo','branding','social_media','graphic_design','support','other'],
    default: 'other',
  },
  status: {
    type: String,
    enum: ['not_started','in_progress','waiting_client','review','completed','paused','cancelled'],
    default: 'not_started',
  },
  priority: { type: String, enum: ['low','medium','high','urgent'], default: 'medium' },
  assignedManager: { type: Schema.Types.ObjectId, ref: 'User' },
  assignedTeam: [{ type: Schema.Types.ObjectId, ref: 'User' }],
  startDate: Date,
  dueDate: Date,
  completedAt: Date,
  progressPercentage: { type: Number, default: 0, min: 0, max: 100 },
  currentStage: { type: String, default: '' },
  latestUpdate: { type: String, default: '' },
  risks: { type: String, default: '' },
  nextStep: { type: String, default: '' },
  clientPortalEnabled: { type: Boolean, default: false },
  clientPortalToken: { type: String, default: null, sparse: true },
}, { timestamps: true });

ProjectSchema.index({ clientId: 1 });
ProjectSchema.index({ serviceId: 1 });
ProjectSchema.index({ status: 1 });
ProjectSchema.index({ assignedManager: 1 });

const Project: Model<IProject> = mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
export default Project;
