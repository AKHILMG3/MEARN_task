import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

function Wishlist() {
  const dispatch = useDispatch()

  const handleCart = (product)=>{
    dispatch(removeFromWishlist(product.id))
  }

  return (
    <div>
       <div>
         <Card className='m-1' style={{ width: '18rem' }}>
         <Link to={'./view/1'}><Card.Img className='w-100 p-2 ' variant="bottom,top" src="https://th.bing.com/th/id/OIP.83ku1kFM32MaLtyf39PnxQHaEK?rs=1&pid=ImgDetMain" /></Link>
          
      <Card.Body>
        <Card.Title>Product</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button onClick={() => dispatch(removeFromWishlist)} ><i class="text-danger fa-solid fa-heart"></i></Button>
        <Button onClick={()=> handleCart}><i class="text-warning fa-solid fa-cart-shopping"></i></Button>
        </div>
       
      </Card.Body>
    </Card>
    </div>
    </div>
  )
}

export default Wishlist