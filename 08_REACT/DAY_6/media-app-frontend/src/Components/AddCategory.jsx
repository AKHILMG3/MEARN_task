import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addcategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../Services/ALLAPIs';
import VideoCard from './VideoCard';

function AddCategory() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName,setCategoryName] = useState("")
  const [getCategory,setGetCategory] = useState({
    categoryName:"",
    allVideos:[]
  })
  const [deleteStatus,setDeleteStatus] = useState("")

  const handleAdd = async()=>{
    const body={
      categoryName
    }
    
    if(categoryName){
      try{
        const response = await addcategoryAPI(body)
    console.log(response);
    console.log(category);
    alert("Added category" + categoryName)
    handleGetCategory()
    setCategoryName("")
    handleShow()
      }
      catch(error){
        console.log(error);
        
      }
    }
    else{
      alert("please provide category name")
    }  
  }

  const handleGetCategory = async()=>{
    const response = await getCategoryAPI()
    console.log(response);  
    setGetCategory(response.data)
  }

  const handleDelete = async(id)=>{
    const response = await deleteCategoryAPI(id)
    console.log(response);
    setDeleteStatus(response.data)
    
  }

  const videoDrop=async(e,categoryId)=>{
    console.log("idd");
    
    console.log("Video drop"+categoryId,e);
    const videoId = e.dataTransfer.getData("videoId")
    console.log("VideoId: "+videoId);
    e.preventDefault();

    // get particular video
    const response = await getAVideoAPI(videoId)
    console.log(response);

    //get category details
    const selectedCategory = getCategory?.find(item=>item.id===categoryId)
    console.log(selectedCategory);

    //add videos into the allvideos

    selectedCategory.allVideos.push(data)
    await updateCategoryAPI(categoryId,selectedCategory)
    handleGetCategory()
  }



  const dragOver=(e)=>{
    console.log("videoDrag Over");
    e.preventDefault();
  }
  
  useEffect(()=>{
    handleGetCategory()
  },[deleteStatus])


  return (
    <div>  <Button variant="warning" onClick={handleShow}>
    Add Category
  </Button>

  <div className="row">
   {
    getCategory. length>0? getCategory.map(item=>(
      <div onDragOver={e=>dragOver(e)} onDrop={(e)=>videoDrop(e,item.id)} className="col m-3 p-4 border border-light d-flex justify-content-between">
      <p>{item.categoryName}</p>
      <i onClick={()=>handleDelete(item.id)} className='fa-solid fa-trash text-danger'></i>
      <div className="row s">
        <div className="col">
          {item.allVideos && item.allVideos.map((data)=>(<VideoCard displayVideo={data}/>))}
        </div>
      </div>
    </div>
    )):<p>No data found</p>
  }
  </div>
  

  
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton className='bg-dark'>
      <Modal.Title className='bg-dark'>Add Category</Modal.Title>
    </Modal.Header>
    <Modal.Body className='bg-dark'><input type="text" onChange={(e) => setCategoryName(e.target.value)} placeholder='Category name' className='form-control' /></Modal.Body>
    <Modal.Footer className='bg-dark'>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button  variant="warning" onClick={()=>handleAdd}>
        Add
      </Button>
    </Modal.Footer>
  </Modal></div>
  )
}

export default AddCategory