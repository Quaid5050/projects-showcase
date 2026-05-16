const mongoose = require('mongoose');

const CrisisSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  urgency: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium'
  },
  type: {
    type: String,
    enum: ['community', 'family', 'housing', 'food', 'weather', 'church', 'prayer', 'other'],
    default: 'other'
  },
  location: { type: String },
  contactInfo: { type: String },
  resourcesNeeded: [String],
  respondingChurches: [{
    church: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    response: String,
    respondedAt: { type: Date, default: Date.now }
  }],
  isActive: { type: Boolean, default: true },
  resolvedAt: { type: Date },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Crisis', CrisisSchema);
