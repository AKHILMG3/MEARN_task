import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    contactNo: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/contact', formData);

      // Show success toast notification
      toast.success(response.data.message || 'Feedback sent successfully!',{
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

      // Clear form after submission
      setFormData({
        name: '',
        contactNo: '',
        message: '',
      });
    } catch (error) {
      // Show error toast notification
      toast.error('Failed to send feedback. Please try again.',{
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
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        margin: '0',
        backgroundColor: '#f8f9fa', 
        backgroundImage:'url("https://dsmartsys.com/wp-content/uploads/2019/06/contact-us-banner.png")',
        backgroundRepeat: 'no-repeat',
        width:'100%'

      }}
    >
      <div className="contact-page border border-3 border-dark w-50 p-5 m-5 text-dark fw-bold">
        <h2 className='text-white fw-bold'>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group text-white fw-bold">
            <label htmlFor="name" >Name:</label>
            <input
              className="btn-outline-dark mb-3 w-100"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              aria-label="Full Name"
            />
          </div>
          <div className="form-group text-white">
            <label htmlFor="contactNo ">Contact Number:</label>
            <input
              className="btn-outline-dark mb-3 w-100"
              type="tel"
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              placeholder="Enter your contact number"
              aria-label="Contact Number"
              onInvalid={(e) => e.target.setCustomValidity('Please enter a 10-digit phone number.')}
              onInput={(e) => e.target.setCustomValidity('')}
            />
          </div>
          <div className="form-group text-white">
            <label htmlFor="message">Feedback Message:</label>
            <textarea
              className="btn-outline-dark mb-3 w-100"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Enter your feedback"
              rows="4"
              aria-label="Feedback Message"
            />
          </div>
          <button className="btn btn-outline-success" type="submit">
            Send
          </button>
        </form>
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
  );
}

export default ContactUs;