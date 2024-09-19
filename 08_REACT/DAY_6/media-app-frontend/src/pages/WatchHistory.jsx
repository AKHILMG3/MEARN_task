import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { IoArrowBack } from "react-icons/io5";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { MdAutoDelete } from "react-icons/md";
import {deleteHistoryAPI, getHistoryAPI} from '../Services/ALLAPIs'

function WatchHistory() {
  const [history,setHistory] = useState([])
  const [deleteStatus,setDeleteStatus] = useState([""])

  const getWatchHistory = async() => {
    const response = await getHistoryAPI()
    console.log(response.data);
    setHistory(response.data)
   
  }

  const handleDelete = async(id)=>{
    const response = await deleteHistoryAPI(id);
    console.log(response);
    setDeleteStatus(response)
    
  }
console.log(history);

  useEffect(()=>{
    getWatchHistory()
  },[deleteStatus])

  return (
    <div>
      <Row className='m-5 p-5'>
        <Col>
        <h3>Watch History</h3>
        </Col>

        <Col>
        <Link to={'/home'}> <h5 style={{float:'right'}}> <IoArrowBack /> Back to Home </h5></Link>
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
      {
        history ?  history.map((item,index)=>(
          <tr className='border border-white'>
        <td className='border border-white'>{index+1}</td>
        <td className='border border-white'>{item.caption}</td>
        <td className='border border-white'>{item.url}</td>
        <td className='border border-white'>{item.timestamp}</td>
        <td className='btn btn-danger border border-white m-1 p-1 text-light fs-4'><button onClick={()=>handleDelete(item.id)}>< MdAutoDelete /></button>
        </td>   
      </tr>
        ))
      : <p className='text-danger'>No data found</p>

      }
       
      </tbody>
    </Table>
    
      </Row>
    </div>
  )
}

export default WatchHistory