import React from 'react'

function Project() {
  return (
    <div>
      <div className='text-center container m-5 p-5 w-100'>
        <h3 className='mb-5'>All Project</h3>

        <div className='w-25 d-flex justify-content-center'>
          <input type="text" className='form-control mx-auto' placeholder='Search By Technology' />
        </div>
      </div>
    </div>
  )
}

export default Project