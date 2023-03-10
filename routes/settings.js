const express = require('express');
const router = express.Router();

router.use('/font', require('./font'));
router.use('/color', require('./color'));
router.use('/topic', require('./topic'));

module.exports = router;