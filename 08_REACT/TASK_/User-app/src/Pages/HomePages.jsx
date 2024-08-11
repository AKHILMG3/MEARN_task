import React from 'react'
import {Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HomePages() {
  return (
    <div>
        <Row className='m-5 p-5'>
            <Col><img src="https://www.minopcloud.com/AssetsNew/images/edtech/Index/advanced-ai-technology.png" alt="" width={'100%'} /></Col>

            <Col className='m-5' style={{textAlign:"justify"}}>
            <h1>User Data</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores ut ex consequatur hic nulla saepe non dolores minus ea expedita officiis aliquid libero quidem nostrum, accusantium amet et neque?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum quod ducimus, dolore cum odio laboriosam iusto totam corporis quae voluptas nesciunt numquam ipsum voluptatibus ex repellat asperiores autem suscipit voluptatum!</p><br />
            .<Link to={'/user'}><Button >Get start</Button></Link>
            </Col>
        </Row>
    </div>
  )
}

export default HomePages