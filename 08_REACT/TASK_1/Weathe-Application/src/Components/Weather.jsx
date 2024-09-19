import React, { useEffect, useState } from 'react'

import axios from 'axios';



function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const baseKey = 'a2e9598efeed1ffda20eb3001bc7f53b';
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

  const getWeatherData = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: {
          q: city,
          appid: baseKey,
          
        },
      });
      setWeatherData(response.data);
      console.log(weatherData);
      setCity('')
    } 
    catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  
  
  return (
    <div>
       <div className='d-flex justify-content-center py-4'>
        <div style={{width:'380px', height:'600px', borderRadius:'30px', boxShadow:'3px 4px 10px '}} className='text-center py-5 px-4 mx-2'>
       <div className='d-flex'> <input style={{borderRadius:'20px',paddingInline:'20px', border:'none', boxShadow:'3px 4px 5px'}} className='form-control m-3' value={city} onChange={(e)=>setCity(e.target.value)} type="text" placeholder='Enter location' />
       <button className='btn btn-light my-4' style={{borderRadius:'50px', boxShadow:'3px 4px 5px'}} onClick={getWeatherData}><i className="fa-solid fa-magnifying-glass"></i></button></div>
          
        {weatherData && (
        <div className='py-4 px-3 mt-3' style={{backgroundColor:'rgba(150,170,200)', borderRadius:'20px'}}>
        <h6 className='text-dark my-2'> <i className="fa-solid fa-location-dot me-2"></i>{weatherData.name}</h6>
        <h1 className='text-dark my-3' style={{fontSize:'40px'}}>{parseFloat((weatherData.main.temp-273.15).toFixed(1))}</h1>
        <h5 className='text-dark my-3'>{weatherData.weather.description}</h5>
        <div style={{backgroundColor:'rgba(150,170,200,)', borderRadius:'20px'}} className='d-flex justify-content-evenly text-dark py-3 mt-4'>
            <div className='mx-2'>
                <i className="fa-solid fa-cloud"></i>
                <h6>{weatherData.clouds.all}%</h6>
                <p>Cloudiness</p>
            </div>
            <div className='mx-2'>
                <i className="fa-solid fa-droplet"></i>
                <h6>{weatherData.main.humidity}%</h6>
                <p>Humidity</p>
            </div>
            <div className='mx-2'>
            <i className="fa-solid fa-wind"></i>
            <h6>{weatherData.wind.speed}m/s</h6>
            <p>Wind speed</p>
            </div>
          </div>
        </div>
        
        )}
        </div>

    </div>
     
    </div>
  )
}

export default Weather