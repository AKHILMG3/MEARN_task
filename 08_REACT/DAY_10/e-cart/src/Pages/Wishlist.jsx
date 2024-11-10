import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart } from '../redux/slice/cartSlice';



function Wishlist() {
  const wishlist = useSelector(state=>state.wishlistSlice.wishlist)

  const dispatch = useDispatch()

  const handleCart = (product)=>{
    dispatch(removeFromWishlist(product.id))
    dispatch(addToCart(product))
  }

  return (

    <Row className='m-3'>

      { wishlist.length > 0 ? wishlist.map(product=>(
        <Col className='my-3'>
        <Card className='m-1' style={{ width: '18rem' }}>
        <Link to={`/view/${product?.id}`}><Card.Img className='w-100 p-2 ' variant="bottom,top" src={product.thumbnail} /></Link>
         
     <Card.Body>
       <Card.Title>{product?.title.Slice(0, 20)}</Card.Title>
       <Card.Text>
         Some quick example text to build on the card title and make up the
         bulk of the card's content.
       </Card.Text>
       <div className='d-flex justify-content-between'>
       <Button onClick={() => dispatch(removeFromWishlist(product.id))} ><i class="text-danger fa-solid fa-heart"></i></Button>
       <Button onClick={()=> handleCart(product)}><i class="text-warning fa-solid fa-cart-shopping"></i></Button>
       </div>
     </Card.Body>
   </Card>
   </Col>

      )): <div className='container mt-5 d-flex align-items-center'>
         <h1 className='text-center'>Your Wishlist Is Empty...</h1>
      <img src="https://schoolville.com/assets/img/empty-cart-illustration.gif" alt="" /> </div>
      }
    </Row>
   
  )
}

export default Wishlist