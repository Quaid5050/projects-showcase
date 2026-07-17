import mongoose from 'mongoose';

const slotSchema = new mongoose.Schema({
  date: { type: String, required: true },
  time: { type: String, required: true },
  isBooked: { type: Boolean, default: false },
}, { timestamps: true });

slotSchema.index({ date: 1, time: 1 }, { unique: true });

export default mongoose.model('Slot', slotSchema);
