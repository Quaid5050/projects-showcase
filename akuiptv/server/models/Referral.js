const mongoose = require('mongoose');

const referralSchema = new mongoose.Schema({
  referrer: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  referee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plan: { type: String, enum: ['1box', '3box', '5box'], required: true },
  amount: { type: Number, required: true },
  creditAwarded: { type: Number, default: 0 },
  status: { type: String, enum: ['pending', 'active', 'completed', 'cancelled'], default: 'pending' },
  notes: String
}, { timestamps: true });

module.exports = mongoose.model('Referral', referralSchema);
