import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Login() {
  // const eMail = document.getElementById('mail').value;
  // const Password = document.getElementById('pword').value;

  // if(eMail && Password){
  //   localStorage.setItem('email',eMail);
  //   localStorage.setItem('password',Password);

  //   alert('You are successfully login');
  //   window.location.href = '/project';
  // }
  // else{
  //   alert('please fill all details')
  // }

    
  return (
    <div>
        <Row>
            <Col>
            <div className='p-5 m-5'>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/app-login-5188522-4346990.png" width={'500'} alt="" />
                </div>
            </Col>

            <Col>
         <center> 

            
            <br /><br />
         <div className='p-2 m-3 border border w-75'><br />

         <h4>Project Fair</h4> <br />   
         <h6>Login Here...</h6><br />
             <input id='mail' className='form-control w-75' type="text" placeholder='email' /><br /><br />
             <input id='pword' className='form-control w-75' type="password" placeholder='password'/> <br />
             <p>New to here ? <a href="./register">Register here...</a></p><br />
              <MDBBtn className='bg-dark'>LOGIN</MDBBtn><br /><br />    
              </div><br /><br />
              </center>
              </Col>
        </Row>
    
    </div>
  )
}

export default Login

