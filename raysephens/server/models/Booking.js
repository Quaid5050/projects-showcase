import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  service: { type: String, required: true },
  preferredDate: { type: String },
  preferredTime: { type: String },
  message: { type: String },
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled', 'completed'], default: 'pending' },
  isRead: { type: Boolean, default: false },
  googleEventId: { type: String },
  meetLink: { type: String },
  calendarEventLink: { type: String },
}, { timestamps: true });

export default mongoose.model('Booking', bookingSchema);
