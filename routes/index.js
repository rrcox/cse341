const express = require('express');
const router = express.Router();

router.use('/user', require('./user'));
router.use('/scripture', require('./scripture'));
router.use('/settings', require('./settings'));

module.exports = router;