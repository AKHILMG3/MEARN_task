import React from 'react'
import {Col, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
        <Row className='m-5 p-5'>
            <Col>
            <img src="https://wallpapercave.com/wp/wp6488868.jpg" alt="" width={'100%'} />
           

            </Col>

            <Col className='m-5' style={{textAlign:"justify"}}>
            <h1>shopNshop</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates placeat magnam corrupti corporis quis. Est molestiae saepe hic consectetur, eos accusantium similique natus, corporis, ipsa placeat repudiandae at dolorum porro. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, aut? Magni velit, aut repudiandae harum cumque adipisci cum perferendis quam reiciendis iure quis voluptatibus rerum? Placeat aliquid assumenda ipsam ipsum? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam atque minima numquam praesentium veniam culpa ex, ab dolores sed officiis, impedit recusandae, natus velit debitis autem qui eligendi sit provident.</p>

            <Link to={'/products'}> <Button className='btn btn-primary '>Get Start</Button>
            </Link>
            
            </Col>
        </Row>
    </div>
  )
}

export default HomePage