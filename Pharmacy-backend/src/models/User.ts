import mongoose, { Document, Schema } from 'mongoose';

export type UserRole = 'super_admin' | 'pharmacy_admin' | 'staff' | 'driver';

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  passwordHash: string;
  role: UserRole;
  pharmacyId?: mongoose.Types.ObjectId;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true },
    passwordHash: { type: String, required: true, select: false },
    role: {
      type: String,
      enum: ['super_admin', 'pharmacy_admin', 'staff', 'driver'],
      required: true,
    },
    pharmacyId: { type: Schema.Types.ObjectId, ref: 'Pharmacy' },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Never expose password hash in API responses
userSchema.set('toJSON', {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform: (_doc: unknown, ret: any) => {
    delete ret.passwordHash;
    return ret;
  },
});

export const User = mongoose.model<IUser>('User', userSchema);
