const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/, // Ensure it's a 10-digit number
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('contact', contactSchema);
