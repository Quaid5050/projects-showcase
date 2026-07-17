import mongoose, { Schema, Document, Model } from "mongoose";

export interface IOrderItem {
  menuItemId: string;
  name: string;
  quantity: number;
  price: number;
}

export interface IStatusEmailLog {
  status: string;
  sentAt: Date;
  recipient: string;
}

export interface IOrder extends Document {
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  specialInstructions: string;
  items: IOrderItem[];
  subtotal: number;
  tax: number;
  tip: number;
  total: number;
  paymentStatus: "pending" | "paid" | "failed";
  orderStatus: "new" | "preparing" | "ready" | "completed" | "cancelled";
  stripeSessionId: string;
  stripePaymentIntentId: string;
  // Email tracking fields
  confirmationEmailSent: boolean;
  confirmationEmailSentAt?: Date;
  confirmationEmailStatus?: "sent" | "failed" | "skipped";
  confirmationEmailError?: string;
  customerOrderConfirmationSentAt?: Date;
  merchantNotificationEmailSent: boolean;
  merchantNotificationEmailSentAt?: Date;
  restaurantOrderEmailSent: boolean;
  restaurantOrderEmailSentAt?: Date;
  statusEmailLog: IStatusEmailLog[];
  createdAt: Date;
  updatedAt: Date;
}

const OrderItemSchema = new Schema<IOrderItem>(
  {
    menuItemId: { type: String, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 0 },
  },
  { _id: false }
);

const StatusEmailLogSchema = new Schema<IStatusEmailLog>(
  {
    status: { type: String, required: true },
    sentAt: { type: Date, required: true },
    recipient: { type: String, required: true },
  },
  { _id: false }
);

const OrderSchema = new Schema<IOrder>(
  {
    orderNumber: { type: String, unique: true },
    customerName: { type: String, required: true, trim: true },
    customerPhone: { type: String, required: true, trim: true },
    customerEmail: { type: String, required: true, trim: true, lowercase: true },
    specialInstructions: { type: String, default: "" },
    items: { type: [OrderItemSchema], required: true },
    subtotal: { type: Number, required: true, min: 0 },
    tax: { type: Number, required: true, min: 0 },
    tip: { type: Number, default: 0, min: 0 },
    total: { type: Number, required: true, min: 0 },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "failed"],
      default: "pending",
    },
    orderStatus: {
      type: String,
      enum: ["new", "preparing", "ready", "completed", "cancelled"],
      default: "new",
    },
    stripeSessionId: { type: String, default: "" },
    stripePaymentIntentId: { type: String, default: "" },
    // Email tracking
    confirmationEmailSent: { type: Boolean, default: false },
    confirmationEmailSentAt: { type: Date },
    confirmationEmailStatus: {
      type: String,
      enum: ["sent", "failed", "skipped"],
    },
    confirmationEmailError: { type: String },
    customerOrderConfirmationSentAt: { type: Date },
    merchantNotificationEmailSent: { type: Boolean, default: false },
    merchantNotificationEmailSentAt: { type: Date },
    restaurantOrderEmailSent: { type: Boolean, default: false },
    restaurantOrderEmailSentAt: { type: Date },
    statusEmailLog: { type: [StatusEmailLogSchema], default: [] },
  },
  { timestamps: true }
);

OrderSchema.pre("save", async function () {
  if (!this.orderNumber) {
    const count = await mongoose.models.Order.countDocuments();
    this.orderNumber = `CG-${String(count + 1).padStart(5, "0")}`;
  }
});

const Order: Model<IOrder> =
  mongoose.models.Order || mongoose.model<IOrder>("Order", OrderSchema);

export default Order;
