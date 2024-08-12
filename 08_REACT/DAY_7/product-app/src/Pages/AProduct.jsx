import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Col, Row, } from 'react-bootstrap'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { AiFillStar } from "react-icons/ai";


function AProduct() {
    const pathParams = useParams() // pat
    console.log(pathParams);

const { id } = useParams()
console.log(id);

const baseUrl = 'https://dummyjson.com/products'

    //4 state creation for holding products details
    const [products,setProducts]=useState({})

    //2 Define API fetching function

    const Aproductfetch = async ()=>{
        const response =  await fetch(`https://dummyjson.com/products/${id}`)
        .then(response=>response.json())
        .then(data=>setProducts(data))
        console.log(products);
        
    }
    //3 function call

    useEffect(()=>{
        Aproductfetch()
    },[])


    
  return (
    <div>
        <Row className='d-flex justify-content-space-between text-center'>
            <Col>
            <img src={products.thumbnail} alt="" /><br /><br />

            <h3 className='px-5 text-center'>${products.price}</h3>
            </Col>
            <Col className='p-5 m-5'>
            <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem  tag='button' action noBorders type='button' className='px-3'>
      {products.title}
      </MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>{products.description}</MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>{products.category}</MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>{products.brand}</MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'>{products.discountPercentage}</MDBListGroupItem>
      <MDBListGroupItem tag='button' action noBorders type='button' className='px-3'><AiFillStar /> {products.rating} </MDBListGroupItem>

    </MDBListGroup></Col>
        </Row>
    </div>
  )
}

export default AProduct