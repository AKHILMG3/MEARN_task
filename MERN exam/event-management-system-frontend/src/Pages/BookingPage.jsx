import React from 'react'

function BookingPage() {
  return (
    <div className='book'>
        <br /><br />
        <div className='form text-dark fw-bold'><br />
            <h3 className='text-center fw-bold text-dark fs-1 '>Booking Event</h3>
            <label htmlFor="">Name :</label><br />
            <input className='form-control mb-3 w-100' type="text" placeholder='Enter Your Name' /><br />

            <label htmlFor="">Email :</label><br />
            <input className='form-control mb-3 w-100' type="text" placeholder='Enter Your Email' /><br />

            <label htmlFor="">Phone No :</label><br />
            <input className='form-control mb-3 w-100' type="text" placeholder='Enter Your Phone No' /><br />

            <label htmlFor="">Date :</label><br />
            <input className='form-control mb-3 w-100' type="date" placeholder='' /><br />

            <label htmlfor="">Event Type :</label><br />
          
          <select name="" id="eventype" className="form-control mb-3 w-100">

            <option value=""> Select Events : </option>
            <option className="fw-bold"> Birthday Party</option>
            <option  className="fw-bold"> Photography Section </option>
            <option  className="fw-bold"> Wedding</option>
            <option className="fw-bold">Conferences</option>
            <option className="fw-bold">Meetings</option>
            <option className="fw-bold">Workshops</option>
            <option className="fw-bold">Seminar</option>
            <option className="fw-bold">Virtual Events</option>
        </select><br /><br />

            <label htmlFor="">Description :</label><br />
            <textarea className='form-control mb-3 w-100 p-5' type="text" placeholder='' /><br />

            

            <center>
            <button className='btn btn-secondary my-2 my-sm-0'>Register</button>
            </center>

            
            
        </div>
    <br /><br />
    </div>
  )
}

export default BookingPage