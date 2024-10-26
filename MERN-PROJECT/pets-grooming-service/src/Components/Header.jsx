import React from 'react';
import { Link } from 'react-router-dom';



  
function Header() {

  return (

    <div>
  <nav className='navbar '>

  <div>
    <img className='logo mx-' src="https://static.vecteezy.com/system/resources/previews/006/470/732/large_2x/animal-pet-logo-template-vector.jpg" alt="" />  </div>
  
  <Link to={'/'}><h1 className=''>HappyGroomer</h1></Link>
    <ul>
      <li><a className='active' href='/'>Home</a></li>
      <li><a href='/about'>About Us</a></li>
      <li><a href='/location'>  Pet Grooming</a></li>
      <li><a href='/gallery'>Gallery</a></li>
      <li><a href='/services'>Services</a></li>
    </ul>

    <div> <Link to={'/login'}> <button className='btn btn-success m-3 mx-5 '>Login</button></Link> </div>
  </nav>  
    </div>

  )
}

export default Header