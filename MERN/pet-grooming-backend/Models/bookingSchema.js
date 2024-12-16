const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    petType: { type: String, required: true },
    breed: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    address: { type: String, required: true }, // Fixed typo
    services: {
      type: [String],
      required: true,
      validate: {
        validator: function (v) {
          return v.length > 0; // Ensures at least one service is provided
        },
        message: "At least one service must be selected.",
      },
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

module.exports = mongoose.model("Booking", bookingSchema);
