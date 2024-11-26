const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Define GalleryImage schema and model
const GalleryImageSchema = new mongoose.Schema({
  before: String,
  after: String,
  description: String,
});

const GalleryImage = mongoose.model('GalleryImage', GalleryImageSchema);

// Routes
app.get('/api/gallery', async (req, res) => {
  try {
    const images = await GalleryImage.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve images' });
  }
});

app.post('/api/gallery', async (req, res) => {
  const { before, after, description } = req.body;
  const newImage = new GalleryImage({ before, after, description });

  try {
    await newImage.save();
    res.status(201).json(newImage);
  } catch (error) {
    res.status(500).json({ message: 'Failed to save image' });
  }
});

// Start Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
