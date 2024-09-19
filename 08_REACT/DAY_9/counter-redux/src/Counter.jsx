import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, incrementByAmount } from './redux/counterSlice'

function Counter() {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.CounterReducer.count)
  const [amount,setAmount] = useState("")
  const handleIncrement = ()=>{
    if(amount==""){
      alert("please provide values properly")
    }
    else{
      //update values in to the store 
      dispatch(incrementByAmount(Number(amount)))
      setAmount("")
    }
  }


  return (
    <div className=''>
        <div className='text-center p-5'>
            <h2 className='text-danger text-center '>Counter Appication</h2>

            <div className='container border border-dark border-2 p-5 m-5 ' >
                <p className='fs-1 text-white'>{count}</p>

                <div className='p-2 m-5 d-flex justify-content-evenly'>
                <button type="button" class="btn btn-success" onClick={()=>dispatch(increment())}>Increment</button>
                <button type="button" class="btn btn-danger" onClick={()=>dispatch(decrement())}>Reset</button>
                <button type="button" class="btn btn-warning" onClick={()=>dispatch(reset())}>Decrement</button>

                
                </div>

                <div className='d-flex mt-5 '>
                    <input onChange={e=>setAmount(e.target.value)}value={amount} type="text" placeholder='enter amount to be increment' className='form-control w-25' />
                <button onClick={handleIncrement} type="button" class="btn btn-primary ms-3">Increment Amount</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Counter