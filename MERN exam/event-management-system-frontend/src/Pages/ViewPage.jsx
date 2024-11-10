import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';
  import { Link } from 'react-router-dom';

const events = [
    {
      title: 'Birthday Party',
      description: '',
      imgSrc: 'https://i.pinimg.com/originals/d1/38/54/d138540cf5b6bbab105c69f872cd2551.png',
      link: '/booking'
    },
    {
      title: 'Photography',
      description: '',
      imgSrc: 'https://img.freepik.com/premium-vector/world-photography-day-flat-design-vector-illustration_759447-432.jpg',
      link: '/booking'
    },
    {
      title: 'Wedding',
      description: '',
      imgSrc: 'https://th.bing.com/th/id/OIP.wjZnUlQ4gpgTWqRTG8rZBQHaE8?rs=1&pid=ImgDetMain',
      link: '/booking'
    },
    {
      title: 'Conferences',
      description: '',
      imgSrc: 'https://img.freepik.com/premium-vector/business-meeting-people-conference-flat-vector-illustration_213110-43.jpg?w=2000',
      link: '/booking'
    },
    {
      title: 'Meetings',
      description: '',
      imgSrc: 'https://th.bing.com/th/id/OIP.vnk9XxElqJfJt1OIeHS2bQAAAA?rs=1&pid=ImgDetMain',
      link: '/booking'
    },
    {
      title: 'Workshops',
      description: '',
      imgSrc: 'https://static.vecteezy.com/system/resources/previews/006/801/228/non_2x/workshop-illustration-exclusive-design-inspiration-vector.jpg',
      link: '/booking'
    },
    {
      title: 'Seminar',
      description: '',
      imgSrc: 'https://static.vecteezy.com/system/resources/previews/002/457/897/original/business-seminar-speaker-doing-presentation-and-professional-training-about-marketing-sales-and-e-commerce-flat-illustration-of-presentation-conference-and-motivation-for-business-audience-free-vector.jpg',
      link: '/booking'
    },
    {
      title: 'Virtual Events',
      description: '',
      imgSrc: 'https://veekast.com/wp-content/uploads/2021/02/2020.10_mktg_BlogHeader_VirtualEvents_AP.png',
      link: '/booking'
    }
  ];

function ViewPage() {
  return (
    <div className='view'>
        <br /><br />
      <h1 className='fw-bold text-center'>Our Events</h1>
      <div className="row justify-content-evenly m-5">
        {events.map((events, index) => (
          <div className="col-3 p-5" key={index}>
            <MDBCard>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={events.imgSrc} fluid alt={events.title} />
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{events.title}</MDBCardTitle>
                <MDBCardText>{events.description}</MDBCardText>
                <Link to={events.link}>
                  <MDBBtn>Book Now</MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewPage