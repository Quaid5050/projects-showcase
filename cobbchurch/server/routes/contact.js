const express = require('express');
const router = express.Router();
const { sendContactEmail } = require('../utils/email');

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ success: false, message: 'Please fill all required fields' });
    await sendContactEmail({ name, email, subject: subject || 'General Inquiry', message });
    res.json({ success: true, message: 'Your message has been sent. We will be in touch soon.' });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;
