const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  whatsapp: String,
  subject: String,
  message: { type: String, required: true },
  productInterest: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', default: null },
  status: { type: String, enum: ['new', 'read', 'replied', 'closed'], default: 'new' },
  adminNotes: String
}, { timestamps: true });

module.exports = mongoose.model('Inquiry', inquirySchema);
