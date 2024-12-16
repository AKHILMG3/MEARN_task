import React from 'react'

function AboutUs() {
  return (
    <div className='' style={{backgroundImage: "url('')"}}>
      <div>
      <br /><br />
      <h1 className='about text-center fw-bold'>About Us</h1>
    </div>
    <h6 className='text-dark m-5 p-5 py-3'>At Oh My Pet Grooming, we bring professional pet care services right to your doorstep! We are a team of well-trained and sensitive experts who will give your furry friend the perfect experience from snout to tail. <br /> <br />
    We understand that pet parents have concerns about taking their pets to spas, clinics, and salons regularly – such as the risk of infection, separation anxiety, travelling hassles, use of sedatives, and ill-treatment of pets. That’s why we offer our at-home pet care services so you can have peace of mind knowing that your pet is in good hands. <br /><br />
    We are striving to give your pet the most luxurious and wonderful grooming and styling experience along with training and veterinary care at your home: <br /><br />
    <ul className='fw-bold '>
      <li>Easy to book! Call us OR Book online</li><br />
      <li>Safe and clean home environment</li><br />
      <li>Full sanitisation , Pre and post service clean up</li><br />
      <li>No separation anxiety</li><br />
      <li>Undivided attention
      Apart from the gentle loving luxury of an expert service, we leave no stone un-turned to give the best possible experience following the latest trends around the world. Bringing to you the latest hairstyles and cuts, hair coloring and chalking, customized and exclusive clothing, pet photoshoots and never seen before add-ons to get the spotlight on immediately.</li>
    </ul>

    </h6>

    <div className='' style={{display: 'flex',justifyContent: 'center', alignItems: 'center'}}>
      <div className="row className='border shadow box border-1 w-75 m-5 rounded text-dark">
        <div className="col-6"> <br /><h3 className='text-center'>What suits best for your pet</h3><br />
        <ul>
          <li>The endless and unconditional love from the furry companion deserves the best. Being adoring believers of the same, Oh My Pet Grooming brought an idea to provide a safe, relaxed, and fun-filled experience for the little delightful creatures living in your hearts.</li><br />
          <li>Pets are the mini bundles of joy and celebrations. The days spent with pets are like celebrations. The pleasure they bring to our lives is immeasurable.</li><br />
          <li>Because we understand—your pet is an important part of your family. When you are looking for competent pet grooming services, you can trust us to take care of your loved one.</li><br />
          <li>Because we understand—your pet is an important part of your family. When you are looking for competent pet grooming services, you can trust us to take care of your loved one.</li>
        </ul>
        </div>
        <div className="col-6"><br /><br /><img src="https://ohmypetgrooming.in/wp-content/uploads/2023/12/combing-pomeranian-hair-care-dogs-beautiful-dog-sits-gray-rug-enjoys-taking-care-its-fur-1024x768.jpg" alt="" /></div>
      </div>
    </div>
    
    <div className="row border shadow box border-1 w-75 m-5 rounded text-dark" style={{display: "flex",flexDirection: "column",alignItems: "center",justifyContent: "center",textAlign: "center",padding: "20px",}}>
<h2>How Does OhMyPet Work?</h2>
  <div className="row w-100 mt-4" style={{ textAlign: "left" }}>
    <div className="col-4" style={{ padding: "15px" }}>
      <h5>Select Your Location</h5>
      <p>
        Check out our list of locations to find your location. We have detailed
        information about the areas we serve.
      </p>
    </div>
    <div className="col-4" style={{ padding: "15px" }}>
      <h5>Book Your Service</h5>
      <p >
        Book your service through the appointment form, by calling us, or
        simply sending us a WhatsApp message.
      </p>
    </div>
    <div className="col-4" style={{ padding: "15px" }}>
      <h5>Get It Groomed</h5>
      <p>
        Get your furry friend groomed by our experienced groomer at your
        location at the time provided by you.
      </p>
    </div>
  </div>
</div>

<div>
  
</div>
    
    </div>
  )
}

export default AboutUs