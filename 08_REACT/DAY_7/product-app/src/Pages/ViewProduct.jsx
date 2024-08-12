import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
 

function ViewProduct({data}) {
    console.log(data);
    
  return (
    <div>
        <div className="row">
            {
                data.map(item=>(
                    <div className="col m-3 " style={{textAlign:"justify"}}>
                         <MDBCard>
      <MDBCardImage src={item.thumbnail} position='top' alt='...' />
      <MDBCardBody>
        <MDBCardTitle>{item.title}</MDBCardTitle>
        <MDBCardText>
         Price : $ {item.price}
        </MDBCardText>
        <Link to={`/products/view/${item.id}`}>
        <Button>View Products</Button>
        </Link>
      </MDBCardBody>
    </MDBCard>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default ViewProduct