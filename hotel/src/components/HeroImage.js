import React from "react";
import "./HeroImg.css";

function HeroImage() {
  return (
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{ paddingLeft:"20px", paddingRight:"20px"}}>
    <div className="carousel-inner">
      <div className="carousel-item active" style={{backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/00/65/82/13/1000_F_65821315_WGpXLhFtlEHfGQ8sqJ5RUNFNmnYDGgOd.jpg')`}}>
        <h1 className="hero-heading">Welcome to <br></br> Whispering Pines</h1>
       
      </div>
      <div className="carousel-item" style={{backgroundImage: `url('https://as1.ftcdn.net/v2/jpg/04/06/67/82/1000_F_406678288_soUy6mmdiBdwwFDYBwUNMdNApXqWj2tS.jpg')`}}>
        <h1 className="hero-heading">Unforgettable Moments</h1>
       
      </div>
      <div className="carousel-item" style={{backgroundImage: `url('https://as2.ftcdn.net/v2/jpg/01/31/18/99/1000_F_131189921_fPJ1kC71fA5hZhC7H2b6bVZRRv2WADQg.jpg')`}}>
        <h1 className="hero-heading">Escape to Tranquility</h1>
       
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  
  );
}

export default HeroImage;