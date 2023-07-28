const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    name: String,
    comment: String,
    videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' }
});

module.exports = mongoose.model('Comment', CommentSchema);