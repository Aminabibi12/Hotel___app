import React from 'react';

const About = () => {
  return (
    <section className="about" id="about" style={{marginTop:"100px"}}>
      <div className="about-img">
        <img src="http://www.elathemes.com/themes/colina/assets/images/slide-2.jpg" alt="" />
      </div>
      <div className="about-text">
        <span>About Us</span>
        <h2>Welcome To <br /> whispering pines</h2>
        <p>This hotel is located in the center of city, with easy access to the city’s tourist attractions. It offers tastefully decorated rooms.</p>
        <a href="#" className="btn">Learn More</a>
      </div>
    </section>
  );
};

export default About;
