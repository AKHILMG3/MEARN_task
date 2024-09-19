import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
        <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://hashnode.com/utility/r?url=https:%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1620998163363%2FsUH7ZUuHv.png%3Fw%3D1200%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng'
              height='30'
              alt=''
              loading='lazy'
            />
            Random Quotes Generator
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header