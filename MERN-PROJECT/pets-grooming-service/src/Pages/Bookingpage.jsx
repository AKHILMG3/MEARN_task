import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(3, 'Full Name must be at least 3 characters long')
    .required('Full Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .matches(/^\d{10}$/, 'Phone Number must be exactly 10 digits')
    .required('Phone Number is required'),
  serviceDate: Yup.date()
    .required('Service Date is required')
    .test(
      'is-at-least-3-months',
      'Service date must be at least 3 months from today',
      (value) => {
        const today = new Date();
        const selectedDate = new Date(value);
        const diffInMonths = (selectedDate.getFullYear() - today.getFullYear()) * 12 + (selectedDate.getMonth() - today.getMonth());
        return diffInMonths >= 3;
      }
    ),
  petType: Yup.string()
    .oneOf(['cat', 'dog'], 'Please select a pet type')
    .required('Pet Type is required'),
  location: Yup.string()
    .required('Location is required'),
  breed: Yup.string()
    .required('Breed is required'),
  terms: Yup.boolean()
    .oneOf([true], 'You must accept the terms and conditions'),
});

function BookingPage() {
  const initialValues = {
    fullName: '',
    email: '',
    phoneNumber: '',
    serviceDate: '',
    petType: '',
    location: '',
    breed: '',
    terms: false,
  };

  const handleSubmit = (values) => {
    console.log('Form Submitted:', values);
    alert('Booking submitted successfully!');
  };

  return (
    <div className='booking ' >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="border border-3 border-dark shadow text-light m-2 rounded p-5 w-100">
          <div className='text-dark'>
            <label>Full Name</label><br />
            <Field type="text" className="btn-outline-dark mb-3 w-75" name="fullName" placeholder="Enter your name" />
            <ErrorMessage name="fullName" component="div" className="text-danger" />
          </div>

          <div className='text-dark'> 
            <label>Email</label><br />
            <Field type="email" className="btn-outline-dark mb-3 w-75" name="email" placeholder="Enter your Email" />
            <ErrorMessage name="email" component="div" className="text-danger" />
          </div>

          <div className='text-dark'>
            <label>Phone Number</label><br />
            <Field type="text" className="btn-outline-dark mb-3 w-75" name="phoneNumber" placeholder="Enter your phone no" />
            <ErrorMessage name="phoneNumber" component="div" className="text-danger" />
          </div>

          <div className='text-dark'>
            <label>Service Date</label><br />
            <Field type="date" className="btn-outline-dark mb-3 w-75" name="serviceDate" />
            <ErrorMessage name="serviceDate" component="div" className="text-danger" />
          </div>

          <div className='text-dark'> 
            <label>Pet Type</label>
            <div>
              <Field type="radio" name="petType" value="cat" />
              <label>Cat</label>
              <Field type="radio" name="petType" value="dog" />
              <label>Dog</label>
            </div>
            <ErrorMessage name="petType" component="div" className="text-danger" />
          </div><br />

          <div>
            <label>Grooming Centre Location</label><br />
            <Field as="select" className="text-dark btn-outline-dark mb-3 w-75" name="location">
              <option value="" label="Select a location" />
              <option value="centre1" label="Centre 1" />
              <option value="centre2" label="Centre 2" />
              <option value="centre3" label="Centre 3" />
            </Field>
            <ErrorMessage name="location" component="div" className="text-danger" />
          </div>

          <div>
            <label>Breed</label><br />
            <Field as="select" className=" text-dark btn-outline-dark mb-3 w-75" name="breed">
              <option value="" label="Select a breed" />
              <option value="breed1" label="Breed 1" />
              <option value="breed2" label="Breed 2" />
              <option value="breed3" label="Breed 3" />
            </Field>
            <ErrorMessage name="breed" component="div" className="text-danger" />
          </div>

          <div>
            <label>
              <Field type="checkbox" name="terms" />
              I agree to the terms and conditions
            </label>
            <ErrorMessage name="terms" component="div" className="text-danger" />
          </div>

          <button className='btn btn-outline-success' type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default BookingPage;
