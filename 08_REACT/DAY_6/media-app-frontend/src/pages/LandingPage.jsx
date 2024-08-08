import React from 'react'
import Discoimage from '../assets/dj-mix.gif'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <div>
      <section>
        <div className="row">
          <div className="col-6 p-5">
            <h1>Welcome to media</h1>
            <h1 className='text-warning'> Player</h1><br />
            <p className='text-light' style={{textAlign:'justify'}}>Software that "plays" audio, video or animation files in the computer. In the Windows world, Windows Media Player is the default player from Microsoft, but iTunes, RealPlayer and other software are also widely used. The media player in early Windows (3.x) versions was called simply "Media Player." iTunes and QuickTime Player are the default products for the Mac.Hardware that plays audio and video content. When referring to equipment, the term media player is very generic and may refer to a variety of devices. See portable media player, media drive and digital music player.</p><br />

            <div className='text-center'>
              <Link to={'/Home'}><button type="button" class="btn btn-warning text-dark">Get Start</button></Link>

               </div>
               
          </div>
          <div className="p-5 col-6">
          <img src={Discoimage} alt="" width={'100%'}  />

          </div>
        </div>
      </section>
      <  hr />
      <section>
        <h1 className='text-center mt-5 text-warning'>Features</h1>
        <div className="row p-5">
          <div className="col-4"> <Card style={{ width: '350px', marginLeft:'50px', backgroundColor:'black' }}>
      <Card.Img variant="top" src="https://media.giphy.com/media/9LIfhJGb3JeXm/giphy.gif" width={'200px'} height={'270px'} />
      <Card.Body>
        <Card.Title>Software-Based Media Players:</Card.Title>
        <Card.Text>
        These are versatile and run on your computer or mobile device.
        </Card.Text>
      </Card.Body>
    </Card></div>
          <div className="col-4"> <Card style={{ width: '350px', marginLeft:'50px' , backgroundColor:'black' }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/03/07/15/38/music-663148_960_720.png"  width={'200px'} height={'300px'} />
      <Card.Body>
        <Card.Title>Hardware-Based Media Players:</Card.Title>
        <Card.Text>
        standalone devices that connect to your TV or home theater system.
        </Card.Text>
      </Card.Body>
    </Card></div>
          <div className="col-4"> <Card style={{ width:'350px', marginLeft:'50px', backgroundColor:'black'  }}>
      <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2023/07/12/19/01/ai-generated-8123097_1280.png"   width={'200px'} height={'250px'} />
      <Card.Body>
        <Card.Title>Streaming Platforms and Smart TVs:</Card.Title>
        <Card.Text >
        With the rise of streaming services, platforms like Netflix and smart TVs have become popular for media consumption.
        </Card.Text>
      </Card.Body>
    </Card></div>
        </div>
      </section>

      <Row className='border border-3 rounded m-5 p-5'>
        <Col>
        <h1 className='m-5 text-warning'>Simple fast and powerfull</h1>
        <p style={{textAlign:'justify'}}> <strong>Cross-Platform Compatibility</strong>: One of the most popular media players is VLC media player. It’s free, open-source, and cross-platform. Here are some key features Stay updated with the latest headlines on movies, music, TV, and celebrities. Visit their website for news and videos2. VLC runs on Windows, Mac OS X, Linux, iOS, Android, and more</p>
        <p style={{textAlign:'justify'}}> <strong>Versatile Format Support</strong>: It plays almost any multimedia file, including DVDs, audio CDs, and streaming protocols. VLC handles various codecs like MPEG-2, MPEG-4, H.264, MKV, WebM, and WMV without requiring additional packs.</p>
        <p style={{textAlign:'justify'}}> <strong>Customizable:</strong>:  You can add skins and install extensions to tailor VLC to your preferences.No spyware, ads, or user tracking.You can download VLC for your preferred platform from the official website. Enjoy seamless media playback! 😊</p>
        </Col>

        <Col className='p-5 my-5'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/rIJ16UeJYMA?si=af0pyUsD2H15GT-u" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Col>
      </Row>

  
    </div>
  )
}
