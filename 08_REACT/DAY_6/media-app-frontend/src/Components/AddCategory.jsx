import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  addcategoryAPI,
  deleteCategoryAPI,
  getAVideoAPI,
  getCategoryAPI,
  updateCategoryAPI,
} from '../Services/ALLAPIs';
import VideoCard from './VideoCard';

function AddCategory() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [getCategory, setGetCategory] = useState([]);
  const [deleteStatus, setDeleteStatus] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = async () => {
    if (!categoryName.trim()) {
      alert('Please provide a category name');
      return;
    }

    const body = {
      categoryName,
      allVideos: [],
    };

    try {
      const response = await addcategoryAPI(body);
      console.log('Added Category:', response);
      alert(`Added category: ${categoryName}`);
      setCategoryName('');
      handleClose();
      handleGetCategory();
    } catch (error) {
      console.error('Error adding category:', error);
      alert('Failed to add category');
    }
  };

  const handleGetCategory = async () => {
    try {
      const response = await getCategoryAPI();
      setGetCategory(response.data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await deleteCategoryAPI(id);
      console.log('Deleted Category:', response);
      setDeleteStatus(response); // Trigger re-fetch
    } catch (error) {
      console.error('Error deleting category:', error);
      alert('Failed to delete category');
    }
  };

  const videoDrop = async (e, categoryId) => {
    e.preventDefault();
    const videoId = e.dataTransfer.getData('videoId');

    try {
      // Fetch video details
      const videoData = await getAVideoAPI(videoId);

      // Get selected category details
      const selectedCategory = getCategory.find((item) => item.id === categoryId);
      if (!selectedCategory) {
        alert('Category not found');
        return;
      }

      // Update videos in the category
      const updatedVideos = [...selectedCategory.allVideos, videoData];
      await updateCategoryAPI(categoryId, { ...selectedCategory, allVideos: updatedVideos });
      handleGetCategory();
    } catch (error) {
      console.error('Error adding video to category:', error);
      alert('Failed to add video to category');
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    handleGetCategory();
  }, [deleteStatus]);

  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
        Add Category
      </Button>

      <div className="row">
        {getCategory.length > 0 ? (
          getCategory.map((item) => (
            <div
              key={item.id}
              onDragOver={dragOver}
              onDrop={(e) => videoDrop(e, item.id)}
              className="col m-3 p-4 border border-light d-flex justify-content-between"
            >
              <p>{item.categoryName}</p>
              <i
                onClick={() => handleDelete(item.id)}
                className="fa-solid fa-trash text-danger"
                style={{ cursor: 'pointer' }}
              ></i>
              <div className="row">
                <div className="col">
                  {item.allVideos &&
                    item.allVideos.map((data) => <VideoCard key={data.id} displayVideo={data} />)}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No data found</p>
        )}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-dark">
          <Modal.Title className="bg-dark">Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <input
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            placeholder="Category name"
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddCategory;
