const Video = require('../models/Video');

exports.getAllVideos = async (req, res) => {
    const videos = await Video.find();
    res.json(videos);
};

exports.getVideo = async (req, res) => {
    const video = await Video.findById(req.params.id);
    res.json(video);
};