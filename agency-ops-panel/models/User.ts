import mongoose, { Schema, Document, Model } from 'mongoose';
import { UserRole } from '@/types';

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string; email: string; passwordHash: string;
  role: UserRole; isActive: boolean;
  createdAt: Date; updatedAt: Date;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['admin','ceo','manager','sales','team'], default: 'sales' },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

UserSchema.set('toJSON', {
  transform: (_doc, ret) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete (ret as any).passwordHash;
    return ret;
  },
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export default User;
