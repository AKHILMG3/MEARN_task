import React from 'react'
import VideoCard from '../Components/VideoCard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ViewVideo() {
  return (
    <div>
      <Row>
    <Col>
    <VideoCard/>
    </Col>

    <Col>
    <VideoCard/>
    </Col>

    <Col>
    <VideoCard/>
    </Col>

    <Col>
    <VideoCard/>
    </Col>
  </Row>
  </div>
  )
}

export default ViewVideo