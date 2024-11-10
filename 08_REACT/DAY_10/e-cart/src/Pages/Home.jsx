import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import{ useDispatch,useSelector } from 'react-redux'
import { fetchproductData } from '../redux/slice/productSlice';
import { Col, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { addToWishlist } from '../redux/slice/wishlistlice';
import { addToCart } from '../redux/slice/cartSlice';


function Home() {
  const dispatch = useDispatch()
 
  const cart = useSelector(state=>state.cartReducer)

  const {loading, error,products} = useSelector((state)=>state.productSlice)
  const { wishlist } = useSelector(state=>state.wishlistSlice)


  useEffect (()=>{
    dispatch(fetchproductData())
  },[])

  const handleWishlist = (product)=>{
    const existingProduct = wishlist.find(item=>item.id==product.id)
  if(existingProduct){
    alert("already exist")
  }
  else{
    dispatch(addToWishlist(product))
  }
  }
  
  return (

    <div style={{marginTop:"80px"}}>

      {
        loading?
        <div className='d-flex justify-content-center mt-5'>
          <Spinner animation="border" variant="info" />Loading...
        </div>

        :<Row className='m-3'>
       { products?.length>0&&products?.map((product,index)=>(
        <Col key={index} className='my-3'>
        <Card className='rounded' style={{ width: '18rem' }}>
         <Link to={`/view/${product.id}`}><Card.Img className='w-100 p-2 ' style={{width:"100%"}} variant="bottom,top" src={product.thumbnail} /></Link>
          
      <Card.Body>
        <Card.Title>{product?.title.slice(0,20)}</Card.Title>
        
        <div className='buttons d-flex justify-content-between mt-4'>
        <Button onClick={()=>handleWishlist(product)}><i class="text-danger fa-solid fa-heart"></i></Button>
        <Button onClick={() => dispatch(addToCart(product))}><i class="text-warning fa-solid fa-cart-shopping"></i></Button>
        </div>
       
      </Card.Body>
    </Card>
        </Col>))} 
      </Row>}
        
    </div>
  )
}


export default Home