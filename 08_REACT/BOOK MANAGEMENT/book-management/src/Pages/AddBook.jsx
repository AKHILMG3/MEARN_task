import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import { addBook } from '../Redux/actions';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';






const AddBook = () => {
  const [ title,setTitle] = useState('');
  const [author,setAuthor] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(addBook({id:nanoid(),title,author}));
    navigate('/books')
  }
  
  

  return (
    <div><br /> <br />
      <div className="container text-center w-25 "><br /><br />
       
          <h3 className='fw-bold'>Add Book</h3><br />
      
          <input id='bookTitle' type="text" className='form-control w-100' value={title} onChange={(e) => setTitle(e.target.value)} placeholder=' Enter Book Title' /><br /> <br />
          <input id='authorName' type="text" className='form-control w-100' value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Enter Author Name' /><br /><br />         
        
        <Link to={'/viewBook'}> <MDBBtn onSubmit={handleSubmit}>Add Book</MDBBtn> </Link>
        
        <br /> <br />
      </div><br /> <br />
    </div>
  )
}

export default AddBook