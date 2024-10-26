import React, { useContext, useEffect, useState } from 'react'
import userImg from '../assets/auth-png.svg'
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import {  editProjectContextResponse } from '../ContextAPI/ContextShare';
import { FaEdit } from "react-icons/fa";

import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
import { serverURL } from '../Services/serverURL';

function Edit(item) {
  console.log(item);

  const {editProjectRes,setEditProjectRes} = useContext(editProjectContextResponse)
  const [staticModal, setStaticModal] = useState(false);


  const toggleOpen = () => {
    setStaticModal(!staticModal);
    setProjectDetails({title:item.title,language:item.language,github:item.github,website:item.website,overview:item.overview,ProjectImg:item.ProjectImg
    })
  }

  const [ProjectDetails,setProjectDetails] = useState({
    title:item.title,language:item.language,github:item.github,website:item.website,overview:item.overview,ProjectImg:item.ProjectImg
  })
  console.log(ProjectDetails);
  

  const [imgFileStatus,setImgFileStatus] = useState(false)

  //to assign image url
  const [preview,setPreview] = useState("");


  useEffect(()=>{
    if(ProjectDetails.ProjectImg.type ==='image/png' || ProjectDetails.ProjectImg.type ==='image/jpeg'|| ProjectDetails.ProjectImg.type ==='image/jpg'){
      setImgFileStatus(true)

      //convert img file into url 
      setPreview(URL.createObjectURL(ProjectDetails.ProjectImg))
    }
    else{
      setImgFileStatus(false)
      // setProjectDetails({...ProjectDetails,ProjectImg:""})
    }      
  },[ProjectDetails.ProjectImg])

  const handleUpdate = async()=>{
    console.log("Inside add");
    const {title,language,website,github,overview,ProjectImg} = ProjectDetails;
    if(!title || !language || !website || !github || !overview || !ProjectImg){
      toast.warning('please fill the form', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "warning",
        transition: Bounce,
        });
      }
    }


  return (
    <div>
       <FaEdit className='fs-4  text-success fw-bolder me-2' />
<MDBModal staticBackdrop tabIndex='-1' open={staticModal} onClose={() => setStaticModal(false)}>
  <MDBModalDialog size='lg'>
    <MDBModalContent>
      <MDBModalHeader>
        <MDBModalTitle> Project Name</MDBModalTitle>
        <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
      </MDBModalHeader>
      <MDBModalBody> 
        <div className="row d-flex justify-content-evenly ">
            <div className="col-6 p-2 m-3">
                <label >
                    <input type="file" onChange={(e)=>setProjectDetails({...ProjectDetails,ProjectImg:e.target.files[0]})} style={{display:'none'}} />
                    <img src={preview? preview:`${serverURL}/uploads/${ProjectDetails,ProjectImg}`} width={'100%'} alt="" />
                </label>
                {
                  !imgFileStatus && 
                  <div className='text-center fw-bolder text-danger'>* Only allowed the following file type . 
                  jpg,.jpeg,.png

                  </div>
                }
            </div>
       
      
        <div className="col-6">
            <form>
                <input type="text" onChange={(e)=>setProjectDetails({...ProjectDetails,title:e.target.value})} value={ProjectDetails.title} className='form-control mb-3' placeholder='Title' />
                <input type="text" onChange={(e)=>setProjectDetails({...ProjectDetails,language:e.target.value})} value={ProjectDetails.language} className='form-control mb-3' placeholder='Language' />
                <input type="text" onChange={(e)=>setProjectDetails({...ProjectDetails,github:e.target.value})} value={ProjectDetails.github} className='form-control mb-3' placeholder='Github' />
                <input type="text" onChange={(e)=>setProjectDetails({...ProjectDetails,website:e.target.value})} value={ProjectDetails.website} className='form-control mb-3' placeholder='Website' />
                <textarea onChange={(e)=>setProjectDetails({...ProjectDetails,overview:e.target.value})} value={ProjectDetails.overview} className='form-control mb-3' placeholder='Overview'> </textarea>
            </form>
        </div> </div>
      </MDBModalBody>
      <MDBModalFooter>
        <MDBBtn color='secondary' type='submit' onClick={toggleOpen}>
          Cancel
        </MDBBtn>
        <MDBBtn onClick={handleUpdate} className='bg-light' type='submit'>Update</MDBBtn>
      </MDBModalFooter>
    </MDBModalContent>
  </MDBModalDialog>
</MDBModal>
<ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
   />
    </div> 
  )
}

export default Edit