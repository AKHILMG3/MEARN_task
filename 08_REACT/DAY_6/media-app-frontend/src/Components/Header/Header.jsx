import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { GiMusicalNotes } from "react-icons/gi";

function Header() {
  return (
    <div><Navbar className="bg-dark ">
    <Container>
      <Navbar.Brand href="#home" className='text-light fs-1'>
      <GiMusicalNotes className='me-3 fs-1 text-warning'/>

        <div className='text-warning'>Media Player</div>
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header