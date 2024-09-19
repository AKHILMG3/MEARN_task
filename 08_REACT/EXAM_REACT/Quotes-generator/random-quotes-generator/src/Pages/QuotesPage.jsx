import React, { useEffect, useState } from 'react'
import ViewQuotes from './ViewQuotes'


function QuotesPage() {
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


    
  return (
    <div>
        <ViewQuotes data={quote}/>
    </div>
  )
}

export default QuotesPage