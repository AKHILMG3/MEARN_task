import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
import{ useDispatch,useSelector } from 'react-redux'
import { fetchproductData } from '../redux/slice/productSlice';
import { Col, Row } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Wishlist from './Wishlist';
import { addToWishlist } from '../redux/slice/wishlistlice';

function Home() {
  const dispatch = useDispatch()
  const {wishlist} = useSelector(state=>state.wishlistSlice)
  const cart = useSelector(state=>state.cartReducer)

  const {loading, error,products} = useSelector((state)=>state.productSlice)
  console.log(loading);
  console.log(error);
  console.log(products);

  useEffect (()=>{
    dispatch(fetchproductData())
  },[])

  const handleWishlist = (product)=>{
    const handleWishlist =Wishlist.find(item=>item.id==product.id)
  if(existingProduct){
    alert("already exist")
  }
  else{
    dispatch(addToWishlist(product))
  }

  }
  
  return (

    <div style={{marginTop:"80px",marginLeft:"100px"}}>

      {
        loading?
        <div className='d-flex justify-content-center mt-5'>
          <Spinner animation="border" variant="info" />Loading...
        </div>

        :<Row className='m-3'>
       {products.length>0&&products.map((product,index)=>(
        <Col key={index} className='my-3' sm={12} md={6} lg={4} xl={3}>
        <Card className='m-1' style={{ width: '18rem' }}>
         <Link to={`/view/${product.id}`}><Card.Img className='w-100 p-2 ' style={{width:"100%"}} variant="bottom,top" src={product.thumbnail} /></Link>
          
      <Card.Body>
        <Card.Title>{product.title.slice(0,26)}</Card.Title>
        
        <div className='d-flex justify-content-between'>
        <Button ><i class="text-danger fa-solid fa-heart" onClick={()=>handleWishlist(product)}></i></Button>
        <Button><i class="text-warning fa-solid fa-cart-shopping"></i></Button>
        </div>
       
      </Card.Body>
    </Card>
        </Col>))} 
      </Row>}
        
    </div>
  )
}


export default Home