import mongoose, { Document, Schema } from 'mongoose';

export interface IPharmacy extends Document {
  name: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    coordinates?: { lat: number; lng: number };
  };
  phone: string;
  email: string;
  operatingHours: { open: string; close: string };
  settings: { defaultDeliveryRadius: number };
  createdAt: Date;
  updatedAt: Date;
}

const pharmacySchema = new Schema<IPharmacy>(
  {
    name: { type: String, required: true, trim: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true },
      coordinates: {
        lat: { type: Number },
        lng: { type: Number },
      },
    },
    phone: { type: String, required: true },
    email: { type: String, required: true, lowercase: true },
    operatingHours: {
      open: { type: String, default: '08:00' },
      close: { type: String, default: '18:00' },
    },
    settings: {
      defaultDeliveryRadius: { type: Number, default: 20 },
    },
  },
  { timestamps: true }
);

export const Pharmacy = mongoose.model<IPharmacy>('Pharmacy', pharmacySchema);
