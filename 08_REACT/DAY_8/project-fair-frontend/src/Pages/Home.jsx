import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import ProjectCard from '../Components/ProjectCard';




function Home() {

  let token = sessionStorage.getItem('token');
 
  return (
    <div>
       <div>
       <Row className='p-3 my-3'>
        <Col className='p-5 m-3'>
        <h3 className='projectHead p-2 m-1'>Project Fair</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur reprehenderit et autem magnam assumenda ab harum ipsam neque cumque minus tempora, eveniet nesciunt accusantium reiciendis aspernatur eligendi aut modi nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dicta debitis laudantium harum natus error, amet quia, minima deleniti porro aut repudiandae assumenda sapiente ipsa itaque! Nesciunt numquam ab quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aliquam consectetur et impedit at optio culpa tenetur fuga maiores quis, odio voluptatibus tempore, praesentium beatae perferendis? Sed ipsa a ut.</p>

      {
        token ?
        <Link to={'/dashboard'}><MDBBtn>View Dashboard</MDBBtn></Link>
      
      :
      <Link to={'/login'}><MDBBtn>Get Started</MDBBtn></Link>
    }

        </Col>
        <Col>
        <img src="https://i.pinimg.com/736x/1b/61/21/1b61216ceaccc25f3c386dce23ea567e.jpg" className='p-5 m-5' width={'500'} alt="" />
        </Col>
       </Row><hr />

       <div>

        <h3 className='text-center p-3 m-3'>Explore Our Project</h3><hr />
        <ProjectCard/>

        <div>

          <div className='text-center'>
            <Link to={'/project'}>
            <button className='btn btn-primary'>View Projects</button>
            </Link>
          </div>
        </div><br /><br /><br />

          <h3 className='text-center  p-2 m-2'>Our Services</h3>

          <Row className='p-3 text-center m-3'>
            <Col className='border border-3 rounded m-5 p-5'> <h3><strong>Web Designing</strong></h3><p style={{textAlign:'justify'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illo modi sequi nam eius a excepturi architecto, ex eaque optio aspernatur, quam harum tenetur! Dolor nemo sapiente vero tempora nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, saepe magni nemo minus laboriosam eius asperiores illum doloribus non neque dolorem maxime ipsum nulla minima corporis itaque impedit, blanditiis dolor?</p></Col> 

            <Col className='border border-3 rounded m-5 p-5'> <h3><strong>Single Page Application</strong></h3><p style={{textAlign:'justify'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illo modi sequi nam eius a excepturi architecto, ex eaque optio aspernatur, quam harum tenetur! Dolor nemo sapiente vero tempora nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, saepe magni nemo minus laboriosam eius asperiores illum doloribus non neque dolorem maxime ipsum nulla minima corporis itaque impedit, blanditiis dolor?</p></Col>

            <Col className='border border-3 rounded m-5 p-5'> <h3><strong>Backend Service</strong></h3><p style={{textAlign:'justify'}}> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non illo modi sequi nam eius a excepturi architecto, ex eaque optio aspernatur, quam harum tenetur! Dolor nemo sapiente vero tempora nihil?Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, saepe magni nemo minus laboriosam eius asperiores illum doloribus non neque dolorem maxime ipsum nulla minima corporis itaque impedit, blanditiis dolor?</p></Col>
          </Row><hr />
        </div>

        
       </div>
       
    </div>
  )
}

export default Home