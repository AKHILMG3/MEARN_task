import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardSubTitle,
    MDBCardText,
    MDBCardLink
  } from 'mdb-react-ui-kit';
  

function ViewUser({data}) {
    console.log(data);
    
  return (
    <div>
        <div className="row">
            {
                data.map(item=>(
                    <div className="col m-3">
                        <MDBCard>
      <MDBCardBody>
        <MDBCardTitle>{item.id}</MDBCardTitle>
        <MDBCardSubTitle>Card subtitle</MDBCardSubTitle>
        <MDBCardText>
          {item.firstName}
        </MDBCardText>
        <MDBCardLink href='#'>Card link</MDBCardLink>
        <MDBCardLink href='#'>Another link</MDBCardLink>
      </MDBCardBody>
    </MDBCard>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ViewUser