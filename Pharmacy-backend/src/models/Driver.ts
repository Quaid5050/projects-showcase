import mongoose, { Document, Schema } from 'mongoose';

export type VehicleType = 'bike' | 'car' | 'van' | 'motorcycle';

export interface IDriver extends Document {
  userId: mongoose.Types.ObjectId;
  pharmacyId: mongoose.Types.ObjectId;
  name: string;
  phone: string;
  vehicleType: VehicleType;
  vehicleNumber: string;
  isActive: boolean;
  currentLocation?: {
    lat: number;
    lng: number;
    updatedAt: Date;
  };
  createdAt: Date;
  updatedAt: Date;
}

const driverSchema = new Schema<IDriver>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    pharmacyId: { type: Schema.Types.ObjectId, ref: 'Pharmacy', required: true },
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    vehicleType: {
      type: String,
      enum: ['bike', 'car', 'van', 'motorcycle'],
      required: true,
    },
    vehicleNumber: { type: String, required: true, trim: true },
    isActive: { type: Boolean, default: true },
    currentLocation: {
      lat: { type: Number },
      lng: { type: Number },
      updatedAt: { type: Date },
    },
  },
  { timestamps: true }
);

export const Driver = mongoose.model<IDriver>('Driver', driverSchema);
