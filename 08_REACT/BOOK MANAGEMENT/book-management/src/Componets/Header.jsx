import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  
  return (
    <div>      <MDBNavbar primary bgColor='primary'>
    <MDBContainer fluid>
      <MDBNavbarBrand href='#'>
        <img
          src='https://th.bing.com/th/id/R.6408034045aaeca6557c843cae313c08?rik=zw%2bLAsqTGho0CA&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2018%2f05%2fBooks-PNG-File.png&ehk=r4BsUl5qSxcDQ2OiAXqL0Ts74ezQeEt%2fDaUjnTGLVuI%3d&risl=&pid=ImgRaw&r=0'
          height='40'
          alt=''
          loading='lazy'
        />
        <h2 className='fs-2 '>Book Master</h2>
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar>
    </div>
  )
}

export default Header