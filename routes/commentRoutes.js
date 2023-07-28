const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

router.get('/:videoId', commentController.getComments);
router.post('/', commentController.addComment);

module.exports = router;