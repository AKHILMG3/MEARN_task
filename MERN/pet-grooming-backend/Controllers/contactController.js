const Contact = require('../Models/contactSchema');

// Controller to handle form submissions
exports.contact = async (req, res) => {
  const { name, contactNo, message } = req.body;

  try {
    // Create a new Contact document
    const newContact = new Contact({ name, contactNo, message });
    await newContact.save();

    res.status(200).json({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(401).json({ error: 'Failed to submit feedback' });
  }
};


