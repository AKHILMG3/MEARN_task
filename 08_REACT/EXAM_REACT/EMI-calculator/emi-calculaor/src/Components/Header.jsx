import React, { useState } from 'react'
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
  } from 'mdb-react-ui-kit';
  

function Header() {
    const [openNavColor, setOpenNavColor] = useState(false);
    const [openNavColorSecond, setOpenNavColorSecond] = useState(false);
    const [openNavColorThird, setOpenNavColorThird] = useState(false);

  return (
    <div>
        <MDBNavbar expand='lg' dark bgColor='primary'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>EMI Calculator</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavColor(!openNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse open={openNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='#'>
                  Loan
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>#Investment</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Cards</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      
     
    </div>
  )
}

export default Header