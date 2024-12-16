import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { loginAPI } from '../Services/AllAPI';
import Spinner from 'react-bootstrap/Spinner';


function Login() {

	const [isLoginedIn,setLoginedIn] = useState(false)

	const [userData, setUserData] = useState({
	  email: "",
	  password: "",
	});

	const navigate = useNavigate();

	const handleInputChange = (e) => {
	  const { name, value } = e.target;
	  setUserData({ ...userData, [name]: value });
	};
  
	const handleLogin = async (e) => {
	  e.preventDefault();
  
	  const { email, password } = userData;
  
	  // Validation for empty fields
	  if (!email || !password) {
		toast.error("Please fill in all the details", {
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
		return;
	  }
  
	  // Email format validation
	  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	  if (!emailRegex.test(email)) {
		toast.error("Please enter a valid email address", {
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
		return;
	  }
  
	  try {
		// API call
		const response = await loginAPI(userData);
		console.log(response);
  
		if (response.status === 200) {
			setLoginedIn(true)
		  toast.success("Login Successful", {
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
  
		  sessionStorage.setItem("user",JSON.stringify(response.data.user))
		  sessionStorage.setItem("token",response.data.token)
		  setTimeout(()=>{
			navigate('/booking')
		  },6000)

		//   setUserData({ email: "", password: "" });
		//   navigate('/booking')
		} else {
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
	  } catch (error) {
		console.error(error);
		toast.error("An error occurred while logging in", {
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
	};
	

  return (
	<div
      style={{display: 'flex',justifyContent: 'center', alignItems: 'center', minHeight: '100vh',backgroundColor: '#fcfcfc', margin: '0',backgroundImage: 'url("https://blueprintsvmg.com/wp-content/uploads/How-does-your-team-leadership-rate.png")',backgroundRepeat: 'no-repeat',
      }}
		
      >
    <div className='border shadow box border-1 w-75 m-5 rounded'>
      <div className="row">
	  <div className=" text-center">
		<h1 className="my-3 text-4xl font-bold text-dark">Sign in</h1>
		<p className="text-sm text-dark">Sign in to access your account</p>
	</div>
        <div className="col-6"></div>
        <div className="col-6">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 text-dark">
	
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm fw-bold">Email address</label>
				<input type="email"
          name="email"
          value={userData.email}
          onChange={handleInputChange}
          placeholder="Enter your email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 text-dark" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm fw-bold">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
				</div>
				<input  type="email"
         
		 name="password"
		 value={userData.password}
		 onChange={handleInputChange}
		 placeholder="Enter your password"className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
       
				<button onClick={handleLogin} type="button" className=" btn btn-outline-success w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in
				{
                isLoginedIn && <Spinner animation="border" variant="light" className='fs-6 mt-1' />
              }
				</button>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600 fw-bold">Don't have an account yet?
				<a rel="noopener noreferrer" href="register" className="hover:underline dark:text-violet-600">Sign up</a>.
			</p>
		</div>
	</form>
</div>
         
        </div>
      </div><br /><br />
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
	<hr /></div>
  )
}

export default Login