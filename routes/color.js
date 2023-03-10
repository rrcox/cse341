const express = require('express');
const router = express.Router();
const color = require('../controllers/color');

router.get('/:array', color.getColors);
router.post('/', color.createColor);
router.put('/:id', color.updateColor);
router.delete('/:array', color.deleteColors);

module.exports = router;