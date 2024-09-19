import React, { useState } from 'react';
import { Button } from '@mui/material';

function Calculator() {
  const [amount, setAmount] = useState('');
  const [interest, setInterest] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(0);

  const handleEmi = () => {
    const price = parseFloat(amount);
    const InterestRate = parseFloat(interest);
    const tenureInMonths = parseInt(tenure, 10);

   

    const monthlyInterestRate = InterestRate / 12 / 100;

    const emiCalc = price * monthlyInterestRate * Math.pow((1 + monthlyInterestRate), tenureInMonths) /
                    (Math.pow((1 + monthlyInterestRate), tenureInMonths) - 1);

    setEmi(emiCalc.toFixed(2)); // Round to 2 decimal places
  };

  const handleReset = () => {
    setAmount('');
    setInterest('');
    setTenure('');
    setEmi(0);
  };

  return (
    <div>
      <center>
        <div className="row-1 text-center p-5 m-5 border border-dark w-25">
          <div className='p-3 m-2'>
            <h3>EMI Calculator</h3>
          </div>
          <div className='border border-dark p-2 m-5'>
            <h1>&#8377;{emi}</h1>
            <p>Total EMI per Month</p>
          </div>
          <div>
            <input value={amount} onChange={e => setAmount(e.target.value)} className='p-2 m-2 w-100' type="text" placeholder='Loan Amount' /><br /><br />
            <input value={interest} onChange={e => setInterest(e.target.value)} className='p-2 m-2 w-100' type="text" placeholder=' Interest Rate (%)' /><br /><br />
            <input value={tenure} onChange={e => setTenure(e.target.value)} className='p-2 m-2 w-100' type="text" placeholder='Loan Tenure (in months)' /><br /><br />
          </div>
          <div className='d-flex justify-content-evenly'>
            <Button onClick={handleEmi} variant="contained">Calculate</Button>
            <Button onClick={handleReset} variant="outlined">Reset</Button>
          </div>
        </div>
      </center>
    </div>
  );
}

export default Calculator;