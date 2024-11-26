import React from 'react'

const locations = [
  { name: 'Kochi', address: 'Kochi, Kerala' },
  { name: 'Trivandrum', address: 'Trivandrum, Kerala' },
  { name: 'Bangalore', address: 'Bangalore, Karnataka' },
  { name: 'Chennai', address: 'Chennai, Tamil Nadu' },
];

function Location() {

  const handleBooking = (location) => {
    alert(`Booking service at ${location}!`);
    // Redirect to booking page or handle the booking logic here
  };

  return (
    <div>
      <div className="location-page border border-2 p-5 m-5 w-50">
      <h2>Pet Grooming Locations</h2>
      <p>Select your location to book a grooming service.</p>
      <div className="location-list">
        {locations.map((location, index) => (
          <div key={index} className="location-item">
            <h3>{location.name}</h3>
            <p>{location.address}</p>
            <button className="book-button btn btn-outline-success" onClick={() => handleBooking(location.name)}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default Location