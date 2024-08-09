import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillDelete } from "react-icons/ai";


function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  return (
    <div>
       <CardGroup className='m-3'>
      
      
      <Card>
        <Card.Img variant="top" src="https://th.bing.com/th?id=OSK.bb75139bb0aa56fc000685f75d5aeecd&w=312&h=200&c=3&rs=1&o=6&dpr=1.3&pid=SANGAM" className='p-1' onClick={handleShow} />
        <Card.Body>
          <Card.Title>Kaithi</Card.Title>
          <Button variant="danger">
          <AiFillDelete />
        
      </Button>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark  '>  <input type="text" placeholder='Category name' className='form-control' /></Modal.Body>
        <Modal.Footer className='bg-dark' >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  )
}

export default VideoCard