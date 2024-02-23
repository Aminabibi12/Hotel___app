// Navbar.js
import React, { useState } from 'react';
import BookingModal from './BookigModel';

const Navbar = ({ isNavbarActive, toggleNavbar, isDarkMode, toggleDarkMode }) => {
  const [showBookingModal, setShowBookingModal] = useState(false);

  const openBookingModal = () => {
    setShowBookingModal(true);
  };

  const closeBookingModal = () => {
    setShowBookingModal(false);
  };
  return (
    <header>
      <p style={{ color: "var(--main-color)" }}>
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
        <button className="book-now-button" onClick={openBookingModal}>Book Now</button>
      </div>
      {showBookingModal && (
        <div className="booking-modal">
          <div className="modal-overlay" onClick={closeBookingModal}></div>
          <div className="modal-content">
            <button className="close-btn" onClick={closeBookingModal}>X</button>
            <BookingModal onClose={closeBookingModal} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
