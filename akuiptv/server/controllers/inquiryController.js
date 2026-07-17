const Inquiry = require('../models/Inquiry');

exports.submitInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.create(req.body);
    res.status(201).json({ message: 'Inquiry submitted successfully', inquiry });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllInquiries = async (req, res) => {
  try {
    const { status } = req.query;
    const filter = status ? { status } : {};
    const inquiries = await Inquiry.find(filter)
      .populate('productInterest', 'name')
      .sort({ createdAt: -1 });
    res.json(inquiries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(inquiry);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
