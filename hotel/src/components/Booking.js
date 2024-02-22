import React, { useState } from 'react';

function Booking() {
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
    <form onSubmit={handleSubmit}>
      <div className="elem-group">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          name="visitor_name"
          placeholder="John Doe"
          pattern="[A-Za-z\s]{3,20}"
          required
          value={formData.visitor_name}
          onChange={handleChange}
        />
      </div>
      {/* Other form fields go here */}
      <div className="elem-group">
        <label htmlFor="message">Anything Else?</label>
        <textarea
          id="message"
          name="visitor_message"
          placeholder="Tell us anything else that might be important."
          required
          value={formData.visitor_message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">Book The Rooms</button>
    </form>
  );
}

export default Booking;
