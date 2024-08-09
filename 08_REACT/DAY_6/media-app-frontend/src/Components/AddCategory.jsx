import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>  <Button variant="warning" onClick={handleShow}>
    Add Category
  </Button>

  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton className='bg-dark'>
      <Modal.Title className='bg-dark'>Add Category</Modal.Title>
    </Modal.Header>
    <Modal.Body className='bg-dark'><input type="text" placeholder='Category name' className='form-control' /></Modal.Body>
    <Modal.Footer className='bg-dark'>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="warning" onClick={handleClose}>
        Add
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default AddCategory