import React, { useState } from 'react';
import './Booking.css';

function Booking({ handleChange, handleSubmit }) {
  const [formData, setFormData] = useState({
    visitor_name: '',
    visitor_email: '',
    visitor_phone: '',
    checkin: '',
    checkout: ''
  });

  const currentDateTime = new Date();
  const year = currentDateTime.getFullYear();
  let month = currentDateTime.getMonth() + 1;
  let date = currentDateTime.getDate() + 1;

  if (date < 10) {
    date = '0' + date;
  }
  if (month < 10) {
    month = '0' + month;
  }

  const dateTomorrow = `${year}-${month}-${date}`;

  return (
    <div className="booking-form-container">
    
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="visitor_name">Full Name:</label>
          <input type="text" id="visitor_name" name="visitor_name" placeholder="John M. Doe" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="visitor_email">Email:</label>
          <input type="email" id="visitor_email" name="visitor_email" placeholder="john@example.com" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="visitor_phone">Phone:</label>
          <input type="tel" id="visitor_phone" name="visitor_phone" placeholder="(34) 123-456-789" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="checkin">Check-in Date:</label>
          <input type="date" id="checkin" name="checkin" min={dateTomorrow} value={formData.checkin} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="checkout">Check-out Date:</label>
          <input type="date" id="checkout" name="checkout" min={formData.checkin} value={formData.checkout} onChange={handleChange} />
        </div>
        <div className="form-group">
          <button type="submit" className="booking-btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Booking;
