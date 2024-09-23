import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';

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


function ProjectCard() {
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);
  

  return (
    <div>
        <div className='row p-3 m-3'>
        <MDBCard onClick={toggleOpen} style={{width:"300px", height:"400px"}}>
      <MDBCardImage className=' p-2' src='https://gdcitsolutions.com/wp-content/uploads/Top-10-IT-Careers_800x550_3.png' position='top'  alt='...' />
      <MDBCardBody>
        <MDBCardTitle className='text-center'>Card title</MDBCardTitle>
      </MDBCardBody>
    </MDBCard>
      <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Project Name</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              
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