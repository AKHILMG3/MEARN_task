import React, { useState } from 'react'

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
  

function Add() {
    const [staticModal, setStaticModal] = useState(false);
    const toggleOpen = () => setStaticModal(!staticModal);

  return (
    <div><MDBBtn onClick={toggleOpen}>Add</MDBBtn>

    <MDBModal staticBackdrop tabIndex='-1' open={staticModal} onClose={() => setStaticModal(false)}>
      <MDBModalDialog>
        <MDBModalContent>
          <MDBModalHeader>
            <MDBModalTitle>Add Project</MDBModalTitle>
            <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
          </MDBModalHeader>
          <MDBModalBody> 
            <div className="row ">
                <div className="col-6 p-2 m-3">
                    <label >
                        <input type="file" style={{display:'none'}} />
                        <img src="https://th.bing.com/th/id/OTP.HefJP8AoKvdJQhyonaQ67QHaE8?rs=1&Pid=ImgDetMain" width={'100%'} alt="" />
                    </label>
                </div>
            </div>

            
            <div className="row">
                <form>
                    <input type="text" className='form-control mb-3' placeholder='Title' />
                    <input type="text" className='form-control mb-3' placeholder='Language' />
                    <input type="text" className='form-control mb-3' placeholder='Github' />
                    <input type="text" className='form-control mb-3' placeholder='Website' />
                    <textarea className='form-control mb-3' placeholder='Overview'> </textarea>
                </form>
            </div>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color='secondary' onClick={toggleOpen}>
              Cancel
            </MDBBtn>
            <MDBBtn className='bg-light'>Add</MDBBtn>
          </MDBModalFooter>
        </MDBModalContent>
      </MDBModalDialog>
    </MDBModal></div>
  )
}

export default Add