import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { MdAutoDelete } from "react-icons/md";

function WatchHistory() {
  return (
    <div>
      <Row className='m-5 p-5'>
        <Col>
        <h3>Watch History</h3>
        </Col>

        <Col>
        <Link> <h5 style={{float:'right'}}> <IoArrowBack /> Back to Home </h5></Link>
       </Col>
      </Row>

      <Row className='p-5'>
      <Table className='border border-white'>
      <thead>
        <tr className='border border-white'>
          <th className='border border-white'>SLno</th>
          <th className='border border-white'>Caption</th>
          <th className='border border-white'>URL</th>
          <th className='border border-white'>Timestamp</th>
          <th className='border border-white'>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className='border border-white'>
          <td className='border border-white'>1</td>
          <td className='border border-white'>Mark</td>
          <td className='border border-white'>Otto</td>
          <td className='border border-white'>Otto</td>
          <td className='btn btn-danger border border-white m-3 text-light fs-4'><MdAutoDelete /></td>
        </tr>
       
      </tbody>
    </Table>
      </Row>
    </div>
  )
}

export default WatchHistory