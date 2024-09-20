import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';



function DeleteBook (){
 
  return (
    <div>
       <div><br /><br />
      <div className="container text-center w-25 "><br /><br />
       
       <h3 className='fw-bold'>Delete Book</h3><br />
   
       <input type="text" className='form-control w-75'  placeholder='Enter Book Title' /><br /> <br />
       <input type="text" className='form-control w-75' placeholder='Enter Author Name' /><br /><br />         
     
        <MDBBtn rounded>Delete Book</MDBBtn> 
     
     <br /> <br />
   </div><br /><br />
    </div>
    </div>
  )
}

export default DeleteBook