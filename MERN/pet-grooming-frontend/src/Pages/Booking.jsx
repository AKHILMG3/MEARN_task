import React from 'react'

function Booking() {
  return (
    <div>
      <div className="row">

      <h1>Booking Page</h1>
        <div className="col-6">
          <label htmlFor="">Name : </label><br />
          <input type="text" className='w-50 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800' placeholder='Enter Your Name' /><br /><br />

          <label htmlFor="">Email : </label><br />
          <input type="email" className='w-50 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800' placeholder='Enter Your Email' /><br /><br />

          <label htmlFor="">Phone No : </label><br />
          <input type="email" className='w-50 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800' placeholder='Enter Your Phone No' /><br /><br />

          <label htmlFor=""> : </label><br />
          <input type="email" className='w-50 px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800' placeholder='Enter Your Phone No' /><br /><br />
          

        </div>
        <div className="col-6">
          
        </div>
      </div>
    </div>
  )
}

export default Booking