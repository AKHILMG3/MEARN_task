import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';



function Registration = () =>   {
  const formik = useFormik({
     initialVales: {
      name:"",
      email:"",
      phone:"",
      dob:"",
      gender:"",
      address:"",
      password:"",
      cpassword:"",
      country:"",
      profilepic:"",   
    }   
    validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form Data', values);
      }}
  })

  console.log(formik);

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, 'Full Name must be at least 3 characters long')
      .required('Full Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^\d{10}$/, 'Phone Number must be exactly 10 digits')
      .required('Phone Number is required'),
    dob: Yup.date()
      .required('Date of Birth is required')
      .max(new Date(Date.now() - 567648000000), 'You must be at least 18 years old'),
    gender: Yup.string().required('Gender is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[A-Z]/, 'Must contain at least one uppercase letter')
      .matches(/[a-z]/, 'Must contain at least one lowercase letter')
      .matches(/[0-9]/, 'Must contain at least one number')
      .matches(/[@#$%^&*(),.?":{}|<>]/, 'Must contain at least one special character')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    address: Yup.string().required('Address is required'),
    country: Yup.string().required('Country is required'),
    terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
    profilePicture: Yup.mixed()
      .test('fileSize', 'File size is too large', value => {
        return value && value.size <= 2000000;
      })
      .test('fileType', 'Unsupported File Format', value => {
        return value && ['image/jpeg', 'image/png'].includes(value.type);
      })
  });
  
  
  return (
    <div className='border border-3 border-dark  w-75 p-5 m-3 '>
         
            <h1 className='text-black text-center'>Registation Form</h1><br /><br />
        
         <form >
      <div className="row   ">
        <div className="col-6">
        <label htmlFor='name' class="fw-bolder text-dark">Full Name : </label> <input value={formik.values.name} onChange={formik.handleChange} className='w-100 p-2 rounded' id='name' type="text" placeholder='Enter your Name'  /> <br /><br />

        <label htmlFor='email' class="fw-bolder text-dark" >Email : </label> <input value={formik.values.email} onChange={formik.handleChange} className='w-100 p-2 rounded' type="email" placeholder='Enter your Email'  /><br /><br />

        <label htmlFor='phone' class="fw-bolder text-dark">Phone Number : </label> <input value={formik.values.phone} onChange={formik.handleChange} className='w-100 p-2 rounded' type="text"placeholder='Enter your Phone Number '  /><br /><br />

        <label htmlFor='dob' class="fw-bolder text-dark">Date of Birth : </label> <input value={formik.values.dob} onChange={formik.handleChange} className='w-100 p-2 rounded' type="date"   /><br /><br />

        <label htmlFor='gender' class="fw-bolder text-dark"> Gender : </label> <input value={formik.values.gender} onChange={formik.handleChange} type="radio" name="gender"/> <label for=""> Male </label>
                                  <input type="radio" name="gender"/> <label for=""> Female</label>
                                 <input type="radio" name="gender"/> <label for=""> other </label><br /><br />

                                 <label htmlFor='address' class="fw-bolder text-dark" >Address : </label> <textarea value={formik.values.address} onChange={formik.handleChange} className='w-100 p-2 rounded' name="" id="" placeholder='Enter your Address'></textarea>
    </div>
    <div className="col-6">
      <label htmlFor='password' class="fw-bolder text-dark">Password : </label> <input value={formik.values.password} onChange={formik.handleChange} className='w-100 p-2 rounded' type="password" placeholder='Enter your Password' /><br /><br />

<label htmlFor='cpassword' class="fw-bolder text-dark">Conform Password : </label> <input value={formik.values.cpassword} onChange={formik.handleChange} className='w-100 p-2 rounded' type="password" placeholder='Conform your Password ' /><br /><br />

<label htmlFor='country' class="fw-bolder text-dark">Country : </label> <input value={formik.values.country} onChange={formik.handleChange} className='w-100 p-2 rounded' type="country" placeholder='Enter your Country ' /><br /><br />

<label htmlFor='profilepic' class="fw-bolder text-dark" >Profile Picture : </label> <input value={formik.values.profilepic} onChange={formik.handleChange} className='form-control mb-3 w-75' type="file"  /><br /><br />
<div><h6 className='fw-bolder'> I agree to the terms and conditions:</h6><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus incidunt nemo in vero! <input type="checkbox" /></p>
</div>  <button className='btn btn-success '>Submit</button></div>


      </div>
     
    </form>
    
      
    </div>
  )
}

export default Registration