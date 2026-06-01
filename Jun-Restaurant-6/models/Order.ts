import mongoose, { Schema, Document } from "mongoose";

const OrderItemSchema = new Schema({
  menuItemId: { type: Schema.Types.ObjectId, ref: "MenuItem" },
  name: String,
  quantity: Number,
  price: Number,
  selectedOptions: { type: Map, of: String },
  notes: String,
});

const StatusEmailLogSchema = new Schema({
  status: String,
  sentAt: Date,
  recipient: String,
});

export interface IOrder extends Document {
  orderNumber: string;
  userId?: mongoose.Types.ObjectId;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  orderType: string;
  servingMode: string;
  deliveryAddress?: string;
  items: any[];
  subtotal: number;
  tax: number;
  deliveryFee: number;
  discount: number;
  tip: number;
  total: number;
  promoCode?: string;
  paymentStatus: "unpaid" | "paid" | "failed" | "refunded";
  orderStatus: "pending" | "paid" | "preparing" | "ready" | "completed" | "cancelled" | "refunded";
  stripeCheckoutSessionId?: string;
  stripePaymentIntentId?: string;
  notes?: string;
  pickupType: "ASAP" | "SCHEDULED";
  pickupTime?: Date;
  confirmationEmailSent: boolean;
  confirmationEmailSentAt?: Date;
  confirmationEmailStatus?: string;
  confirmationEmailError?: string;
  merchantNotificationEmailSent: boolean;
  merchantNotificationEmailSentAt?: Date;
  restaurantOrderEmailSent: boolean;
  statusEmailLog: any[];
  orderAppSynced: boolean;
  orderAppSyncedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const OrderSchema = new Schema<IOrder>(
  {
    orderNumber: { type: String, required: true, unique: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true },
    customerPhone: { type: String, required: true },
    orderType: { type: String, default: "pickup" },
    servingMode: { type: String, default: "in_store_pickup" },
    deliveryAddress: String,
    items: [OrderItemSchema],
    subtotal: { type: Number, required: true },
    tax: { type: Number, required: true },
    deliveryFee: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    tip: { type: Number, default: 0 },
    total: { type: Number, required: true },
    promoCode: String,
    paymentStatus: {
      type: String,
      enum: ["unpaid", "paid", "failed", "refunded"],
      default: "unpaid",
    },
    orderStatus: {
      type: String,
      enum: ["pending", "paid", "preparing", "ready", "completed", "cancelled", "refunded"],
      default: "pending",
    },
    stripeCheckoutSessionId: String,
    stripePaymentIntentId: String,
    notes: String,
    pickupType: { type: String, enum: ["ASAP", "SCHEDULED"], default: "ASAP" },
    pickupTime: Date,
    confirmationEmailSent: { type: Boolean, default: false },
    confirmationEmailSentAt: Date,
    confirmationEmailStatus: String,
    confirmationEmailError: String,
    merchantNotificationEmailSent: { type: Boolean, default: false },
    merchantNotificationEmailSentAt: Date,
    restaurantOrderEmailSent: { type: Boolean, default: false },
    statusEmailLog: [StatusEmailLogSchema],
    orderAppSynced: { type: Boolean, default: false },
    orderAppSyncedAt: Date,
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);
