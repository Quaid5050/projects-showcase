import mongoose, { Schema, Document, Model } from 'mongoose';
import { AIReplyStatus, RiskLevel } from '@/types';

export interface IAIReply extends Document {
  _id: mongoose.Types.ObjectId;
  clientId?: mongoose.Types.ObjectId;
  projectId?: mongoose.Types.ObjectId;
  leadId?: mongoose.Types.ObjectId;
  conversationId?: mongoose.Types.ObjectId;
  replyType: 'client_reply' | 'sales_reply' | 'followup' | 'project_summary' | 'weekly_report' | 'operations_answer';
  generatedBy: mongoose.Types.ObjectId;
  inputMessage: string;
  suggestedReply: string;
  shortReply: string;
  internalSummary: string;
  missingInfo: string[];
  riskLevel: RiskLevel;
  nextStep: string;
  reviewNotes: string;
  status: AIReplyStatus;
  approvedBy?: mongoose.Types.ObjectId;
  rejectedBy?: mongoose.Types.ObjectId;
  rejectionReason?: string;
  editedContent?: string;
  createdAt: Date;
  updatedAt: Date;
}

const AIReplySchema = new Schema<IAIReply>({
  clientId: { type: Schema.Types.ObjectId, ref: 'Client' },
  projectId: { type: Schema.Types.ObjectId, ref: 'Project' },
  leadId: { type: Schema.Types.ObjectId, ref: 'Lead' },
  conversationId: { type: Schema.Types.ObjectId, ref: 'Conversation' },
  replyType: {
    type: String,
    enum: ['client_reply','sales_reply','followup','project_summary','weekly_report','operations_answer'],
    default: 'client_reply',
  },
  generatedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  inputMessage: { type: String, default: '' },
  suggestedReply: { type: String, default: '' },
  shortReply: { type: String, default: '' },
  internalSummary: { type: String, default: '' },
  missingInfo: { type: [String], default: [] },
  riskLevel: { type: String, enum: ['low','medium','high'], default: 'low' },
  nextStep: { type: String, default: '' },
  reviewNotes: { type: String, default: '' },
  status: { type: String, enum: ['draft','approved','rejected','edited'], default: 'draft' },
  approvedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  rejectedBy: { type: Schema.Types.ObjectId, ref: 'User' },
  rejectionReason: String,
  editedContent: String,
}, { timestamps: true });

AIReplySchema.index({ status: 1, createdAt: -1 });
AIReplySchema.index({ clientId: 1 });
AIReplySchema.index({ generatedBy: 1 });

const AIReply: Model<IAIReply> =
  mongoose.models.AIReply || mongoose.model<IAIReply>('AIReply', AIReplySchema);
export default AIReply;
