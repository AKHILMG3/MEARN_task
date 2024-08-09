import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
function Home() {
  return (
    <div>
      <Row className='m-5 p-5'>
        <Col>
        <img src="" alt="" />
        </Col>

        <Col>
        <h1>ShopNShop</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia autem, cupiditate quis ea placeat quod aperiam nam eaque porro maiores! Earum nesciunt, atque eos possimus eveniet dolor. Esse, sint culpa?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus excepturi quas vel assumenda eligendi odit dolores nemo atque modi voluptatem sint veniam totam, asperiores ratione omnis ad cumque deserunt accusantium.</p>
        </Col>
        <Link to={'/products'}/>

        {/* <Button className="btn btn-primary">Get Start</Button> */}
      </Row>

    </div>
  )
}

export default Home