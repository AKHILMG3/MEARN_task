import React from "react";
import { Link } from "react-router-dom";

function Locations() {
    const locations = [
        {
            name: "Kochi",
            image: "https://via.placeholder.com/200x150?text=Kochi",
        },
        {
            name: "Trivandrum",
            image: "https://via.placeholder.com/200x150?text=Trivandrum",
        },
        {
            name: "Kollam",
            image: "https://via.placeholder.com/200x150?text=Kollam",
        },
        {
            name: "Kozhikode",
            image: "https://via.placeholder.com/200x150?text=Kozhikode",
        },
        {
            name: "Thrissur",
            image: "https://via.placeholder.com/200x150?text=Thrissur",
        },
        {
            name: "Kottayam",
            image: "https://via.placeholder.com/200x150?text=Kottayam",
        },
        {
            name: "Kannur",
            image: "https://via.placeholder.com/200x150?text=Kannur",
        },
        {
            name: "Idukki",
            image: "https://via.placeholder.com/200x150?text=Idukki",
        },
    ];

    return (
        <div className="container my-5 ">
            <h1 className="text-center mb-4">Our Pet Grooming Locations</h1>
            <div className="row justify-content-center">
                {locations.map((location, index) => (
                    <div
                        key={index}
                        className="col-md-4 col-sm-6 col-lg-3 mb-4 text-center border p-3 rounded shadow-sm"
                    >
                        <img
                            src={location.image}
                            alt={location.name}
                            className="img-fluid rounded mb-3"
                            style={{ height: "150px", width:'500px', objectFit: "cover" }}
                        />
                        <h4 className="fw-bold">{location.name}</h4>
                        <p>Find professional grooming services in {location.name}.</p>
                        <Link to="/login">
                            <button className="btn btn-primary btn-sm">Button</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Locations;
