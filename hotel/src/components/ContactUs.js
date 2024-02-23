import React from 'react';
import './ContactUs.css'; // Added missing dot to import statement

const Connect = () => {
  return (
    <div>
       <div className="card-form" id="contact"> {/* Changed class to className */}
         <span className="title">Contact Us!</span> {/* Changed class to className */}
         <form className="form"> {/* Changed class to className */}
           <div className="group"> {/* Changed class to className */}
             <input placeholder="" type="text" required="" />
             <label htmlFor="name">Name</label> {/* Changed for to htmlFor */}
           </div>
           <div className="group"> {/* Changed class to className */}
             <input placeholder="" type="email" id="email" name="email" required="" />
             <label htmlFor="email">Email</label> {/* Changed for to htmlFor */}
           </div>
           <div className="group"> {/* Changed class to className */}
             <input placeholder="" type="tel" id="phone" name="phone" required="" />
             <label htmlFor="phone">Phone</label> {/* Changed for to htmlFor */}
           </div>
           <div className="group"> {/* Changed class to className */}
             <textarea placeholder="" id="comment" name="comment" rows="5" required=""></textarea>
             <label htmlFor="comment">Comment</label> {/* Changed for to htmlFor */}
           </div>
           <button type="submit">Submit</button>
         </form>
       </div>
    </div>
  );
};

export default Connect;
