const express = require('express');
const router = express.Router();
const topic = require('../controllers/topic');

router.get('/:array', topic.getTopics);
router.post('/', topic.createTopic);
router.put('/:id', topic.updateTopic);
router.delete('/:array', topic.deleteTopics);

module.exports = router;