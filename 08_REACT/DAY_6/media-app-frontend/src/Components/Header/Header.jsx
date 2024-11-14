import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { GiMusicalNotes } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div><Navbar className="bg-dark ">
    <Container>
      <Navbar.Brand href="#home" className='text-light fs-1'>
      <GiMusicalNotes className='me-3 fs-1 text-warning'/>

<Link to={'/'}><div className='text-warning'>Media Player</div></Link>
        
      </Navbar.Brand>
    </Container>
  </Navbar></div>
  )
}

export default Header