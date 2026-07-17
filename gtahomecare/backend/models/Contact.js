const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  message: { type: String, required: true },
  status: { type: String, enum: ['Unread', 'Read', 'Replied'], default: 'Unread' },
}, { timestamps: true });
module.exports = mongoose.model('Contact', contactSchema);
