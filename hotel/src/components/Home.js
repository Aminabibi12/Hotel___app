import React from 'react';

const Home = () => {
  return (
    <section className="home" id="home"style={{marginTop:"100px"}} >
      <div className="home-text">
        <h1>Treat yourself to everyday exceptional.</h1>
        <h2>Enjoy The Whispering Pines, which is open all day, as well as Bar Brasserie Montbrie, where quality, workmanship, and service are prioritized.</h2>
        <a href="#" className="btn">Explore More!</a>
      </div>
      <div className="home-img">
        <img src="https://assets.website-files.com/63d0fad7fc0a8ee33b7ee8d0/63d3937a34f30223ed47eb54_Treat-large.png" alt="" />
      </div>
    </section>
  );
};

export default Home;
