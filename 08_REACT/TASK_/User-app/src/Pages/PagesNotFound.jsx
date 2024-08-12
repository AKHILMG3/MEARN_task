import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function PagesNotFound() {
  return (
    <div className='p-2 m-'>
      <center><img src="https://warals.com/images/notfound.gif" width={'900px'} className='p-3 m-3' alt="" /> <br />

      <Link to={'/'}><Button >Go to Home</Button></Link>

      </center><br />
    </div>
  )
}

export default PagesNotFound