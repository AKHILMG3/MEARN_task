import React, { useEffect, useState } from 'react'
import VideoCard from '../Components/VideoCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { deleteVideoAPI, getVideoAPI } from '../Services/ALLAPIs';

function ViewVideo({addVideoResponse}) {

  const [allVideos,setAllVideos] = useState([])
  const[deleteVideostatus,setDeleteVideostatus] = useState("")


  const getVideos = async()=>{
   try{
    const response = await getVideoAPI()
    console.log(response.data);
    if(response.status>=200 && response.status<=300){
      setAllVideos(response.data)
    }
    else{
      console.log(response.message);
      
    }
    
   }

   catch(err){
    console.log(err);
    
   }
  }
  useEffect(()=>{
    getVideos()
  },[addVideoResponse,deleteVideostatus])
    
 


  return (
    <div>
      <Row className='p-5'>

        {
          allVideos.length > 0 ?
          allVideos.map(item=>(
             <Col>
    <VideoCard displayVideo={item}
    setDeleteVideostatus={setDeleteVideostatus}/>
    
    </Col>
          ))

          :
          <p className='text-danger fw-bloder'> No Videos found</p>
        }

 
  </Row>
  </div>
  )
}

export default ViewVideo