const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  lead: { type: mongoose.Schema.Types.ObjectId, ref: 'Lead' },
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  checkin: { type: Date, required: true },
  checkout: { type: Date, required: true },
  guests: { type: Number, default: 1 },
  package: String,
  totalPrice: Number,
  status: { type: String, enum: ['pending', 'confirmed', 'cancelled', 'completed'], default: 'pending' },
  paymentStatus: { type: String, enum: ['unpaid', 'partial', 'paid'], default: 'unpaid' },
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
