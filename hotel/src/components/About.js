import React from 'react';

const About = () => {
  return (
    <section className="about" id="about" style={{marginTop:"100px"}}>
      <div className="about-img">
        <img src="https://img.freepik.com/free-photo/female-receptionist-elegant-suit-during-work-hours_23-2149714393.jpg?w=1480&t=st=1708729334~exp=1708729934~hmac=27e04e7ccf47f6aa3ec2c22f1e0f92c559012597b53f3dd1923a08d78ca31c63" alt="" />
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
