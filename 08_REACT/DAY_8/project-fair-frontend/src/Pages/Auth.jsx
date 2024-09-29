import React, { useState } from 'react'
import AuthImage from '../assets/auth-png.svg'
import { Link } from 'react-router-dom';
import { registerAPI } from '../Services/ALLAPI.';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({register}) {
  console.log(register);

  const [userData,setUserData] = useState({
    username:"",
    email:"",
    password:"",
  })

  const handleRegister = async()=>{
    const {username,email,password} = userData
    if(!username || !email || !password){
      alert("please fill the details")
    }
    else{
      //api fetching
      const response = await registerAPI(userData)
      console.log(response);

      if(response.status==200){
        alert("Register Successfully")
        setUserData({username:"",email:"",password:""})
      }
      else{
        alert(response.response.data)
      }
    }
  }
  
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
              <input onChange={(e)=>setUserData({...userData,username:e.target.value})} type="text" className='form-control mb-3' placeholder='Username' />
            }
            <input onChange={(e)=>setUserData({...userData,email:e.target.value})} type="text" className='form-control mb-3' placeholder='Email' />
            <input onChange={(e)=>setUserData({...userData,password:e.target.value})} type="password" className='form-control mb-3' placeholder='password' />
          </form>

          {
            register?
            <div><br />
              <button onClick={handleRegister} className='btn btn-outline-dark mb-3'>Sign Up</button>
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
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
       />
    </div>
  )
}

export default Auth