import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { ToastContainer, toast,Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from 'react-bootstrap/Spinner';

function Booking() {

    const [isLoginedIn,setLoginedIn] = useState(false)
    
    const [formData, setFormData] = useState({
        name: "",
        petType: "",
        breed: "",
        gender: "",
        age: "",
        date:"",
        location: "",
        address:"",
        services: [],
    });

    const navigate = useNavigate();

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleMultiSelectChange = (e) => {
        const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
        setFormData({ ...formData, services: selectedOptions });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            console.log("Form Data Before Submission:", formData);

            const response = await axios.post('http://localhost:4000/api/booking', formData);

            if (response.status === 200) {
                setLoginedIn(true)
                toast.success("Booking Submitted Successfully!",{
            position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Bounce,
		  });
          setTimeout(()=>{
            navigate('/')
          },6000)
         
                setFormData({
                    name: "",
                    petType: "",
                    breed: "",
                    gender: "",
                    age: "",
                    date:"",
                    location: "",
                    address:"",
                    services: [],
                });
            }
           
        } catch (error) {
            if (error.response) {
                console.error("Error details:", error.response.data);
                toast.error(error.response.data.message || "Failed to submit booking.",{
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  });
                
            } else {
                console.error("Error:", error.message);
                toast.error("An unexpected error occurred.",{
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    transition: Bounce,
                  });
        
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <br /><br />
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="max-w-lg mx-auto p-6 bg-white shadow rounded">
                <h2 className="text-2xl font-bold mb-6">Pet Grooming Booking</h2>
                <form onSubmit={handleSubmit}>

                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-bold mb-2">Name</label>
                        <input
                            type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" required/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="petType" className="block text-sm font-bold mb-2">Type of Pet</label>
                        <input 
                        type="text" id="petType" name="petType" placeholder="e.g., Dog, Cat" value={formData.petType} onChange={handleChange} className="w-full px-3 py-2 border rounded" required/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="breed" className="block text-sm font-bold mb-2">Breed</label>
                        <select id="breed" name="breed" value={formData.breed} onChange={handleChange} className="w-full px-3 py-2 border rounded" required>
                            <option value="">Select Breed</option>
                            <option value="Affenpinscher">Affenpinscher</option>
                            <option value="Afghan Hound">Afghan Hound</option>
                            <option value="Aidi">Aidi</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-sm font-bold mb-2">Gender</label>
                        <select
                         id="gender" name="gender" value={formData.gender} onChange={handleChange} className="w-full px-3 py-2 border rounded" required>
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="age" className="block text-sm font-bold mb-2">Age</label>
                        <input type="number" id="age" name="age" placeholder="Pet Age" value={formData.age} onChange={handleChange} className="w-full px-3 py-2 border rounded" required/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="date" className="block text-sm font-bold mb-2">Date</label>
                        <input type="date" id="date" name="date" placeholder="Select Date" value={formData.date} onChange={handleChange} className="w-full px-3 py-2 border rounded" required/>
                    </div>
                  
                    <div className="mb-4">
                        <label htmlFor="location" className="block text-sm font-bold mb-2">Grooming Location</label>
                        <select
                            id="location" name="location" value={formData.location} onChange={handleChange} className="w-full px-3 py-2 border rounded" required>
                            <option value="">Select Location</option>
                            <option value="Kochi">Kochi</option>
                            <option value="Trivandrum">Trivandrum</option>
                            <option value="Kollam">Kollam</option>
                            <option value="Kozhikode">Kozhikode</option>
                            <option value="Thrissur">Thrissur</option>
                        </select>
                    </div>
        
                    <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-bold mb-2">Address</label>
                        <textarea name="address" id="address"  value={formData.address} onChange={handleChange} className="w-full px-3 py-2 border rounded" required></textarea>
                        
                    </div>

                    <div className="mb-4">
                        <label htmlFor="services" className="block text-sm font-bold mb-2">Services</label>
                        <select
                            id="services" name="services" multiple value={formData.services} onChange={handleMultiSelectChange} className="w-full px-3 py-2 border rounded" required>
                            <option value="Spa Bath">Spa Bath</option>
                            <option value="Grooming Services">Grooming Services</option>
                            <option value="Veterinary Services">Veterinary Services</option>
                            <option value="Pet Training">Pet Training</option>
                            <option value="Pet Sitting">Pet Sitting</option>
                            <option value="Nail Trimming">Nail Trimming</option>
                            <option value="Cat Grooming">Cat Grooming</option>
                        </select>
                    </div>

                    <div className="mb-4 flex items-center justify-center" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                    <button type="submit"
                    className="btn btn-outline-success w-50 px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50"disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit Booking"}

                    {
                isLoginedIn && <Spinner animation="border" variant="light" className='fs-6 mt-1' />
              }
                </button>

                
                    </div>
                </form>
            </div>
            <br /><br /><br />
            
            <div className="row text-center p-3">
                <div className="col-4">
                    <img src="" alt="" width={'100'} />
                    <i class="fa-solid fa-house fa-beat-fade fs-1"></i><br /><br />
                    <h3 className="fw-bold">In your home</h3>
                    Other than a bathing area and towels, your groomer will take care of everything—including cleanup!
                    </div>

                <div className="col-4">
                <i class="fa-solid fa-wallet fa-beat-fade fs-1"></i><br /><br />
                    <h3 className="fw-bold">Flat, transparent rates</h3>
                No hidden fees or price adjustments. Period.</div>

                <div className="col-4">
                <i class="fa-solid fa-award fa-beat fs-1"></i><br /><br />
                    <h3 className="fw-bold">Professional experience</h3>
                All groomers on ThePetNest have professional pet grooming experience and offer an in-home alternative to mobile dog grooming, which means less stress for you and your dog.</div>
            </div><br />
            <hr />
        <br />
        <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
       />
        </div>
    );
}

export default Booking;
