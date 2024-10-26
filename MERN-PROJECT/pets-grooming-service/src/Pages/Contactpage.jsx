import React, { useState } from 'react';

function ContactPage() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Clear form after submission
    setFormData({
      name: '',
      contactNo: '',
      message: '',
    });
    alert('Your feedback has been sent!');
  };

  return (

  
    <div className="contact-page border border-3 border-dark">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input className="btn-outline-dark mb-3 w-100" type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contactNo">Contact Number:</label>
          <input className="btn-outline-dark mb-3 w-75" type="tel" id="contactNo" name="contactNo" value={formData.contactNo} onChange={handleChange} required pattern="[0-9]{10}" placeholder="Enter your contact number"/>
        </div>

        <div className="form-group">
          <label htmlFor="message">Feedback Message:</label>
          <textarea className="btn-outline-dark mb-3 w-75" id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Enter your feedback" rows="4"/>
        </div>

        <button className='btn btn-outline-success' type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
