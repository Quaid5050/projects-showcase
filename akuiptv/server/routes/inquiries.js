const router = require('express').Router();
const { submitInquiry, getAllInquiries, updateInquiry } = require('../controllers/inquiryController');
const { protect, adminOnly } = require('../middleware/auth');

router.post('/', submitInquiry);
router.get('/', protect, adminOnly, getAllInquiries);
router.put('/:id', protect, adminOnly, updateInquiry);

module.exports = router;
