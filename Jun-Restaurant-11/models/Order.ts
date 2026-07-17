import mongoose, { Schema, Document, models, model } from 'mongoose';

export interface IOrderItemDocument {
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  subtotal: number;
}

export interface IOrderDocument extends Document {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  notes?: string;
  items: IOrderItemDocument[];
  subtotal: number;
  tax: number;
  total: number;
  paymentStatus: 'paid' | 'unpaid';
  orderStatus: 'new' | 'pending' | 'paid' | 'completed' | 'cancelled';
  stripeCheckoutSessionId?: string;
  stripePaymentIntentId?: string;
  confirmationEmailSent: boolean;
  confirmationEmailSentAt?: Date;
  adminEmailSent: boolean;
  adminEmailSentAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const OrderItemSchema = new Schema<IOrderItemDocument>(
  {
    menuItemId: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true, min: 1 },
    subtotal: { type: Number, required: true },
  },
  { _id: false }
);

const OrderSchema = new Schema<IOrderDocument>(
  {
    orderNumber: { type: String, required: true, unique: true },
    customerName: { type: String, required: true, trim: true },
    customerEmail: { type: String, required: true, trim: true, lowercase: true },
    customerPhone: { type: String, required: true, trim: true },
    notes: { type: String, trim: true },
    items: [OrderItemSchema],
    subtotal: { type: Number, required: true },
    tax: { type: Number, required: true },
    total: { type: Number, required: true },
    paymentStatus: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid' },
    orderStatus: {
      type: String,
      enum: ['new', 'pending', 'paid', 'completed', 'cancelled'],
      default: 'pending',
    },
    stripeCheckoutSessionId: { type: String },
    stripePaymentIntentId: { type: String },
    confirmationEmailSent: { type: Boolean, default: false },
    confirmationEmailSentAt: { type: Date },
    adminEmailSent: { type: Boolean, default: false },
    adminEmailSentAt: { type: Date },
  },
  { timestamps: true }
);

export default models.Order || model<IOrderDocument>('Order', OrderSchema);
