import mongoose, { Document, Schema } from 'mongoose';

export type NotificationChannel = 'sms' | 'email' | 'push';
export type NotificationType = 'order_created' | 'out_for_delivery' | 'delivered' | 'failed';
export type NotificationStatus = 'pending' | 'sent' | 'failed';

export interface INotification extends Document {
  orderId: mongoose.Types.ObjectId;
  patientId: mongoose.Types.ObjectId;
  channel: NotificationChannel;
  type: NotificationType;
  status: NotificationStatus;
  sentAt?: Date;
}

const notificationSchema = new Schema<INotification>(
  {
    orderId: { type: Schema.Types.ObjectId, ref: 'DeliveryOrder', required: true },
    patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
    channel: { type: String, enum: ['sms', 'email', 'push'], required: true },
    type: {
      type: String,
      enum: ['order_created', 'out_for_delivery', 'delivered', 'failed'],
      required: true,
    },
    status: { type: String, enum: ['pending', 'sent', 'failed'], default: 'pending' },
    sentAt: { type: Date },
  },
  { timestamps: true }
);

export const Notification = mongoose.model<INotification>('Notification', notificationSchema);
