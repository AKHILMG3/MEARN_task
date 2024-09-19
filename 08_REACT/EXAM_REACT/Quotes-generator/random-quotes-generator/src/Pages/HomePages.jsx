import React from 'react'
import {Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function HomePages() {
  return (
    <div>
        <Row>
            <Col  className='m-5 p-5'> 
            <img src="https://randomgenerate.io/images-large/random-quote-generator.jpg" width={'100%'} alt="" />
            </Col>

            <Col className='m-5' style={{textAlign:"justify"}}>
            <h1>Quotes Generate</h1><br />

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione cupiditate blanditiis assumenda! Id libero quidem similique! Fugiat commodi, eligendi illo vel officia a placeat quisquam voluptatem quas eaque nobis qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum voluptatem, expedita repudiandae tenetur fugit consequuntur praesentium itaque animi, mollitia earum, iusto natus sequi ut quis cupiditate ad eum necessitatibus!</p><br />
            <Link to={'/quotes'}><Button>Get Start</Button></Link>
            </Col>
        </Row>
    </div>
  )
}

export default HomePages