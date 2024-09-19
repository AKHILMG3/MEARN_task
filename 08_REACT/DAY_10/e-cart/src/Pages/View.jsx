import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import { addToCart } from '../redux/slice/cartSlice';



function View() {

  const {id} = useParams()
  console.log(id);
  const {loading}= useSelector((state)=>state.productSlice)
  const[product,setProduct] = useState({})

  useEffect(()=>{
    const products= JSON.parse(localStorage.getItem("products"))
    setProduct(products.find(product=>product.id==id))
  },[])

  console.log(product);
  
  
  return (
    <div >
    {
       loading?
       <div className='d-flex justify-content-center mt-5'>
         <Spinner animation="border" variant="info" />Loading...
       </div>:

      <Row className='mt-5 container'>
        <Col className=' col-6 p-5 m-2'>
        <Card className='m-2' style={{ width:'450px', height:'350px'}}>
             <Card.Img className='w-100 p-2 ' variant="top,bottom" src={product?.thumbnail} />

          <div className='d-flex justify-content-between p-2'>

        <Button ><i class="text-danger fa-solid fa-heart"></i></Button>
        <Button><i class="text-warning fa-solid fa-cart-shopping"></i></Button>
        </div>
        </Card>
        </Col>
        <Col className='p-5 ms-5 m-3'>
        <div>
          <p>Pid{product.id}</p>
          
          <h1>{product?.title}</h1>
          <div className='d-flex justify-content-sm-start '> Price : <span className='text-decoration-line-through'> $4999.00 </span> <span>{product?.price}</span></div><br /><br />
         <p>{product?.description}</p>
          <br /><br />

          <div className='d-flex justify-content-between'> 
            <Button className='btn btn-outline-warning'>Wishlist <i class="text-danger fa-solid fa-heart"></i></Button>
            <Link to={''}><Button className='btn btn-outline-warning' onClick={()=>dispatch(addToCart(product))}> <i class=" text-light fa-solid fa-cart-shopping"></i> Add to Cart</Button></Link> 
          </div>
        </div>
        </Col>
      </Row>
}
    </div>
  )
}

export default View