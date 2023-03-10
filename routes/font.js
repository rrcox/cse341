const express = require('express');
const router = express.Router();
const font = require('../controllers/font');

router.get('/:array', font.getFonts);
router.post('/', font.createFont);
router.put('/:id', font.updateFont);
router.delete('/:array', font.deleteFonts);

module.exports = router;