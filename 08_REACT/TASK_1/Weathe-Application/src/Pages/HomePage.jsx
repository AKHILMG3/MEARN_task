import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function HomePage() {
  return (
    <div>
      <div className='text-center p-3 m-3'><h1 className='text-dark'>Weather</h1></div>
   <div className=' d-flex p-3 m-2 '>
   <div><img src="https://www.timeanddate.com/scripts/weather_og.php?h1=Weather&h2=Local%20Weather%20Around%20the%20World" width={'600px'} alt="" /></div>

<div className='p-5 col-6 ' >
  <p>Weather is the state of the atmosphere, including temperature, atmospheric pressure, wind, humidity, precipitation, and cloud cover. It differs from climate, which is all weather conditions for a particular location averaged over about 30 years. Weather is influenced by latitude, altitude, and local and regional geography. It impacts the way people dress each day and the types of structures built</p>
</div>
   </div>
   <div className='p-3 m-3 text-center'>
    <Link to={'home'}><Button type='button' className='btn btn-primary'>Search</Button></Link></div>

    </div>
  )
}

export default HomePage