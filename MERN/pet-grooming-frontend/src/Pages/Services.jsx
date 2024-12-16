import React from 'react';
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

const services = [
  {
    title: 'Spa Bath',
    description: 'Relax your pet with a soothing bath experience.',
    imgSrc: 'https://static.vecteezy.com/system/resources/previews/000/127/542/original/free-cartoon-dog-taking-a-bath-in-bathtub-illustration-vector.jpg',
    link: '/login'
  },
  {
    title: 'Grooming Services',
    description: 'Professional grooming for a clean and healthy pet.',
    imgSrc: 'https://thumbs.dreamstime.com/b/dog-grooming-composition-illustration-style-certificate-symbols-flat-vector-279502647.jpg',
    link: '/login'
  },
  {
    title: 'Veterinary Services',
    description: 'Complete veterinary care for your furry friends.',
    imgSrc: 'https://thumbs.dreamstime.com/b/mobile-177523513.jpg',
    link: '/login'
  },
  {
    title: 'Pet Training',
    description: 'Train your pet with our professional trainers.',
    imgSrc: 'https://cdn.pixabay.com/photo/2021/11/23/18/27/veterinary-6819364_640.png',
    link: '/login'
  },
  {
    title: 'Pet Sitting',
    description: 'Quality care for your pets while you are away.',
    imgSrc: 'https://www.lonetreevet.com/blog/wp-content/uploads/2016/05/TerraLinda_iStock_000069085485_Large-1.jpg',
    link: '/login'
  },
  {
    title: 'Nail Trimming',
    description: 'Keep your pet’s nails in check with our nail trimming services.',
    imgSrc: 'https://m.media-amazon.com/images/I/71S7qaNKYxL._AC_UF1000,1000_QL80_.jpg',
    link: '/login'
  },
  {
    title: 'Pet Grooming Supplies',
    description: 'The best supplies for grooming your pet at home.',
    imgSrc: 'https://content.jdmagicbox.com/comp/def_content/pet-trainers/3-dog-trainers-3-mnjpn-pet-trainers-3-box2v.jpg',
    link: '/login'
  },
  {
    title: 'Cat Grooming',
    description: 'Specialized grooming services for your feline friends.',
    imgSrc: 'https://creature-companions.in/wp-content/uploads/2022/03/guide-to-grooming-a-cat-for-summer.jpg',
    link: '/login'
  }
];

function Services() {
  return (
    <div>
      <br /><br />
      <h1 className='fw-bold text-center'>Home Service</h1>
      <div className="row justify-content-evenly p-2 m-5">
        {services.map((service, index) => (
          <div className="col-3" key={index}>
            <MDBCard>
              <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={service.imgSrc} fluid alt={service.title} />
                <a>
                  <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
              </MDBRipple>
              <MDBCardBody>
                <MDBCardTitle>{service.title}</MDBCardTitle>
                <MDBCardText>{service.description}</MDBCardText>
                <Link to={service.link}>
                  <MDBBtn>Book Now</MDBBtn>
                </Link>
              </MDBCardBody>
            </MDBCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
