import React from 'react'
import { Link } from 'react-router-dom'


function HomePage() {
  return (
    <div>
        <div className='home text-center'>

            <div><br /><br /><br />
                <h1 className='text-center fw-bold text-dark p-5 '>Welcome To Dreamscape Event Co.</h1>
               
                <div>
                <h3 className=' para  p-5 fw-bold text-dark'>
                Event management is the comprehensive process of strategizing, planning, producing, and evaluating events. It’s about bringing a vision to life, an event budget and ensuring that every aspect, from the venue’s ambiance to the quality of technical support, aligns perfectly with the event’s goals
                </h3>
                </div>
                <div >
                    <Link to={'view'}><button className='btn btn-success m-5'>Get Start</button></Link></div>

            </div>


        </div>
    </div>
  )
}

export default HomePage