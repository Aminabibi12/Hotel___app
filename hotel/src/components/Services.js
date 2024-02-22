import React from 'react';
import './Service.css';

   
    
    function HomeSectioThree() {
      return (
        <div className="container" id = "services" style={{marginBottom:"100px"}}>

          <p className='service-p' style={{textAlign:"center",color:"var(--main-color)", fontSize:"1.2rem"}} >Services</p>
          <h1 className='service-h' style={{textAlign:"center", marginBottom:"50px"}}>Elevate Your Stay with Our Premium Services</h1>
        
          <div className="row row-three">
            <div className="col-lg-4 col-sm-6">
              <div className="section-three">
                <img src="https://cdn-icons-png.freepik.com/256/976/976341.png?ga=GA1.1.683373935.1707406530&semt=ais" alt="Image 1" className="icon" />
                <h5>Travel Plan</h5>
                <p>Our dedicated team is committed to providing you with an unforgettable travel experience, ensuring that every aspect of your stay is seamless and enjoyable. From booking your accommodation to arranging transportation and excursions.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="section-three">
                <img src="https://cdn-icons-png.freepik.com/256/9074/9074402.png?ga=GA1.1.683373935.1707406530&semt=ais" alt="Image 2" className="icon" />
                <h5>Pool Area</h5>
                <p>Indulge in the ultimate relaxation experience at our hotel's exquisite pool area. Nestled amidst lush greenery and offering stunning views of the surrounding landscape, our pool provides the perfect oasis for guests seeking tranquility and rejuvenation. </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="section-three">
                <img src="https://cdn-icons-png.freepik.com/256/7731/7731252.png?ga=GA1.1.683373935.1707406530&semt=ais" alt="Image 3" className="icon" />
                <h5>Baby Sitting</h5>
                <p>Enjoy peace of mind during your stay with our convenient hotel babysitting services. Whether you're here for a romantic getaway or traveling with little ones, our professional and experienced babysitters are available to take care of your children.</p>
              </div>
            </div>
        
         
         
            <div className="col-lg-4 col-sm-6">
              <div className="section-three">
                <img src="https://cdn-icons-png.freepik.com/256/7969/7969295.png?ga=GA1.1.683373935.1707406530&semt=ais" alt="Image 4" className="icon" />
                <h5>Laundry</h5>
                <p>Take advantage of our convenient hotel laundry services to keep your wardrobe fresh and clean throughout your stay. Whether you're traveling for business or pleasure, our professional laundry team is dedicated to providing top-quality care.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="section-three">
                <img src="https://cdn-icons-png.freepik.com/256/8596/8596417.png?ga=GA1.1.683373935.1707406530&semt=ais" alt="Image 5" className="icon" />
                <h5>Rent Car</h5>
                <p>Explore the wonders of our vibrant city with ease thanks to our convenient hire drive service. Whether you're here for business or pleasure, our dedicated team is ready to assist you in arranging the perfect transportation solution to suit your needs.</p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="section-three">
                <img src="https://cdn-icons-png.freepik.com/256/12315/12315258.png?ga=GA1.1.683373935.1707406530&semt=ais" alt="Image 6" className="icon" />
                <h5>Restaurant</h5>
                <p>Our culinary experts have crafted a menu that celebrates local flavors while offering a diverse range of international cuisines to suit every palate. Whether you're craving a hearty breakfast to start your day, a leisurely lunch with colleagues, or a romantic dinner.</p>
              </div>
            </div>
          </div>
        </div>
       
        
       
      );
    }
    
    export default HomeSectioThree;