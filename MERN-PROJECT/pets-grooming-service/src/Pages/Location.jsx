// import React from 'react'
// import { MdLocationPin } from "react-icons/md";

// function Location() {
//   return (
//     <div>
    
//     <div className='text-center'><br /><br />
//       <h3 className='fw-bold fs-1'>At Home Pet Grooming Services</h3><br />
    
//     <div>
//       <p className='fw-bold'>Oh My Pet’s pet grooming services offer a convenient and stress-free way for pet owners to maintain their pets’ hygiene and appearance. These services typically include bathing, hair trimming, nail clipping, and ear cleaning, all performed in the comfort of your own home. Proudly serving more than 5000 Pawrents..</p>
//     </div>

//     <div>
//       <center>
//       <div className="row p-5 m-5 justify-content-evenly">
//         <div className="col-2 border border-1 border-dark p-3"><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/12/825-1024x1024.jpg" alt="" /><p className='text-center fw-bold p-2'> Pet grooming in Delhi   </p></div>

//         <div className="col-2 border border-1 border-dark p-3"><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/12/WhatsApp_Image_2023-11-29_at_21.28.19_3f5a942a-removebg-preview.png"  alt="" /><p className='text-center fw-bold p-2'>Pet Grooming in Pune</p> </div> 

//         <div className="col-2 border border-1 border-dark p-3"> <img src="https://ohmypetgrooming.in/wp-content/uploads/2023/12/WhatsApp_Image_2023-11-29_at_21.28.57_f21aed23-removebg-preview.png" alt="" /><p className='text-center fw-bold p-2'>Pet Grooming in Mumbai</p></div>

//         <div className="col-2 border border-1 border-dark p-3"><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/12/WhatsApp_Image_2023-11-29_at_21.28.38_1383ee32-removebg-preview.png" alt="" /><p className='text-center fw-bold p-2'>Pet Grooming in Chennai</p></div>

//         <div className="col-2 border border-1 border-dark p-3"><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/12/WhatsApp_Image_2023-11-29_at_21.28.38_1383ee32-removebg-preview.png" alt="" /><p className='text-center fw-bold p-2'>Pet Grooming in Noida</p></div></div>

//         <div className='row p-5 m-5 justify-content-evenly'>
//         <div className="col-2 border border-1 border-dark p-3"><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/12/fyn3_sgr8_230116-removebg-preview-1.png" alt="" /><p className='text-center fw-bold p-2'>Pet Grooming in  Ghaziabad</p></div>
        
//         <div className="col-2 border border-1 border-dark p-3"><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/12/2811-removebg-preview.webp" alt="" /><p className='text-center fw-bold p-2'>Pet Grooming in Gurugram</p></div>

//         <div className="col-2 border border-1 border-dark p-3"><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/12/WhatsApp_Image_2023-11-29_at_21.30.14_7829a83e-removebg-preview.png" alt="" /><p className='text-center fw-bold p-2'>Pet Grooming in Hyderbad</p></div>

//         <div className="col-2 border border-1 border-dark p-3"><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/12/plnb_13j7_230116-1024x826.jpg" alt="" /><p className='text-center fw-bold p-2'>Pet Grooming in Bengaluru</p></div>

//         <div className="col-2 border border-1 border-dark p-3"><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/12/2811-removebg-preview.webp" alt="" /><p className='text-center fw-bold p-2'>Pet Grooming in faridabad</p></div>

//         </div></center>
        
      
//     </div>
//     </div>
//     </div>
//   )
// }

// export default Location


import React from 'react';

const locations = [
  { name: 'Kochi', address: 'Kochi, Kerala' },
  { name: 'Trivandrum', address: 'Trivandrum, Kerala' },
  { name: 'Bangalore', address: 'Bangalore, Karnataka' },
  { name: 'Chennai', address: 'Chennai, Tamil Nadu' },
];

const LocationPage = () => {
  const handleBooking = (location) => {
    alert(`Booking service at ${location}!`);
    // Redirect to booking page or handle the booking logic here
  };

  return (
    <div className="location-page">
      <h2>Pet Grooming Locations</h2>
      <p>Select your location to book a grooming service.</p>
      <div className="location-list">
        {locations.map((location, index) => (
          <div key={index} className="location-item">
            <h3>{location.name}</h3>
            <p>{location.address}</p>
            <button className="book-button" onClick={() => handleBooking(location.name)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationPage;
