import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Css/TableReserve.css'; 

const TableReserve = () => {
  return (
    <Carousel>
      {[
        { meal: 'Breakfast', image: 'https://cdn.vox-cdn.com/thumbor/7Pi1tMVhe65Thr_AlWYe01ldGc0=/0x80:1000x830/1200x800/filters:focal(0x80:1000x830)/cdn.vox-cdn.com/uploads/chorus_image/image/48566575/shutterstock_169364927.0.0.jpg' },
        { meal: 'Lunch', image: 'https://img.freepik.com/premium-photo/isolated-chicken-biryani-traditional-indian-food-spicy-fried-rice-ramadan-iftar-meal-eid-dinner_667286-5762.jpg?w=2000' },
        { meal: 'Dinner', image: 'https://www.pngmart.com/files/15/Food-Plate-Top-View-Non-Veg-PNG.png' }
      ].map((item, index) => (
        <Carousel.Item key={index}>
          <div className='card'>
            <div className='container reservation-container'>
              <div className='reservation-content'>
                <h1>Do You Have Any {item.meal}<br />Plan Today? Reserve<br />Your Table</h1>
                <p>Make online reservations, read restaurant reviews from {item.meal.toLowerCase()}s,<br /> and earn points towards free meals. Open table is real time<br /> online reservation</p>
                <button className='btn rounded-pill btn-warning reservation-btn'>Make Reservation</button>
              </div>
              <div className='reservation-image'>
                <img src={item.image} alt={`${item.meal} meal`} />
              </div>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default TableReserve;