const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  type: {
    type: String,
    enum: ['gathering', 'prayer', 'training', 'outreach', 'leadership', 'other'],
    default: 'gathering'
  },
  date: { type: Date, required: true },
  endDate: { type: Date },
  location: { type: String },
  address: { type: String },
  isVirtual: { type: Boolean, default: false },
  virtualLink: { type: String },
  capacity: { type: Number },
  registrations: [{
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    registeredAt: { type: Date, default: Date.now }
  }],
  image: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  isPublic: { type: Boolean, default: false },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Event', EventSchema);
