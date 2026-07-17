import mongoose, { Document, Schema } from 'mongoose';

export type ProofType = 'photo' | 'signature';

export interface IProofOfDelivery extends Document {
  orderId: mongoose.Types.ObjectId;
  type: ProofType;
  imageUrl?: string;
  signedBy?: string;
  latitude?: number;
  longitude?: number;
  timestamp: Date;
  notes?: string;
  createdAt: Date;
}

const proofOfDeliverySchema = new Schema<IProofOfDelivery>(
  {
    orderId: { type: Schema.Types.ObjectId, ref: 'DeliveryOrder', required: true, unique: true },
    type: { type: String, enum: ['photo', 'signature'], required: true },
    imageUrl: { type: String },
    signedBy: { type: String, trim: true },
    latitude: { type: Number },
    longitude: { type: Number },
    timestamp: { type: Date, default: Date.now },
    notes: { type: String },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const ProofOfDelivery = mongoose.model<IProofOfDelivery>(
  'ProofOfDelivery',
  proofOfDeliverySchema
);
