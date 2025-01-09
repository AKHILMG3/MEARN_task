import React, { useState, useEffect } from 'react';

function Gallery() {
    const [gallery, setGallery] = useState([]);
    const [newEntry, setNewEntry] = useState({ before: '', after: '', petName: '' });
    const [editingIndex, setEditingIndex] = useState(null);

    // Load gallery from local storage on component mount
    useEffect(() => {
        const savedGallery = JSON.parse(localStorage.getItem('gallery'));
        if (savedGallery) {
            setGallery(savedGallery);
        }
    }, []);

    // Save gallery to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('gallery', JSON.stringify(gallery));
    }, [gallery]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEntry({ ...newEntry, [name]: value });
    };

    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setNewEntry({ ...newEntry, [field]: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const addEntry = () => {
        if (newEntry.before && newEntry.after && newEntry.petName) {
            if (editingIndex !== null) {
                const updatedGallery = [...gallery];
                updatedGallery[editingIndex] = newEntry;
                setGallery(updatedGallery);
                setEditingIndex(null);
            } else {
                setGallery([...gallery, newEntry]);
            }
            setNewEntry({ before: '', after: '', petName: '' });
        } else {
            alert('Please fill in all fields!');
        }
    };

    const editEntry = (index) => {
        setNewEntry(gallery[index]);
        setEditingIndex(index);
    };

    const deleteEntry = (index) => {
        const updatedGallery = gallery.filter((_, i) => i !== index);
        setGallery(updatedGallery);
    };

    return (
        <div>
            <br />
            <br />
            <br />
            <div className="pet-grooming-gallery shadow p-5 m-5">
                <h2>Pet Grooming Gallery</h2>
                <br />
                <div className="input-section">
                    <input
                        type="text"
                        placeholder="Pet Name"
                        name="petName"
                        value={newEntry.petName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'before')}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, 'after')}
                    />
                    <button className="btn btn-outline-success" onClick={addEntry}>
                        {editingIndex !== null ? 'Update' : 'Add'}
                    </button>
                </div>
                <div className="gallery-section">
                    {gallery.length > 0 ? (
                        gallery.map((entry, index) => (
                            <div key={index} className="gallery-item">
                                <h3>{entry.petName}</h3>
                                <div className="images">
                                    <img
                                        src={entry.before}
                                        alt={`${entry.petName} Before`}
                                        style={{ width: '150px', height: '150px' }}
                                    />
                                    <img
                                        src={entry.after}
                                        alt={`${entry.petName} After`}
                                        style={{ width: '150px', height: '150px' }}
                                    />
                                </div>
                                <div className="actions">
                                    <button
                                        className="btn btn-outline-success"
                                        onClick={() => editEntry(index)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="btn btn-outline-success"
                                        onClick={() => deleteEntry(index)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No entries in the gallery yet!</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
