import React, { useState } from 'react';

const GalleryPage = () => {
  const [galleryImages, setGalleryImages] = useState([
    {
      before: 'https://example.com/before1.jpg', // Replace with actual URLs
      after: 'https://example.com/after1.jpg',
      description: 'Golden Retriever - Before and After Grooming',
    },
    {
      before: 'https://example.com/before2.jpg', // Replace with actual URLs
      after: 'https://example.com/after2.jpg',
      description: 'Poodle - Before and After Grooming',
    },
  ]);

  const [newImage, setNewImage] = useState({
    before: '',
    after: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewImage({ ...newImage, [name]: value });
  };

  const addImage = () => {
    if (!newImage.before || !newImage.after || !newImage.description) {
      alert('Please fill out all fields with valid information.');
      return;
    }

    setGalleryImages([...galleryImages, newImage]);
    setNewImage({ before: '', after: '', description: '' });
    alert('Image added to gallery!');
  };

  return (
    <div className="gallery-page border border-3 p-4">
      <h2>Pet Grooming Gallery</h2>
      <p>Check out the amazing transformations!</p>
      <div className="gallery-grid">
        {galleryImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <h4>{image.description}</h4>
            <div className="image-container">
              <div className="image">
                <img src={image.before} alt="Before Grooming" />
                <p>Before</p>
              </div>
              <div className="image">
                <img src={image.after} alt="After Grooming" />
                <p>After</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="add-image-form mt-4">
        <h3>Add New Transformation</h3>
        <input
          type="text"
          name="before"
          placeholder="Before Image URL"
          value={newImage.before}
          onChange={handleInputChange}
          className="input-field"
          aria-label="Before Image URL"
        />
        <input
          type="text"
          name="after"
          placeholder="After Image URL"
          value={newImage.after}
          onChange={handleInputChange}
          className="input-field"
          aria-label="After Image URL"
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={newImage.description}
          onChange={handleInputChange}
          className="input-field"
          aria-label="Description"
        />
        <button onClick={addImage} className="add-button mt-2">Add to Gallery</button>
      </div>
    </div>
  );
};

export default GalleryPage;
