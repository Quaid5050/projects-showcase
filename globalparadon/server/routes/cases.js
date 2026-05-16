const express = require('express');
const router  = express.Router();

// Placeholder for extended case management
router.get('/', (req, res) => res.json({ message: 'Cases route active' }));

module.exports = router;
