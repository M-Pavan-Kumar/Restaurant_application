import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Css/Addreview.css"
import { useNavigate } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_BACKEND_URL;
const REACT_APP_BACKEND_URL="https://restaurant-application-4.onrender.com"

const Addreview = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(1);
  const [photo, setPhoto] = useState('');
  const navigate = useNavigate();

  // Retrieve userId from local storage
  const userId = JSON.parse(localStorage.getItem('login_data'))?.data?._id;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !message) {
      toast.error('Name and message are required.');
      return;
    }

    try {
      const response = await axios.post(
        `${REACT_APP_BACKEND_URL}/addreview`, 
        {
          // userId,
          name,
          message,
          rating,
          photo
        },
        {
          headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${yourToken}` // Include if your API requires authentication
          }
        }
      );
      console.log(response)

      if (response.data.status === 'success') {
        toast.success('Review added successfully!');
        // Clear the form
        setName('');
        setMessage('');
        setRating(1);
        setPhoto('');
        // Redirect to reviews page after 2 seconds
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(response.data.message || 'Failed to add review.');
      }
    } catch (error) {
      console.error('Error adding review:', error);
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <div className="add-review-container">
      <ToastContainer />
      <h2>Add a Review</h2>
      <form className="add-review-form" type="submit" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      
        <label>Rating</label>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <label key={star}>
              <input
                type="radio"
                name="rating"
                value={star}
                checked={rating === star}
                onChange={() => setRating(star)}
              />
              {star} Star{star > 1 ? 's' : ''}
            </label>
          ))}
        </div>

        <label htmlFor="photo">Photo URL (Optional)</label>
        <input
          type="text"
          id="photo"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />

        <button type="submit" className="submit-button">Submit Review</button>
      </form>
    </div>
  );
};

export default Addreview;
