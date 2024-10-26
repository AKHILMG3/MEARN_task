import React, { useState } from 'react'
import AuthImage from '../assets/auth-png.svg'
import { Link, useNavigate } from 'react-router-dom';
import { loginAPI, registerAPI } from '../Services/ALLAPI';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';




function Auth({register}) {

  const [isLoggedIn,setLoggedIn] = useState(false)

  console.log(register);

  const navigate = useNavigate()

  const [userData,setUserData] = useState({
    username:"",
    email:"",
    password:"",
  })

  const handleRegister = async()=>{
    const {username,email,password} = userData
    if(!username || !email || !password){
      toast.error('please fill the details', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
    else{
      //api fetching
      const response = await registerAPI(userData)
      console.log(response);

      if(response.status==200){
        toast.success('Register Successfully', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
          setTimeout(()=>{
            navigate('/login')
          },6000)


        // setUserData({username:"",email:"",password:""})
      }
      
      else{
        toast.warn(response.response.data, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      }
    }
  }

  const handleLogin = async()=>{
    const {email,password} = userData
  if(  !email || !password){
    toast.error('please fill the details', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
      });
  }
  else{
    //api fetching
    const response = await loginAPI(userData)
    console.log(response);

    if(response.status==200){
      setLoggedIn(true)
      toast.success('Login Successfully', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });

        sessionStorage.setItem("user",JSON.stringify(response.data.user));
        sessionStorage.setItem("token",response.data.token);
        setTimeout(()=>{
          navigate('/')
        },6000)

      // setUserData({email:"",password:""})
    }
    else{
      toast.warn(response.response.data, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
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
              <button onClick={handleRegister}  className='btn btn-outline-dark mb-3'>Sign Up</button>
              <p>Already Register ?  <Link to={'/login'}>Login Here...</Link> </p>
            </div>
            :
            <div>
            <button onClick={handleLogin} className='btn btn-outline-dark mb-3'> Sign in
              {
                isLoggedIn && <Spinner animation="border" variant="light" className='fs-6 mt-1' />
              }
            </button>
            <p>Already Register ? <Link to={'/register'}>Register Here...</Link> </p>
          </div>
          }
        </div>
      </div>
      <ToastContainer
      position="top-center"
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