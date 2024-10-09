
import React, { useState }     from 'react';

    import {
        MDBContainer,
        MDBNavbar,
        MDBNavbarBrand,
        MDBNavbarLink
      } from 'mdb-react-ui-kit';
  
function Header() {



  return (
 

    <div>
         <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img src='https://thumbs.dreamstime.com/b/dog-cat-heart-vector-silhouette-dog-cat-heart-vector-silhouette-309217856.jpg'height='35' width='35' className='' alt=''loading='lazy'/>
            <h2 className='m-2'>Happy Paws Grooming</h2>
          </MDBNavbarBrand>
          <MDBNavbarLink active aria-current='page' href='#'>
              Home
            </MDBNavbarLink>
            <MDBNavbarLink active aria-current='page' href='#'>
              About Us
            </MDBNavbarLink>
            <MDBNavbarLink active aria-current='page' href='#'>
              Pet Grooming
            </MDBNavbarLink>
            <MDBNavbarLink active aria-current='page' href='#'>
              Gallery
            </MDBNavbarLink>
            <MDBNavbarLink active aria-current='page' href='#'>
              Contact Us
            </MDBNavbarLink>
            <div></div>
            
          <button className='btn btn-dark'>Log out</button>
        </MDBContainer>
      </MDBNavbar>
      
    </div>

  )
}

export default Header