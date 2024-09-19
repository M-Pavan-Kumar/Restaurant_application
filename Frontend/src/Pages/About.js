import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import BookOnlineIcon from '@mui/icons-material/BookOnline'; 
import SanitizerIcon from '@mui/icons-material/Sanitizer';
import AddAlarmIcon from '@mui/icons-material/AddAlarm';
import FoodBankIcon from '@mui/icons-material/FoodBank';
import KitchenIcon from '@mui/icons-material/Kitchen';
import ManIcon from '@mui/icons-material/Man';
import Navbar from "../Components/Navbar"
import Footer from "../Pages/Footer"
import './About.css'; // Create this file for custom styles

const restaurantInfo = {
    name: "Gourmet Haven",
    description: "Gourmet Haven is a place where culinary artistry meets delightful dining. Nestled in the heart of the city, our restaurant offers a serene ambiance and exquisite dishes that celebrate the flavors of the world.",
    address: "123 Foodie Lane, Flavor Town, FT 56789",
    phone: "(123) 456-7890",
    hours: {
        monday: "11:00 AM - 10:00 PM",
        tuesday: "11:00 AM - 10:00 PM",
        wednesday: "11:00 AM - 10:00 PM",
        thursday: "11:00 AM - 10:00 PM",
        friday: "11:00 AM - 11:00 PM",
        saturday: "11:00 AM - 11:00 PM",
        sunday: "11:00 AM - 9:00 PM",
    }
};

const About = () => {
  return (
    <div>
        <Navbar />
        <div className="py-5 bg-body-secondary">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body d-flex flex-column flex-md-row">
                                <img className="w-100 w-md-50 mb-3 mb-md-0" src="https://i.pinimg.com/736x/68/10/28/68102834c7f1e06e3e2c2c1520be5559.jpg" alt="Restaurant" />
                                <div className="ps-0 ps-md-3">
                                    <h1 className="font-weight-bold">We Are More Than Multiple Service</h1>
                                    <p>This is a type of restaurant which typically serves food and drinks, in addition to light refreshments such as baked goods or snacks. The term comes from the French word meaning food.</p>
                                    <div className="d-flex flex-column flex-md-row">
                                        <ul className="list-unstyled me-md-4">
                                            <li><BookOnlineIcon /> Online Order</li>
                                            <li><SanitizerIcon /> Pre-Reservation</li>
                                            <li><AddAlarmIcon /> 24/7 Service</li>
                                        </ul>
                                        <ul className="list-unstyled">
                                            <li><FoodBankIcon /> Organized Foodie Place</li>
                                            <li><KitchenIcon /> Clean Kitchen</li>
                                            <li><ManIcon /> Super Chefs</li>
                                        </ul>
                                    </div>
                                    <h3>Timings</h3>
                                    <ul className="list-unstyled">
                                        {Object.entries(restaurantInfo.hours).map(([day, hours]) => (
                                            <li key={day}>
                                                <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong> {hours}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-3">
                                        <button className="btn btn-danger w-100 w-md-50">Enjoy Food!!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>                    
        </div>
        <Footer />
    </div>
    
  )
}

export default About