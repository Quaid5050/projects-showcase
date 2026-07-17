import mongoose, { Schema, Document, Model } from 'mongoose';
import { TaskStatus, Priority } from '@/types';

export interface ITask extends Document {
  _id: mongoose.Types.ObjectId;
  projectId: mongoose.Types.ObjectId;
  clientId: mongoose.Types.ObjectId;
  serviceId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  status: TaskStatus;
  priority: Priority;
  assignedTo?: mongoose.Types.ObjectId;
  dueDate?: Date;
  completedAt?: Date;
  blockers: string;
  internalNotes: string;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new Schema<ITask>({
  projectId: { type: Schema.Types.ObjectId, ref: 'Project', required: true },
  clientId: { type: Schema.Types.ObjectId, ref: 'Client', required: true },
  serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  status: { type: String, enum: ['todo','in_progress','review','completed','blocked'], default: 'todo' },
  priority: { type: String, enum: ['low','medium','high','urgent'], default: 'medium' },
  assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
  dueDate: Date,
  completedAt: Date,
  blockers: { type: String, default: '' },
  internalNotes: { type: String, default: '' },
}, { timestamps: true });

TaskSchema.index({ projectId: 1 });
TaskSchema.index({ clientId: 1 });
TaskSchema.index({ assignedTo: 1 });
TaskSchema.index({ status: 1 });

const Task: Model<ITask> = mongoose.models.Task || mongoose.model<ITask>('Task', TaskSchema);
export default Task;
