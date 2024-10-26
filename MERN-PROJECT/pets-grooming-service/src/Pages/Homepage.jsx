import React, { useState } from 'react'
import { Link } from 'react-router-dom'






function Homepage() {

  return (
    <div>
      <div className="wrapper">
      <div className='center'>
        <h1 > Welcome to Pet Grooming Service </h1>
        <h2 >We provide the best grooming services for your pets.</h2>

        <div className='buttons d-flex'>

          <Link to={'/login'}> <button   className='btn'>Book Now</button></Link>
            
          <Link to={'/contact'}> <button className='btn'>Contact Us</button></Link>
          
        </div>
      </div>
      
      
    </div>  <hr /><br />
    <div>
      <h1 className='fs-1 fw-bold text-center'>Explore Our Pet Grooming Services for Your Pet</h1><br />
      
      <div>
        <div className="row justify-content-evenly  p-2 m-2">
          <div className="col-4 border border-2  w-25" style={{borderRadius:'10px'}}><img src="https://ohmypetgrooming.in/wp-content/uploads/2024/05/vecteezy_cartoon-funny-little-dog-playing-ball_-1024x1002.webp" alt="" /><p className='text-center fw-bold'>Dog Training At Home </p></div>

          <div className="col-4 border border-2  w-25" style={{borderRadius:'10px'}}><img src="https://ohmypetgrooming.in/wp-content/uploads/2024/05/vecteezy_veterinarian-with-a-dog-veterinarian-by-profession_-1024x985.webp" alt="" /><p className='text-center fw-bold'>Online Vet Consultation</p></div>

          <div className="col-4 border border-2  w-25" style={{borderRadius:'10px'}}> <img src="https://ohmypetgrooming.in/wp-content/uploads/2024/05/vecteezy_veterinarian-with-a-dog-veterinarian-by-profession_1-1024x985.webp" alt="" /><p className='text-center fw-bold'>At Home Pet Vaccination</p></div></div>
          <br /><br /><br />
          <div className="row justify-content-evenly">
            <div className="col-1 border border-2" style={{borderRadius:'10px'}}><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/11/dog-bath.png"  alt="" /> <p className='text-center fw-bold p-2'>Spa Bath</p></div>

            <div className="col-1 border border-2" style={{borderRadius:'10px'}}><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/11/ear-cleaning_1499504.webp" alt="" /><p className='text-center fw-bold p-2'>Knots/Mats Removal</p></div>
            <div className="col-1 border border-2" style={{borderRadius:'10px'}}><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/11/grooming.png" alt="" /><p className='text-center fw-bold'>Full Grooming</p></div>
            <div className="col-1 border border-2" style={{borderRadius:'10px'}}><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/11/nail-clipper_9716888.png" alt="" /><p className='text-center fw-bold'>Nail Cliping</p></div>
            <div className="col-1 border border-2 " style={{borderRadius:'10px'}}><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/11/dog_10667046.png" alt="" /> <p className='text-center fw-bold'>Stylish Hair Cuts</p></div>
            <div className="col-1 border border-2 " style={{borderRadius:'10px'}}><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/11/Anti-tick.png" alt="" /><p className='text-center fw-bold'>Anti-Tick Treatment</p></div>
            <div className="col-1 border border-2 " style={{borderRadius:'10px'}}><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/11/destressing.png" alt="" /><p className='text-center fw-bold'>DeStressing Massage</p></div>
          </div>
        </div>
      
    </div>
     
   
     
    </div>
  )
}

export default Homepage