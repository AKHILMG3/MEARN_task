import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';
  

function Header() {
  return (
    <div> <MDBNavbar light bgColor='light'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <img
          src='https://th.bing.com/th/id/OIP.JzfMMdGGxHVW3zepnVulsgHaHw?rs=1&pid=ImgDetMain'
          height='30'
          alt=''
          loading='lazy'
        />
        <div className='fw-bold  fs-2'>User Data</div>
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar></div>
  )
}

export default Header