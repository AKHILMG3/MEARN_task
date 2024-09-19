
import './App.css'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {

  const [amount,setAmount] = useState(0)
  const [year,setYear] = useState(0)
  const [rate,setRate] = useState(0)
  //it will update after the calculation

  const [interest,setinterest] = useState(0)
  console.log(amount,year,rate);

  const handleInterest=()=>{
    const output=amount*year*rate/100
    setinterest(output)
  }

  
  

  return (
    <>
   <div className="row">
    

      <div className="col-8">
        <div className='border border-black rounded m-5 p-5 text-center' style={{background:"greenyellow"}}>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple interest with us ❤</p>

          <div className='bg-light border border-light rounded p-5 shadow w-75 mx-auto'>
            <h1>&#8377;{interest}</h1>
            <p>Your Total Interest</p>
          </div>
          <div className='d-flex  justify-content-between flex-column w-75 mx-auto my-3'>
          <TextField value={amount} onChange={e=>setAmount(e.target.value)} className='mb=2' id="filled-basic" label="Amount" variant="filled" />
          <TextField  value={year} onChange={e=>setYear(e.target.value)} className='mb=2' id="filled-basic" label="Year" variant="filled" />
          <TextField  value={rate} onchange={e=>setRate(e.target.value)} className='mb=2'  id="filled-basic" label="Rate" variant="filled" />
          </div>

          <div className='d-flex justify-content-evenly'>
          <Button onClick={handleInterest} variant="contained">Calculate</Button>
          <Button  variant="outlined">Reset</Button>
          </div>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
