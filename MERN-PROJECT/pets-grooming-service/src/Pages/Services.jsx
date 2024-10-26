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


function Services() {
  return (
    <div><br /><br />
      <div><h1 className='fw-bold text-center'>Home Service</h1>

      <div className="row justify-content-evenly  p-2 m-5">
        <div className="col-3 "> <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://m.media-amazon.com/images/I/61bqhdT7bzL._AC_UF1000,1000_QL80_.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <Link to={"/login"}> <MDBBtn href='#'>Button</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard><img src="" alt="" /></div>  

        <div className="col-3 "> <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://www.jiomart.com/images/product/original/rvuxdhvx49/valora-v-832-electric-pet-hair-clipper-trimmer-for-dogs-and-cats-pet-grooming-kit-pet-hair-trimmer-4-length-combs-1-cutting-comb-red-product-images-orvuxdhvx49-p603873509-2-202308141401.jpg?im=Resize=(420,420)' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <Link to={"/login"}> <MDBBtn href='#'>Button</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard></div>

        <div className="col-3  "> <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://cdn.doggroomingcalgary.ca/wp-content/uploads/2016/01/addons.png?strip=all&lossy=1&quality=92&ssl=1' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <Link to={"/login"}> <MDBBtn href='#'>Button</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard></div>

        <div className="col-3"> <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://cdn.pixabay.com/photo/2021/11/23/18/27/veterinary-6819364_640.png' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <Link to={"/login"}> <MDBBtn href='#'>Button</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard></div>

        <div className="row">

        <div className="col-3"> <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://www.lonetreevet.com/blog/wp-content/uploads/2016/05/TerraLinda_iStock_000069085485_Large-1.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <Link to={"/login"}> <MDBBtn href='#'>Button</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard></div>

        <div className="col-3"> <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://m.media-amazon.com/images/I/71S7qaNKYxL._AC_UF1000,1000_QL80_.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <Link to={"/login"}> <MDBBtn href='#'>Button</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard></div>
        
        <div className="col-3  "> <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://content.jdmagicbox.com/comp/def_content/pet-trainers/3-dog-trainers-3-mnjpn-pet-trainers-3-box2v.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <Link to={"/login"}> <MDBBtn href='#'>Button</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard></div>

        <div className="col-3   "> <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src='https://creature-companions.in/wp-content/uploads/2022/03/guide-to-grooming-a-cat-for-summer.jpg' fluid alt='...' />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <Link to={"/login"}> <MDBBtn href='#'>Button</MDBBtn></Link>
      </MDBCardBody>
    </MDBCard></div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Services