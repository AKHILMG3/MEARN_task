import React from 'react'
import { Link } from 'react-router-dom'


function ViewBook() {
  return (
    <div>
      <div>
        <h2>Book List</h2>

        <ul>
          <li>
          <button >Delete</button>
          <Link to={'/editBook'} >Edit</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ViewBook