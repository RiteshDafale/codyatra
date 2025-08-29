import React, { useEffect } from 'react';
import '../Contact/Contact.css';

function Contact() {
  useEffect(() => {
    document.title = "Contact Us - Codyatra";
  }, []);

  return (
    <div>
      {/* Main Container */}
      <div className="container-fluid contactMainDiv">
        <h1>Contact Us</h1>
      </div>

      {/* Contact Details */}
      <div className="contact-details">
        <div className="row">
          {/* Phone Contact */}
          <div className="col-lg-4 contactCol mainphone p-3">
            <div className="phone">
              <i className="fa-solid fa-phone"></i>
              <p>9405689914</p>
              <button className="contactBtn">Call Us</button>
            </div>
          </div>

          {/* Email Contact */}
          <div className="col-lg-4 contactCol mainemail p-3">
            <div className="email">
              <i className="fa-solid fa-envelope"></i>
              <p>codyatra@gmail.com</p>
              <button className="contactBtn">Email Us</button>
            </div>
          </div>

          {/* Location */}
          <div className="col-lg-4 contactCol mainlocation p-3">
            <div className="location">
              <i className="fa-solid fa-location-dot"></i>
              <p>Nagpur Maharashtra</p>
              <button className="contactBtn">Get Directions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
