const router = require('express').Router();
const { submitReferral, getMyReferrals, getAllReferrals, updateReferralStatus } = require('../controllers/referralController');
const { protect, adminOnly } = require('../middleware/auth');

router.post('/', protect, submitReferral);
router.get('/my', protect, getMyReferrals);
router.get('/all', protect, adminOnly, getAllReferrals);
router.put('/:id', protect, adminOnly, updateReferralStatus);

module.exports = router;
