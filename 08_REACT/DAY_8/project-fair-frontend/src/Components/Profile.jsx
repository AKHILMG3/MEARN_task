import React, { useState } from 'react'
import { FaChevronCircleUp } from "react-icons/fa"; 
import UserIcon from '../assets/user-icon-profile.jpg'
import { MDBCollapse, MDBBtn } from 'mdb-react-ui-kit';


function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="row">
      <div className="col-6">
        <h6 className=''>Profile Update !</h6>
      </div>
      <div className="col-6">
       <button  onClick={toggleOpen} className='btn'  style={{float:"right"}}><FaChevronCircleUp className='fs-3' /></button>
      
      </div>
      <MDBCollapse open={isOpen}>
      <div className="row text-center">
        <label>
          <input type="file" style={{display:'none'}} />
          <img src={UserIcon}  width={'200px'} className='mb-3' alt="" />
          <input type="text" className='form-control mb-3' placeholder='Username' />
          <input type="text" className='form-control mb-3' placeholder='Github link' />
          <input type="text"className='form-control mb-3' placeholder='LinkedIn' />
          <button className='btn btn-success mt-4 mb-3'>Update</button>
        </label>
      </div> </MDBCollapse>
    </div>
  )
}

export default Profile