import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { MDBSpinner } from 'mdb-react-ui-kit';


function ViewQuotes() {
  const [quote, setQuote] = useState({ quote: 'Winning isn’t everything, but wanting to win is.', author: 'Vince Lombardi' })
  const [load, setload] = useState(false)
  const URL = 'https://dummyjson.com/quotes';

  const fetchData = async () => {
      let response = await fetch(URL);
      let data = await response.json();
      let randomQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)]
      setQuote(randomQuote)
      console.log(quote);
      setload(false)
  }

  const handlerquote = () => {
      setQuote({})
      setload(true)
      fetchData();
  }

    
    
  return (

    <div className='outerContainerX '>
      <div className='quoteContainer shadow '>
      {
      !load ? <h4 className='quote'>{quote.quote}</h4> :
        <div className='d-flex justify-content-center border border-75'>
          <MDBSpinner grow className='text-center' color='secondary'>
            <span className='visually-hidden'>Loading...</span>
              </MDBSpinner>
                </div>
        }
         <div className='author'>
            <em>- {quote.author}</em>
              <button onClick={handlerquote} className='refreshbtn'><i className="fa-solid fa-rotate-right"></i></button>
          </div>
      </div>
    </div>
  )
}

export default ViewQuotes