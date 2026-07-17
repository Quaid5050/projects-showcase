import mongoose, { Document, Schema } from 'mongoose';

export interface IPatient extends Document {
  pharmacyId: mongoose.Types.ObjectId;
  name: string;
  phone: string;
  email?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    coordinates?: { lat: number; lng: number };
  };
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

const patientSchema = new Schema<IPatient>(
  {
    pharmacyId: { type: Schema.Types.ObjectId, ref: 'Pharmacy', required: true },
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, lowercase: true, trim: true },
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
    notes: { type: String },
  },
  { timestamps: true }
);

export const Patient = mongoose.model<IPatient>('Patient', patientSchema);
