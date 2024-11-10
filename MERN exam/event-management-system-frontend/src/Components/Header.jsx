import React from 'react'
import { SiEventbrite } from "react-icons/si";
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className='head'>
        <nav class="navbar navbar-expand-lg " data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/" className='fw-bolder fs-2 text-dark'> <SiEventbrite /> Dreamscape Event Co.</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav me-auto">
       
       
      </ul>
      <form class="d-flex">
        <Link to={'booking'}><button class="btn btn-secondary my-2 my-sm-0" type="submit">Book Now</button></Link>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header