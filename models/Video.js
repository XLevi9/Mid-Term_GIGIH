const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
    title: String,
    url: String,
    thumbnail: String,
    products: [String]
});

module.exports = mongoose.model('Video', VideoSchema);