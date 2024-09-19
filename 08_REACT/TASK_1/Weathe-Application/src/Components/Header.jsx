import React, { Link , useState } from 'react'
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
              src='https://th.bing.com/th/id/OIP.KKzv2A355Bm4NNfcPekadgHaHa?w=1024&h=1024&rs=1&pid=ImgDetMain'
              height='50'
              alt=''
              loading='lazy'
            />
            <h2>Weather and Climate</h2>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header