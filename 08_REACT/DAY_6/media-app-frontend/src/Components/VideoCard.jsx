import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiFillDelete } from "react-icons/ai";
import { addHistoryAPI, deleteVideoAPI } from '../Services/ALLAPIs';
import { Await } from 'react-router-dom';
import Swal from 'sweetalert2'


function VideoCard({displayVideo}) {
  console.log(displayVideo);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow  = async() => { setShow(true);

  const {caption,url}= displayVideo
  let today = new Date()
  console.log(today);
  let timestamp = new Intl.DateTimeFormat('en-us',{year:'numeric',
  month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',
  second:'2-digit'}).format(today)
  console.log(timestamp);

  let videoDetails ={
    caption,
    url,
    timestamp
  }
  
  const response = await addHistoryAPI(videoDetails)
  console.log(response);  
}
  
  const handleDelete = async (id) =>{
    try {
      const response = await deleteVideoAPI(id)

      if(response.status>=200 && response.status<=300){
        console.log(response.data);
        setDeleteVideostatus(response)
        handleClose()
        Swal.fire({
          icon: "success",
          title: "sucess",
          text: "video delete successfully",
        });

      }
     
    }
     catch (err) {
      console.log(err);  
    } 
}

  const dragStarted = (e,id)=>{
  console.log("Video Drag Started"+id,e);
  e.dataTransfer.setData("videoId,",id)  
}

  return (
    <div>
       <CardGroup className='m-3'>
      
      
      <Card draggable={true} onDragStart={e=>dragStarted(e,displayVideo.id)} style={{width:'200px', height:'250px'}}>
        <Card.Img variant="top" src={displayVideo.url} className='p-1' onClick={handleShow} width={'100%'} height={'120'} />
        <Card.Body>
          <Card.Title>{displayVideo.caption}</Card.Title>
          <Button onClick={()=>handleDelete(displayVideo.id)} variant="danger"><AiFillDelete /></Button>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='bg-dark'>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body className='bg-dark  '> <iframe width="460" height="315" src={displayVideo.embedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> <input type="text" placeholder='Category name' className='form-control' /></Modal.Body>
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