import React from 'react'
import { Link } from 'react-router-dom'


function Login() {
  return (
    <div className='border shadow box border-1 w-75 m-5 rounded'>
      <div className="row">
        <div className="col-6 p-5 "><br /><br />
          <img src="https://cdn.pixabay.com/photo/2023/10/03/19/32/ai-generated-8292337_1280.png" class="img-fluid rounded-5 my-5" alt="" />
        </div>
        <div className="col-6">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
	<div className="mb-8 text-center">
		<h1 className="my-3 text-4xl font-bold">Sign in</h1>
		<p className="text-sm dark:text-gray-600">Sign in to access your account</p>
	</div>
	<form noValidate="" action="" className="space-y-12">
		<div className="space-y-4">
			<div>
				<label htmlFor="email" className="block mb-2 text-sm fw-bold">Email address</label>
				<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
			<div>
				<div className="flex justify-between mb-2">
					<label htmlFor="password" className="text-sm fw-bold">Password</label>
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
				</div>
				<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
			</div>
		</div>
		<div className="space-y-2">
			<div>
        <Link to={'/booking'}>
				<button type="button" className=" btn btn-outline-success w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button></Link>
			</div>
			<p className="px-6 text-sm text-center dark:text-gray-600 fw-bold">Don't have an account yet?
				<a rel="noopener noreferrer" href="register" className="hover:underline dark:text-violet-600">Sign up</a>.
			</p>
		</div>
	</form>
</div>
         
        </div>
      </div><br /><br />
    </div>
  )
}

export default Login