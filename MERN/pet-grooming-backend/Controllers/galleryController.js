const gallery = require('../Models/gallerySchema')

// Add a new gallery entry
exports.addGallery = async (req, res) => {
    try {
        const { petName, before, after } = req.body;
        const newEntry = new gallery({ petName, before, after });
        await newEntry.save();
        res.status(201).json({ message: 'Gallery entry added successfully!', data: newEntry });
    } catch (error) {
        res.status(500).json({ message: 'Failed to add gallery entry.', error });
    }
};

// Get all gallery entries
exports.getGallery = async (req, res) => {
    try {
        const entries = await gallery.find();
        res.status(200).json(entries);
    } catch (error) {
        res.status(500).json({ message: 'Failed to retrieve gallery entries.', error });
    }
};

// Update a gallery entry
exports.updateGallery = async (req, res) => {
    try {
        const { id } = req.params;
        const { petName, before, after } = req.body;
        const updatedEntry = await gallery.findByIdAndUpdate(id, { petName, before, after }, { new: true });
        res.status(200).json({ message: 'Gallery entry updated successfully!', data: updatedEntry });
    } catch (error) {
        res.status(500).json({ message: 'Failed to update gallery entry.', error });
    }
};

// Delete a gallery entry
exports.deleteGallery = async (req, res) => {
    try {
        const { id } = req.params;
        await gallery.findByIdAndDelete(id);
        res.status(200).json({ message: 'Gallery entry deleted successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to delete gallery entry.', error });
    }
};
