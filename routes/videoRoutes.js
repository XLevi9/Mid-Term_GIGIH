const express = require('express');
const videoController = require('../controllers/videoController');
const router = express.Router();

router.get('/', videoController.getAllVideos);
router.get('/:id', videoController.getVideo);

module.exports = router;