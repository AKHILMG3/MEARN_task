import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { serverURL } from '../Services/serverURL';

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardImage,
  } from 'mdb-react-ui-kit';
  import {
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
  } from 'mdb-react-ui-kit';
// import projects from '../../../project-fair-backend/Models/projectSchema';


function ProjectCard(Projects) {
  console.log(Projects);

    const [basicModal, setBasicModal] = useState(false);
    const toggleOpen = () => setBasicModal(!basicModal);

  return (
    <div>
        <div className='row p-3 m-3'>
        <MDBCard onClick={toggleOpen} style={{width:"350px", height:"400px"}}>
      <MDBCardImage className=' p-2' src={Projects? `${serverURL}/uploads/${projects.projectImg}`:'https://cdn.pixabay.com/photo/2024/05/01/17/56/student-8732859_1280.png'} position='top'  alt='...' />
      <MDBCardBody>
        <MDBCardTitle className='text-center'>{Projects.title}</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Project Name</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody className='w-100'>
              <div className="row">
                <div className="col-6"><img src="https://cdn.pixabay.com/photo/2024/05/01/17/56/student-8732859_1280.png" width={'100%'} alt="" /></div>
                <div className="col-6">
                  <h2>Description</h2>

                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti rerum perspiciatis aperiam distinctio eius dignissimos, corporis repudiandae voluptate. Delectus enim optio facilis! Eos nostrum eveniet impedit velit earum itaque deleniti.</p>
                  <h4>Technologies : React</h4>
                </div>
                <hr />

                <div className="row d-flex justify-content-evenly">
                  <div className="col-6"><FaGithub  className='fs-4'/></div>
                  <div className="col-6"><FaLink className='fs-4' /></div>
                </div>
              </div>
              
            </MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
        </div>
    </div>
  )
}

export default ProjectCard