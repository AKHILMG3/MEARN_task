import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';



function Home() {
  return (
    <div>
         
            <header class="bg-dark py-5">
                <div class="container px-5">
                    <div class="row gx-5 align-items-center justify-content-center">
                        <div class="col-lg-8 col-xl-7 col-xxl-6">
                            <div class="my-5 text-center text-xl-start">
                                <h1 class="display-5 fw-bolder text-white mb-2">Pet Grooming service that comes to your home</h1>
                                <p class="lead fw-normal text-white-50 mb-4">Instantly Book a Professional Pet Groomer Online, Whenever you need one.</p>
                                <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                  <Link to={'login'}>
                                    <a class="btn btn-primary btn-lg px-4 me-sm-3" href="#features">Booking Now</a></Link>
                                   <Link to={'contact'}> <a class="btn btn-outline-success btn-lg px-4" href="#!">Contact</a></Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-5 my-5" src="https://cdn.pixabay.com/photo/2024/02/05/02/53/cat-8553498_1280.jpg" alt="..." /></div>
                    </div>
                </div>

                <hr /><br />
    <div>
      <h1 className='fs-1 fw-bold text-center'>Explore Our Pet Grooming Services for Your Pet</h1><br />
      
      <div>
        <div className="row justify-content-evenly  ">
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
     <br /><br />
            </header>
    </div>
  )
}

export default Home