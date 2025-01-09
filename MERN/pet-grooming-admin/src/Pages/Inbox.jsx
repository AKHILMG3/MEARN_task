import React from 'react'
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTypography
} from 'mdb-react-ui-kit';

function Inbox() {
  return (
    <div className=''>
          <MDBCard>
      <MDBCardHeader className='fw-bold fs-2'> Messages</MDBCardHeader>
      <MDBCardBody>
        <MDBTypography className='mb-5' >
          <p className='fw-bold fs-5'>Name :</p>
          <p className='fw-bold fs-5'> Contact :</p>
          <p className='fw-bold fs-5'>Feedback : </p>
        </MDBTypography>
      </MDBCardBody>
    </MDBCard>
    </div>
  )
}

export default Inbox