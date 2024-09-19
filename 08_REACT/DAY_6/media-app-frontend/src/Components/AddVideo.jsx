import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaUpload } from "react-icons/fa";
import { FaCloudUploadAlt } from "react-icons/fa";
import Row from 'react-bootstrap/Row';
import { addVideoAPI } from '../Services/ALLAPIs';
import Swal from 'sweetalert2'




function AddVideo({setaddVideoResponse}) {

  const [video,setVideo]= useState({
    caption:"",
    url:"",
    embedLink:""
  })
  console.log(video);

  const getEmbedLink=(e)=>{
    console.log(e.target.value);
    const {value} = e.target
    console.log(value.slice-31);
    const link = `https://www.youtube.com/embed/${value.slice(-31)}`
    setVideo({...video,embedLink:link})
  }

  const handleUpload = async()=>{
    const {caption,url,embedLink} = video
    if (!caption||!url||!embedLink) {
      alert("please fill your form")
      
    }
    else{
      // make an API request
      try{
        const response= await addVideoAPI(video)
      console.log(response);
      if(response.status>=200 && response.status<=300){
        console.log(response.data);
        setaddVideoResponse(response.data)
        handleClose()
        Swal.fire({
          icon: "success",
          title: "sucess",
          text: "video added successfully",
          
        });
          
       
        // alert("Video added successfully...")
      }
      else{
        console.log(response.message);//error
        // alert(response.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "",
        });
        
      }
      }

      catch(err){
        console.log(err);
        
      }
      
    }
  }
  

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
        <input onChange={e=>setVideo({...video,caption:e.target.value})} type="text" placeholder='Video Caption' className='form-control mb-3' />
        <input onChange={e=>setVideo({...video,url:e.target.value})} type="text" placeholder='Video Image' className='form-control mb-3' />
        <input onChange={getEmbedLink} type="text" placeholder='Video URL' className='form-control mb-3' />
      </div>
    </Modal.Body>
    <Modal.Footer className='bg-dark' >
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button onClick={handleUpload} variant="warning">Upload</Button>
    </Modal.Footer>
  </Modal>
      </Row>

     
     </div>
  )
}

export default AddVideo