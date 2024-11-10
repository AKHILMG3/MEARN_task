import React, { useEffect, useState } from 'react'
import { Button, Spinner,} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { addToWishlist } from '../redux/slice/wishlistlice';
import { addToCart } from '../redux/slice/cartSlice';


function View() {

  const {id} = useParams()
  const[product,setProduct] = useState({})
  const products = JSON.parse(localStorage.getItem("products"))
  const dispatch=useDispatch()

  const { wishlist } = useSelector(state=>state.wishlistSlice)
  const { loading } = useSelector((state)=>state.prouctSlice)
 

  useEffect(()=>{
   setProduct(products.find(item => item.id==id))
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
    <div className='container my-3'>
   {
    loading? <div className='d-flex justify-content-center mt-5'>
    <Spinner animation="border" variant="info" />Loading...
  </div>
  :
    <div className="row d-flex justify-content-center flex-wrap">
    <div className="col-6 border " style={{minWidth:'400px'}}>
      <img src={product?.thumbnail} alt="" width={'100%'} />
    </div>
    <div className="col-6 my-3 border px-5" style={{minWidth:'400px'}}>
      <p>Product:Id:{product?.id}</p>
      <h1>{product?.title}</h1>
      <p className='fs-5'>{product?.description}</p>
      <h4>Price:${product?.price}</h4>
      
      <div className='button mt-5 d-flex justify-content-between'>
        <Button variant='danger fs-6 rounded' onClick={()=>handleWishlist(product)}><i class="text-danger fa-solid fa-heart">&nbsp;&nbsp; W i s h l i s t </i></Button>
        <Button variant='info fd-6 rounded' onClick={() => dispatch(addToCart(product))}><i class="text-warning fa-solid fa-cart-shopping">&nbsp;&nbsp; C a r t </i></Button>
      </div>
    </div>
   </div>}
    </div>
  )
}

export default View