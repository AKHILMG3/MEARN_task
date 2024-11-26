import React, { useState } from 'react';


function PetGroomingGallery  ()  {
    const [gallery, setGallery] = useState([]);
    const [newEntry, setNewEntry] = useState({ before: '', after: '', petName: '' });
    const [editingIndex, setEditingIndex] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewEntry({ ...newEntry, [name]: value });
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
      <div><br /><br /><br />
        <div className="pet-grooming-gallery border border-3 p-5">
            <h2>Pet Grooming Gallery</h2><br />
            <div className="input-section">
                <input type="text" placeholder="Pet Name" name="petName" value={newEntry.petName} onChange={handleInputChange}/>
                <input  type="url" placeholder="Before Image URL" name="before" value={newEntry.before} onChange={handleInputChange}/>
                <input type="url" placeholder="After Image URL" name="after" value={newEntry.after}onChange={handleInputChange} />
                <button className='btn btn-outline-success' onClick={addEntry}>{editingIndex !== null ? 'Update' : 'Add'}</button>
            </div>
            <div className="gallery-section">
                {gallery.length > 0 ? (
                    gallery.map((entry, index) => (
                        <div key={index} className="gallery-item">
                            <h3>{entry.petName}</h3>
                            <div className="images">
                                <img src={entry.before} alt={`${entry.petName} Before`} />
                                <img src={entry.after} alt={`${entry.petName} After`} />
                            </div>
                            <div className="actions">
                                <button className='btn btn-outline-success' onClick={() => editEntry(index)}>Edit</button>
                                <button className='btn btn-outline-success' onClick={() => deleteEntry(index)}>Delete</button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No entries in the gallery yet!</p>
                )}
            </div>
        </div></div>
    );
};

export default PetGroomingGallery;
