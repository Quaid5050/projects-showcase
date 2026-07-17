const Referral = require('../models/Referral');
const User = require('../models/User');

const CREDIT_RULES = { '1box': 0, '3box': 200, '5box': 400 };

exports.submitReferral = async (req, res) => {
  try {
    const { referees, plan } = req.body;
    const referrer = req.user;

    const results = [];
    for (const ref of referees) {
      const existing = await User.findOne({ email: ref.email });
      if (existing) {
        const referral = await Referral.create({
          referrer: referrer._id,
          referee: existing._id,
          plan,
          amount: plan === '3box' ? 299 : plan === '5box' ? 399 : 0,
          creditAwarded: CREDIT_RULES[plan] || 0,
          status: 'pending'
        });
        results.push(referral);
      }
    }

    const totalCredit = results.length * (CREDIT_RULES[plan] || 0);
    if (totalCredit > 0) {
      await User.findByIdAndUpdate(referrer._id, { $inc: { creditBalance: totalCredit } });
    }

    res.status(201).json({ referrals: results, creditAwarded: totalCredit });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMyReferrals = async (req, res) => {
  try {
    const referrals = await Referral.find({ referrer: req.user._id })
      .populate('referee', 'name email whatsapp')
      .sort({ createdAt: -1 });
    res.json(referrals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getAllReferrals = async (req, res) => {
  try {
    const referrals = await Referral.find()
      .populate('referrer', 'name email groupId')
      .populate('referee', 'name email')
      .sort({ createdAt: -1 });
    res.json(referrals);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateReferralStatus = async (req, res) => {
  try {
    const referral = await Referral.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json(referral);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
