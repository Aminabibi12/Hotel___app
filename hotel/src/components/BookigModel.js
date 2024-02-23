// BookingModal.js
import React, { useState } from 'react';
import Booking from './Booking'; // Import the Booking component
import './Booking.css';

const BookingModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    visitor_name: '',
    visitor_email: '',
    visitor_phone: '',
    total_adults: '',
    total_children: '',
    checkin: '',
    checkout: '',
    room_preference: '',
    visitor_message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send formData to your backend
    console.log(formData);
  };

  return (
    <div className="booking-modal-container">
      <div className="booking-modal-content">
        <button onClick={onClose} className="close-btn">X</button>
        <div>
          <Booking formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
