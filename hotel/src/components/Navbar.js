import React, { useState } from 'react';
import Booking from './Booking'; // Import the BookingForm component


const Navbar = ({ isNavbarActive, toggleNavbar, isDarkMode, toggleDarkMode }) => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  const openBookingForm = () => {
    setShowBookingForm(true);
  };

  const closeBookingForm = () => {
    setShowBookingForm(false);
  };

  return (
    <header>
      <p style={{ color: " var(--main-color)" }}>
        <b><span style={{ fontSize: "1.5em" }}>W</span>hispering <span style={{ fontSize: "1.5em" }}>P</span>ines</b>
      </p>

      <div className={isNavbarActive ? 'bx bx-x' : 'bx bx-menu'} id="menu-icon" onClick={toggleNavbar}></div>

      <ul className={isNavbarActive ? 'navbar active' : 'navbar'} >
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#rooms">Rooms</a></li>
        <li><a href="#services">Service</a></li>
        <li><a href="#contact">ContactUs</a></li>

        {/* Dark Mode */}
        <div className="darkmode" onClick={toggleDarkMode}>
          {isDarkMode ? <i className='bx bx-sun'></i> : <i className='bx bx-moon'></i>}
        </div>
      </ul>
      <div>
        <button className="book-now-button" onClick={openBookingForm}>Book Now</button>
      </div>
      {showBookingForm && (
        <div className="booking-form-container">
          <button onClick={closeBookingForm} className="close-btn">X</button>
          <div className="booking-form-content">
            <Booking />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;