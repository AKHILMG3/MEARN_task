const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    petName: {
        type: String,
        required: true,
    },
    before: {
        type: String,
        required: true,
    },
    after: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('gallery', gallerySchema);
