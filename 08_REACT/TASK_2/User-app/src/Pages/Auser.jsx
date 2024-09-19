// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import {Col, Row, } from 'react-bootstrap'
// import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
// import { AiFillStar } from "react-icons/ai";



// function AUser() { const pathParams = useParams() // pat
//     console.log(pathParams);

// const { id } = useParams()
// console.log(id); 

// const baseUrl = 'https://dummyjson.com/users'

//     const [user,setUser]=useState({})

//     const Auserfetch = async ()=>{
//         const response =  await fetch(`https://dummyjson.com/users/${id}`)
//         .then(response=>response.json())
//         .then(data=>setUser(data.users))
//     }
//         console.log(user);

//     useEffect(()=>{
//         Auserfetch()
//     },[])
//   return (
//     <div>
//          <Row className='d-flex justify-content-space-between text-center'>
//             <Col>
            
//             <h3 className='px-5 text-center'>${item.id}</h3>
//             </Col>
//             <Col className='p-5 m-5'>
//             <MDBListGroup style={{ minWidth: '22rem' }} light>
//       <MDBListGroupItem  tag='button' action noBorders type='button' className='px-3'>{user.id}</MDBListGroupItem>
//       <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>{user.firstName}</MDBListGroupItem>
//       <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>{user.lastName}</MDBListGroupItem>
//       <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>{products.brand}</MDBListGroupItem>
//       <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>{products.discountPercentage}</MDBListGroupItem>
//       <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'><AiFillStar /> {products.rating} </MDBListGroupItem>

//     </MDBListGroup></Col>
//         </Row>
//     </div>
//   )
// }

// export default AUser