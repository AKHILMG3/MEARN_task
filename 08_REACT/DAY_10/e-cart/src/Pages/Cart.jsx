import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeFromCart } from '../redux/slice/cartSlice'
import { Link } from 'react-router-dom'

function Cart() {
  const cart = useSelector(state=>state.cartReducer)
  const [total,setTotal] = useState(0)
  const dispatch= useDispatch()

  useEffect(()=>{
    if(cart?.length>0){
      setTotal(cart?.map(product=>product?.totalPrice).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  },[])

  return (
    <div className='container d-flex justify-content-between p-5 m-5' style={{marginTop:"100px"}}>
     {
       cart?.length>0?
      <div className="row mt-5 ">
      <div className="col-lg-8 ">
        <table className='table shadow '>
          <thead>
            <tr>
              <th>#</th>
              <th>Titile</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
     
          </thead>
          <tbody>
           {
             cart?.map((product,index)=>(
            <tr key={index}>
              <td>{index+1}</td>
              <td>{product.title}</td>
              <td><img style={{width:"300px",height:"300px"}} src={product.thumbnail} alt="" /></td>
              <td><input type="text" value={product.quantity} readOnly style={{width:"25px"}} /></td>
              <td>${product.totalPrice}</td>
              <td><button className='btn' onClick={()=>dispatch(removeFromCart(product.id))}><i class="fa-solid fa-trash text-danger"></i></button></td>
            </tr>))
            }
          </tbody>
        </table>

        <div className='float-end'>
          <button className='btn btn-outline-warning' onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
         <Link to={'/'} style={{textDecoration:"none"}}><button className='btn btn-outline-primary'>Shop More</button></Link> 
        </div>
      </div>
     </div>
:0 }
  <div className='col-lg-3 '>
      <div className='container border border rounded shadow mt5 p-3 w-100'>
        
        <h1>Cart Summary</h1>
        <h4>Total Products:{cart?.length}</h4>
        <h5>Total: <span className='text-danger fw-bolder'>${total}</span></h5>
        <button className='btn btn-success m-3 rounded'>Checkout</button>
      </div>
     </div>
     <div>:
     <div className='container mt-5 d-flex '>
         <h3 className='text-center'>Your Wishlist Is Empty...</h3>
         </div>
      
     </div>

    </div>
  )
}

export default Cart