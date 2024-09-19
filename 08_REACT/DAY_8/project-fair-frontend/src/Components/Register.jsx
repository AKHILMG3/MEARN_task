import React from 'react'

import { MDBBtn } from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Register() {
  return (
    <div>
        <div>
        <Row>
            <Col>
            <div className='p-5 m-5'>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/register-3470332-2918388.png" width={'500'} alt="" />
                </div>
            </Col>

            <Col>
         <center> 

            
            <br /><br />
         <div className='p-2 m-3 border border w-75'><br />

         <h4>Project Fair</h4> <br />   
         <h6>Register Here..</h6><br />

             <input className='form-control w-75' type="text" placeholder='email' /><br /><br />
             <input className='form-control w-75' type="text" placeholder='email' /><br /><br />
             <input className='form-control w-75' type="password" placeholder='password'/> <br />
             <p>Already registered ? <a href="./login">Login here...</a></p><br />

              <MDBBtn className='bg-dark'>REGISTER</MDBBtn><br /><br />    
              </div><br /><br />
              </center>
              </Col>
        </Row>
            
        </div>
    </div>
  )
}

export default Register