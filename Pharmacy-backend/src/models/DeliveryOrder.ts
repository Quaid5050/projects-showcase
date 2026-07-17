import mongoose, { Document, Schema } from 'mongoose';

export type OrderStatus =
  | 'pending'
  | 'assigned'
  | 'picked_up'
  | 'on_the_way'
  | 'delivered'
  | 'failed'
  | 'cancelled';

export type PaymentStatus = 'pending' | 'collected' | 'waived';

export interface IStatusHistory {
  status: OrderStatus;
  timestamp: Date;
  updatedBy: mongoose.Types.ObjectId;
  notes?: string;
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  zip: string;
  coordinates?: { lat: number; lng: number };
}

export interface IDeliveryOrder extends Document {
  pharmacyId: mongoose.Types.ObjectId;
  patientId: mongoose.Types.ObjectId;
  driverId?: mongoose.Types.ObjectId;
  status: OrderStatus;
  pickupAddress: IAddress;
  deliveryAddress: IAddress;
  deliveryWindowStart?: Date;
  deliveryWindowEnd?: Date;
  medicationNotes?: string;
  driverInstructions?: string;
  failedReason?: string;
  isRecurring: boolean;
  codAmount: number;
  paymentStatus: PaymentStatus;
  proofOfDeliveryId?: mongoose.Types.ObjectId;
  trackingToken: string;
  statusHistory: IStatusHistory[];
  createdAt: Date;
  updatedAt: Date;
}

const addressSchema = new Schema<IAddress>(
  {
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
    coordinates: {
      lat: { type: Number },
      lng: { type: Number },
    },
  },
  { _id: false }
);

const deliveryOrderSchema = new Schema<IDeliveryOrder>(
  {
    pharmacyId: { type: Schema.Types.ObjectId, ref: 'Pharmacy', required: true },
    patientId: { type: Schema.Types.ObjectId, ref: 'Patient', required: true },
    driverId: { type: Schema.Types.ObjectId, ref: 'Driver' },
    status: {
      type: String,
      enum: ['pending', 'assigned', 'picked_up', 'on_the_way', 'delivered', 'failed', 'cancelled'],
      default: 'pending',
    },
    pickupAddress: { type: addressSchema, required: true },
    deliveryAddress: { type: addressSchema, required: true },
    deliveryWindowStart: { type: Date },
    deliveryWindowEnd: { type: Date },
    medicationNotes: { type: String },
    driverInstructions: { type: String },
    failedReason: { type: String },
    isRecurring: { type: Boolean, default: false },
    codAmount: { type: Number, default: 0, min: 0 },
    paymentStatus: {
      type: String,
      enum: ['pending', 'collected', 'waived'],
      default: 'pending',
    },
    proofOfDeliveryId: { type: Schema.Types.ObjectId, ref: 'ProofOfDelivery' },
    trackingToken: { type: String, required: true, unique: true },
    statusHistory: [
      {
        status: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
        updatedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        notes: { type: String },
      },
    ],
  },
  { timestamps: true }
);

// Index for efficient querying by pharmacy, status, and driver
deliveryOrderSchema.index({ pharmacyId: 1, status: 1 });
deliveryOrderSchema.index({ driverId: 1, status: 1 });

export const DeliveryOrder = mongoose.model<IDeliveryOrder>('DeliveryOrder', deliveryOrderSchema);
