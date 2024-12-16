import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBCollapse,
	MDBIcon
  } from 'mdb-react-ui-kit';
  
  
  


function Header() {

	const [openNav, setOpenNav] = useState(false);
  return (
    <div>
        <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/' className='fw-bold'>Paw Spa Co.</MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNav(!openNav)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNav}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='location'className='fw-bold'>
			  Pet Grooming
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem >
              <MDBNavbarLink href='gallery' className='fw-bold'>Gallery</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='service' className='fw-bold'>Services</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='about' className='fw-bold'>
                	About Us
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
		<Link to={'login'}>
		<button className='btn btn-outline-primary'>Sign in</button>
		</Link>
		
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Header