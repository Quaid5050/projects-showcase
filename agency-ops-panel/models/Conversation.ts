import mongoose, { Schema, Document, Model } from 'mongoose';
import { ConversationChannel, MessageSenderType, MessageDirection, MessageStatus } from '@/types';

export interface IMessage {
  _id: mongoose.Types.ObjectId;
  senderType: MessageSenderType;
  content: string;
  direction: MessageDirection;
  status: MessageStatus;
  createdBy?: mongoose.Types.ObjectId;
  createdAt: Date;
}

export interface IConversation extends Document {
  _id: mongoose.Types.ObjectId;
  clientId?: mongoose.Types.ObjectId;
  leadId?: mongoose.Types.ObjectId;
  projectId?: mongoose.Types.ObjectId;
  assignedTo?: mongoose.Types.ObjectId;
  channel: ConversationChannel;
  messages: IMessage[];
  lastMessageAt: Date;
  status: 'open' | 'closed' | 'pending';
  createdAt: Date;
  updatedAt: Date;
}

const MessageSchema = new Schema<IMessage>({
  senderType: { type: String, enum: ['client','sales','team','ai','system'], required: true },
  content: { type: String, required: true },
  direction: { type: String, enum: ['inbound','outbound','internal'], required: true },
  status: { type: String, enum: ['draft','approved','sent'], default: 'sent' },
  createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
}, { _id: true });

const ConversationSchema = new Schema<IConversation>({
  clientId: { type: Schema.Types.ObjectId, ref: 'Client' },
  leadId: { type: Schema.Types.ObjectId, ref: 'Lead' },
  projectId: { type: Schema.Types.ObjectId, ref: 'Project' },
  assignedTo: { type: Schema.Types.ObjectId, ref: 'User' },
  channel: { type: String, enum: ['manual','whatsapp','email','instagram','facebook','website'], default: 'manual' },
  messages: { type: [MessageSchema], default: [] },
  lastMessageAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['open','closed','pending'], default: 'open' },
}, { timestamps: true });

ConversationSchema.index({ clientId: 1 });
ConversationSchema.index({ leadId: 1 });
ConversationSchema.index({ lastMessageAt: -1 });

const Conversation: Model<IConversation> =
  mongoose.models.Conversation || mongoose.model<IConversation>('Conversation', ConversationSchema);
export default Conversation;
