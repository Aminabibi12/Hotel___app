import React from 'react';
import './Menu.css';



function HomeSectionTwo() {
 
 

  return (
    <div className="home-section-two mt-5" id="rooms">
      <p className="home-section- p" style={{textAlign:"center",color:"var(--main-color)", fontSize:"1.2rem"}}>Rooms</p>
      <h1 className="home-section- h1" style={{textAlign:"center", marginBottom:"50px"}}>Indulge in Luxury and Comfort</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="card card-1">
            <div className="card-img-overlay">
              <h5 className="card-title" style={{textAlign:"center", marginTop:"150px",color:"var(--main-color)", fontSize:"2rem"}}>Doubble Room</h5>
              <span className="responsive-span"><b>2000$</b> / perNight</span>


            </div>
            <img src="https://cozystay.loftocean.com/mountain-hotel/wp-content/uploads/sites/7/2023/04/marvin-meyer-fBdlytm6Hp8-unsplash.jpg" className="card-img-top" alt="Image 1" />
          </div>
        </div>
        <div className="col">
          <div className="card card-2">
            <div className="card-img-overlay">
              <h5 className="card-title"  style={{textAlign:"center", marginTop:"150px",color:"var(--main-color)", fontSize:"2rem"}}>Premium King Room</h5>
              <span className="responsive-span"><b>2500$</b> / perNight</span> 
            </div>
            <img src="https://cozystay.loftocean.com/mountain-hotel/wp-content/uploads/sites/7/2023/04/ralph-ravi-kayden-FqqiAvJejto-unsplash.jpg" className="card-img-top" alt="Image 2" />
          </div>
        </div>
        <div className="col">
          <div className="card card-3">
            <div className="card-img-overlay">
              <h5 className="card-title"  style={{textAlign:"center", marginTop:"150px",color:"var(--main-color)", fontSize:"2rem"}}>Deluxe Room</h5>
              <span className="responsive-span"><b>3000$</b> / perNight</span> 
            </div>
            <img src="https://cozystay.loftocean.com/mountain-hotel/wp-content/uploads/sites/7/2023/04/img-25.jpg" className="card-img-top" alt="Image 3" />
          </div>
        </div>
        <div className="col">
          <div className="card card-4">
            <div className="card-img-overlay">
              <h5 className="card-title"  style={{textAlign:"center", marginTop:"150px",color:"var(--main-color)", fontSize:"2rem"}}>Family Room</h5>
              <span className="responsive-span"><b>2600$</b> / perNight</span> 
            </div>
            <img src="https://cozystay.loftocean.com/mountain-hotel/wp-content/uploads/sites/7/2023/04/spacejoy-FX61rYaAfCQ-unsplash-1536x864.jpg" className="card-img-top" alt="Image 4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionTwo;

