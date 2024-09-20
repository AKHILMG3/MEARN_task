import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className='home' style={{backgroundImage:`url('https://cdn.pixabay.com/photo/2024/05/02/15/29/ai-generated-8734944_1280.png')`,height:'100vh', backgroundSize:'cover'}}><br />
    <div className='text-center p-5 m-5'><br />
      <h2  className='fw-bold fs-1'>Book Master</h2><br /><br />

      <p className=' col fw-bold text-white' style={{alignItems}}>A library is a collection of books, and possibly other materials and media, that is accessible for use by its members and members of allied institutions. Libraries provide physical (hard copies) or digital (soft copies) materials, and may be a physical location, a virtual space, or both. A library's collection normally includes printed materials which may be borrowed, and usually also includes a reference section of publications which may only be utilized inside the premises. Resources such as commercial releases of films, television programmes, other video recordings, radio, music and audio recordings may be available in many formats. These include DVDs, Blu-rays, CDs, cassettes, or other applicable formats such as microform. They may also provide access to information, music or other content held on bibliographic databases.</p>

      <div>  
      </div>  <Link to={'/addBook'}><MDBBtn>Get Start</MDBBtn></Link>
    </div>
     <br /><br />
    </div>
  )
}

export default HomePage