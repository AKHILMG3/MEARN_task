import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from '../Redux/bookSlice';



function ViewBook() {
  const books = useSelector((state)=>
    state.bookSlice.books);
    const dispatch = useDispatch();
  
    const handleDelete = (id)=>{
      dispatch(deleteBook(id))
    }


  return (
    <div><br />
     <div className='p-5 m-5'>
     <Table striped>
      <thead>
        <tr>
          <th>SL NO</th>
          <th>Book Title</th>
          <th>Author Name</th>
          <th>Edit Book</th>
          <th>Delete Book</th>
        </tr>
      </thead>
      <tbody>
       {books.map((book,index)=>(
        <tr key={book.id}>
        <td>{index+1}</td>
        <td>{book.title}</td>
        <td>{book.author}</td>
        <td> <Link to={`/editBook/${book.id}`}> <FaEdit /></Link></td>
        <Link to={`/deleteBook/${book.id}`}><td> <button onClick={()=> handleDelete(book.id)}><MdDelete /></button></td>
        </Link>
      </tr>

       )) }
       
      </tbody>
    </Table>
     </div>
    </div>
  )
}

export default ViewBook