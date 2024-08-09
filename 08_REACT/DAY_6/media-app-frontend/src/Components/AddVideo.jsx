import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaUpload } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function AddVideo() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <div>
      <Row >
      <Button variant="black fs-3" onClick={handleShow}>
    <FaUpload className='my-1' />
  </Button>

  <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
    <Modal.Header closeButton className='bg-dark'>
      <Modal.Title className='text-light '><FaCloudUploadAlt className='' />
        Upload Video</Modal.Title>
    </Modal.Header>
    <Modal.Body className='bg-dark'>
      <p>Please fill following  details</p>

      <div>
        <input type="text" placeholder='Video Caption' className='form-control mb-3' />
        <input type="text" placeholder='Video Image' className='form-control mb-3' />
        <input type="text" placeholder='Video URL' className='form-control mb-3' />
      </div>
    </Modal.Body>
    <Modal.Footer className='bg-dark' >
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="warning">Upload</Button>
    </Modal.Footer>
  </Modal>
      </Row>

     
     </div>
  )
}

export default AddVideo