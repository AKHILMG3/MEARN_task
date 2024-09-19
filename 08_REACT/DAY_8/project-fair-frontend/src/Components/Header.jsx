import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  import { GiLaptop } from "react-icons/gi";
  

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='dark'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
           
            <h3 className='text-white mx-2'>   <GiLaptop /> Project Fair</h3>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header