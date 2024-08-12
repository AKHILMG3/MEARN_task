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

            <p>A user is a person who operates or has the right to enjoy something. Here are some examples of how the word "user" is used in sentences:
            Netflix has considered allowing only one user to login at a time to prevent sharing of subscriptions.
            The local food pantry surveyed its users and found that 39 lived in their cars and worked in Sedona.
            Unauthorized users are not allowed on the computers.
            A user experience (UX) is defined by how well someone can navigate a website and find what they need.
            A person who started out as a user is now a drug dealer as well</p><br />
            .<Link to={'/user'}><Button >Get start</Button></Link>
            </Col>
        </Row>
    </div>
  )
}

export default HomePages