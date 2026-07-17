const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  city: { type: String },
  postalCode: { type: String },
  preferredDate: { type: String },
  preferredTime: { type: String },
  clientName: { type: String },
  clientAge: { type: String },
  clientRelationship: { type: String },
  serviceType: { type: String },
  carePlanServices: [{ service: String, required: Boolean }],
  clientInfo: { type: String },
  additionalNotes: { type: String },
  status: { type: String, enum: ['New', 'Contacted', 'Assessment Scheduled', 'Active', 'Closed'], default: 'New' },
  adminNotes: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
