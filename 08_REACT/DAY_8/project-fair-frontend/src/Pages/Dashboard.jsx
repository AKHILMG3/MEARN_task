import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import { MDBBtn } from 'mdb-react-ui-kit';
import { FaEdit } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


function Dashboard() {
  return (
    <div className='p-3 m-3'>

<h4>Welcome to ABC</h4>
      <Row className='p-3 '>
        <Col>
        <div className='d-flex justify-content-between '>
          <h5>My Project</h5>
          <MDBBtn outline className='mx-2' color='dark'>
        Dark
      </MDBBtn></div>

      <div className='d-flex justify-content-between p-3 m-2 bg-light'>
      <h6>Media app</h6>
        <div className='d-flex'> <FaEdit />  <FaGithubSquare />  <MdDelete /> </div> </div>
        </Col>

        <Col></Col>
      </Row>
      
    </div>
  )
}

export default Dashboard