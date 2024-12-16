import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerAPI } from '../Services/AllAPI'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-bootstrap/Spinner';

function Register() {

	const [isLoginedIn,setLoginedIn] = useState(false)

	const [userData, setUserData] = useState({
	  username: "",
	  email: "",
	  phonenumber:"",
	  password: "",
	});

	const navigate = useNavigate();

  
	const handleInputChange = (e) => {
	  const { name, value } = e.target;
	  setUserData({ ...userData, [name]: value });
	};
  
	const handleRegister = async (e) => {
	  e.preventDefault();
	  const { username, email, phonenumber, password } = userData;
  
	  if (!username || !email || !phonenumber ||  !password) {
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
		const response = await registerAPI(userData);
		if(response.status==200){
			setLoginedIn(true)
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
		//   setUserData({ username: "", email: "", phonenumber:"" ,password: "" });
		//   navigate('/login')
		}else {
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
		toast.error("An error occurred during registration", {
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
      style={{display: 'flex',justifyContent: 'center',alignItems: 'center', minHeight: '100vh',backgroundColor: '#f8f9fa', margin: '0', backgroundImage: 'url("https://blueprintsvmg.com/wp-content/uploads/How-does-your-team-leadership-rate.png")',
		backgroundRepeat: 'no-repeat',
		
	  }}>
    <div className='reg border shadow box border-1 w-75 m-5 rounded'>
  
    <div className="row"><br /><br />
	<div className=" text-center">
		<h1 className="my-3 text-4xl font-bold text-dark">Sign in</h1>
		<p className="text-sm text-dark">Sign in to access your account</p>
	</div>
		<div className="col-6" >

	</div>
      <div className="col-6">
     <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 text-dark dark:text-gray-800">
	
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
    <div>
				<label htmlFor="Username" className="block mb-2 text-sm fw-bold ">Username</label>
				<input onChange={(e)=>setUserData({...userData,username:e.target.value})} type="username" name="username" id="username" placeholder="Username" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<label htmlFor="email" className="block mb-2 text-sm fw-bold">Email address</label>
				<input onChange={(e)=>setUserData({...userData,email:e.target.value})} type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
    <label htmlFor="phonenumber" className="block mb-2 text-sm fw-bold text-dark">
        Phone Number
    </label>
    <input 
        onChange={(e) => setUserData({ ...userData, phonenumber: e.target.value })} 
        type="tel" 
        name="phonenumber" 
        id="phonenumber" 
        placeholder="123-456-7890" 
        className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" 
    />
</div>

			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm fw-bold text-dark">Password</label>
					
				</div>
				<input onChange={(e)=>setUserData({...userData,password:e.target.value})} type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
			<button onClick={handleRegister} type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 btn btn-outline-success">Sign in
			{
                isLoginedIn && <Spinner animation="border" variant="light" className='fs-6 mt-1' />
              }
			</button>
			</div><br />
			<p className="px-6 text-sm text-center text-dark fw-bold">Already registered ?
				<a rel="noopener noreferrer" href="login" className="hover:underline dark:text-violet-600"> Sign in</a>.
			</p>
		</div>
	</form>
</div>
      </div>
    </div><br />
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
  </div>
  )
}

export default Register