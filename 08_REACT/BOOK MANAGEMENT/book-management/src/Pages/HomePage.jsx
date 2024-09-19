import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='home'><br />
    <Link to={'/addBook'}><MDBBtn>Get Start</MDBBtn></Link>

     <br /><br />
    </div>
  )
}

export default HomePage