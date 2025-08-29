import React, { useEffect } from 'react'
import '../Contact/Contact.css';

function Contact() {
  useEffect(()=>{
  document.title="Contact Us - Codyatra"
  },[])
  return (
    <div>
      <div className="container-fluid contactMainDiv">
        <h1>Contact us</h1>
      </div>

      <div className="contact-details">
        <div className="row">
          <div className="col-lg-4 contactCol mainphone">
            <div className="phone">
              <i class="fa-solid fa-phone"></i>
              <p>1234567890</p>
            </div>
          </div>
          <div className="col-lg-4 contactCol">col2</div>
          <div className="col-lg-4 contactCol">col3</div>
        </div>
      </div>
    </div>
  )
}

export default Contact
