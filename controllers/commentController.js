const Comment = require('../models/Comment');

exports.getComments = async (req, res) => {
    const comments = await Comment.find({ videoId: req.params.videoId });
    res.json(comments);
};

exports.addComment = async (req, res) => {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.json(savedComment);
};