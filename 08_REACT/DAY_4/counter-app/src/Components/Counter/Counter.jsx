import React from 'react'
import { useState } from 'react'

function Counter() {
    const[Counter,setCounter] = useState(0)
    const handleIncrement =()=>{
        setCounter(Counter+1)
    }
    
    const handleDecrement =()=>{
    setCounter(Counter-1)
    }

    const handleReset =()=>{
      setCounter(0)
    }

  
  return (
    <div>
        <div className='container border border-dark border-2 p-5 m-5 '>
             
             <div className='text-center'>
                <h1>{Counter}</h1>
             </div><br /><br />

             <div className='d-flex justify-content-evenly'>
                <button onClick={handleIncrement} className='btn btn-success'>Increment</button>
                <button onClick={handleDecrement} className='btn btn-danger'>Decrement</button>
                <button onClick={handleReset} className='btn btn-dark'>Reset </button>

             </div>

        </div>
    </div>
  )
}

export default Counter