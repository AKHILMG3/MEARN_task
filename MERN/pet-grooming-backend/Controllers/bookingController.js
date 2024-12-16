const Booking = require("../Models/bookingSchema");

exports.booking = async (req, res) => {
  console.log("Inside bookingController");

  const { name, petType, breed, gender, age, date, location, address, services } = req.body;

  // Log incoming data
  console.log("Booking details:", { name, petType, breed, gender, age, date, location, address, services });

  // Validation for missing fields
  if (!name || !petType || !breed || !gender || !age || !date || !location || !address || !services) {
    console.log("Validation Error: Missing required fields.");
    return res.status(401).json({ message: "All fields are required!" });
  }

  const isValidDate = (date) => {
    if (typeof date === "string") {
      const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // Fixed typo
      if (!dateRegex.test(date)) {
        return false;
      }
      // Check if the parsed date is valid
      const parsedDate = new Date(date);
      return parsedDate instanceof Date && !isNaN(parsedDate.getTime());
    }
  
    if (date instanceof Date) {
      return !isNaN(date.getTime());
    }
  
    return false; // Invalid input
  };
  
  // Usage example:
  if (!isValidDate(date)) {
    return res.status(400).json({ message: "Invalid date format. Use YYYY-MM-DD." });
  }
  

  try {
    const newBooking = new Booking({
      name,
      petType,
      breed,
      gender,
      age,
      date,
      location,
      address,
      services,
    });

    // Save the new booking to the database
    await newBooking.save();

    console.log("Booking successfully created.");
    return res.status(200).json({ message: "Booking created successfully!", booking: newBooking });
  } catch (error) {
    console.error("Error creating booking:", error.message);
    return res.status(401).json({ message: "Failed to create booking", details: error.message });
  }
};
