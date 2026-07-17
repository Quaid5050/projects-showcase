const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
  groupId: {
    type: String,
    unique: true,
    default: () => 'GRP-' + uuidv4().split('-')[0].toUpperCase()
  },
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  whatsapp: { type: String, required: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  referredBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  referralCode: { type: String, unique: true, default: () => uuidv4().split('-')[0].toUpperCase() },
  totalReferrals: { type: Number, default: 0 },
  creditBalance: { type: Number, default: 0 },
  tvFreeYears: { type: Number, default: 0 },
  subscription: {
    plan: { type: String, enum: ['none', '1box', '3box', '5box'], default: 'none' },
    expiresAt: { type: Date, default: null },
    isActive: { type: Boolean, default: false }
  },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

module.exports = mongoose.model('User', userSchema);
