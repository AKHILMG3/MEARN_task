import React, { useState } from 'react'
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
              src='https://th.bing.com/th/id/OIP.QKpn8OE_vziY3c-awnsTmwHaEO?w=700&h=400&rs=1&pid=ImgDetMain'
              height='30'
              alt=''
              loading='lazy'
            />
            <h1>Calculator.net</h1>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header