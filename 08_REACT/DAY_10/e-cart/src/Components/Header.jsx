import React, { useEffect, useState } from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaOpencart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const [wishlistCount,setWishlistCount] = useState(0)
  const[cartCount,setCartCount]=useState(0)
  const wishlist = useSelector(state=>state.wishlistSlice.wishlist)
  const cart = useSelector(state=>state.cartReducer)

  useEffect(()=>{
    setWishlistCount(wishlist?.length)
    setCartCount(cart?.length)
  },[wishlist,cart])


  return (
    <div className='p-1'>
         <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
       <Link to={'/'}><Navbar.Brand className='fs-2' href="#">E-Cart <FaOpencart /> </Navbar.Brand></Link> 
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-3 p-2 ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>

              <Link  to={'./wishlist'}>
            <Nav.Link href="#action2" className='ms-auto'>Wishlist <i class="text-danger  fa-solid fa-heart fa-beat"></i>
            <Badge bg='success rounded ms-2'>{wishlistCount}</Badge>
             </Nav.Link></Link>
        
        <Link to={'./cart'}> <Nav.Link href="#action2" className='ms-auto'>Cart <i class=" text-warning fa-solid fa-cart-plus fa-bounce"></i>
            <Badge bg='success rounded ms-2'>{cartCount}</Badge>
             </Nav.Link></Link>
           
            
          </Nav>
          <Form className="d-flex">
            
           
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header