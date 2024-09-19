
import { useState } from 'react';
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';




function App() {

  const[price,setPrice] = useState('')
  const[percentage,setPercentage] = useState('')
const[discountedPrice,setDiscountedPrice] = useState(0)
console.log(price,percentage);

const handleDiscount=()=>{
  const discountedPrice=price-(price*percentage)/100
  setDiscountedPrice(discountedPrice)
}

const handleReset = () => {
  setPrice('');
  setPercentage('');
  setDiscountedPrice(0);
};

  return (
    <>
      <Header/>
      <center>
      <div className="row text-center p-5 m-5 border border-3 border-dark w-75">
        <div className="co1">
          <h1>Discount Calculaor</h1><br /><br />

          <div className='bg-light border border-light rounded p-5 shadow w-50 mx-auto'>
            <h3> Discounted Price : &#8377; {discountedPrice}</h3>
            
          </div><br />

          <div className='d-flex  justify-content-between flex-column w-25 mx-auto my-3'>
          <TextField value={price} onChange={e=>setPrice(e.target.value)} className='mb=2' id="outlined-basic" label="Original Price" variant="outlined" /><br /><br />
          <TextField value={percentage} onChange={e=>setPercentage(e.target.value)} className='mb=2'  id="outlined-basic" label="Discount Rate" variant="outlined" /><br /><br />

          <div className='d-flex justify-content-evenly'>
            <Button onClick={handleDiscount} variant="contained">CALCULATE</Button>

          <Button onClick={handleReset}  variant="outlined">RESET</Button>
          </div>
          
          </div>
        </div>

        
         </div>

      </center>

      <Footer/>
      

    
   
    </>
  )
}

export default App
