const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  // Auth info
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Invalid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
    select: false
  },
  role: {
    type: String,
    enum: ['pastor', 'admin', 'superadmin'],
    default: 'pastor'
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected', 'suspended'],
    default: 'pending'
  },

  // Pastor / Church Info
  pastorName: { type: String, required: true },
  churchName: { type: String, required: true },
  churchAddress: { type: String },
  city: { type: String, default: 'Cobb County' },
  state: { type: String, default: 'GA' },
  zip: { type: String },
  phone: { type: String },
  website: { type: String },
  denomination: { type: String },
  congregationSize: { type: String },
  bio: { type: String },
  profileImage: { type: String },
  churchLogo: { type: String },

  // Network participation
  resources: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Resource' }],
  events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],

  // Application info
  applicationMessage: { type: String },
  approvedAt: { type: Date },
  approvedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rejectionReason: { type: String },

  resetPasswordToken: String,
  resetPasswordExpire: Date,

  lastLogin: { type: Date },
  createdAt: { type: Date, default: Date.now }
});

// Hash password before save
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Sign JWT
UserSchema.methods.getSignedJwtToken = function() {
  return jwt.sign({ id: this._id, role: this.role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '30d'
  });
};

// Match password
UserSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
