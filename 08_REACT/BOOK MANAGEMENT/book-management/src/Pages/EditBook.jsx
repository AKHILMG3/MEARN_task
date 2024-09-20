import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editBook } from '../Redux/bookSlice';


const EditBook =() => {
  const {id} = useParams();
  const books = useSelector((state)=>
  state.bookSlice.books);
  const bookToedit = books.find((book)=>
  book.id===id)

  const [title,setTitle] = 
  useState(bookToedit.title);
  const [author,setAuthor] = 
  useState(bookToedit.author);
  const dispatch = useDispatch('');
  const navigate = useNavigate('');

  const handleEdit = (e) =>{
    e.preventDefault();
    dispatch(editBook({id,title,author}));
    navigate('/books')
  };

  return (
    <div><br /><br />
      <div className="container text-center w-25 "><br /><br />
       
       <h3 className='fw-bold'>Edit Book</h3><br />
   
       <input type="text" className='form-control w-75' value={title} onChange={(e) => setTitle(e.target.value)}   placeholder='Book Title' /><br /> <br />
       <input type="text" className='form-control w-75'  value={author} onChange={(e) => setAuthor(e.target.value)} placeholder='Author' /><br /><br />         
     
        <MDBBtn rounded onSubmit={handleEdit}>Edit Book</MDBBtn> 
     
     <br /> <br />
   </div><br /><br />
    </div>
  )
}

export default EditBook