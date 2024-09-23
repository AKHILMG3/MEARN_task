import React from 'react'
import AuthImage from '../assets/auth-png.svg'
import { Link } from 'react-router-dom';


function Auth({register}) {
  console.log(register);
  

  return (
    <div className='p-5 m-5'>
      <div className="row border border-1 shadowntext-light m-2 rounded p-5 ">
        <div className="col-6"><img src={AuthImage} width={'400'} alt="" /></div>
        <div className="col-6">
          <h3>Project Fair</h3><br />
          <h4>Sign {register? "Up" : "In"}</h4>

          <form>
            {
              register && 
              <input type="text" className='form-control mb-3' placeholder='Username' />
            }
            <input type="text" className='form-control mb-3' placeholder='Email' />
            <input type="text" className='form-control mb-3' placeholder='password' />
          </form>

          {
            register?
            <div><br />
              <button className='btn btn-outline-dark mb-3'>Sign Up</button>
              <p>Already Register ?  <Link to={'/login'}>Login Here...</Link> </p>
            </div>
            :
            <div>
            <button className='btn btn-outline-dark mb-3'> Sign in</button>
            <p>Already Register ? <Link to={'/register'}>Register Here...</Link> </p>
          </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Auth