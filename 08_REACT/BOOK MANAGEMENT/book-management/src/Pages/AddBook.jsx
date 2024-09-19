import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { addBook } from '../Redux/actions';



function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
 
  const handleAdd = (e) => {
    e.preventDefault();
    if (title && author) {
      dispatch(addBook({ id: Date.now(), title, author }));
    }
  
  }


  return (
    <div><br /> <br />
      <div className="container text-center w-25 "><br /><br />
       
          <h3 className='fw-bold'>Add Book</h3><br />
      
          <input type="text" className='form-control w-75' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Book Title' /><br /> <br />
          <input type="text" className='form-control w-75' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Author' /><br /><br />         
        
        <Link to={'/viewBook'}> <MDBBtn onClick={handleAdd}>Add Book</MDBBtn> </Link>
        
        <br /> <br />
      </div><br /> <br />
    </div>
  )
}

export default AddBook