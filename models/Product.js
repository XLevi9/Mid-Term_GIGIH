const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    link: String,
    title: String,
    price: Number,
    videoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Video' }
});

module.exports = mongoose.model('Product', ProductSchema);