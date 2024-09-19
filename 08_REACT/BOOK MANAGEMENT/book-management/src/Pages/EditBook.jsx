import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';


function EditBook() {
  return (
    <div><br /><br />
      <div className="container text-center w-25 "><br /><br />
       
       <h3 className='fw-bold'>Edit Book</h3><br />
   
       <input type="text" className='form-control w-75'  placeholder='Book Title' /><br /> <br />
       <input type="text" className='form-control w-75'  placeholder='Author' /><br /><br />         
     
        <MDBBtn rounded>Edit Book</MDBBtn> 
     
     <br /> <br />
   </div><br /><br />
    </div>
  )
}

export default EditBook