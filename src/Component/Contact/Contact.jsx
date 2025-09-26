import React, { useEffect } from 'react';
import '../Contact/Contact.css';

function Contact() {
  useEffect(() => {
    document.title = "Contact Us - Codyatra";
  }, []);

  return (
    <div>
      {/* Main Container */}
      <div className="container contactMainDiv">
        <h2 className='text-dark poppins-semibold'>Contact Us</h2>
      </div>

      {/* Contact Details */}
      <div className="contact-details">
        <div className="row">
          <div className="col-lg-4 contactCol mainemail p-3">
            <div className="email">
              <i className="fa-solid fa-phone"></i>
              <p className='px-4 roboto-p'>9405689914</p>
              <button className="contactBtn">Contact us</button>
            </div>
          </div>

          {/* Email Contact */}
          <div className="col-lg-4 contactCol mainemail p-3">
            <div className="email">
              <i className="fa-solid fa-envelope"></i>
              <p className='roboto-p'>codyatra@gmail.com</p>
              <button className="contactBtn roboto-p">Email Us</button>
            </div>
          </div>

          {/* Location */}
          <div className="col-lg-4 contactCol mainlocation p-3">
            <div className="location">
              <i className="fa-solid fa-location-dot"></i>
              <p className='roboto-p'>Nagpur Maharashtra</p>
              <button className="contactBtn roboto-p">Get Directions</button>
            </div>
          </div>
        </div>

        <div className="container Contact-Form" >
          <h1>Contact Form </h1>
          <form>
            <div className="mb-3 contactinputDiv">
              <input type="Name" placeholder='Enter your name' id="Name" className="roboto-p" aria-describedby="name"
                onChange={(e) => {
                  // setName(e.target.value);
                  // setEnquiryDetails({
                  //   ...EnquiryDetails,
                  //   Name: e.target.value
                  // })
                }}
              />
            </div>
            <div className="mb-3 contactinputDiv">
              <input type="Name" placeholder='Enter your Phone Number' className="form-control roboto-p" id="phone" aria-describedby="phone"
                onChange={(e) => {
                  // setPhone(e.target.value)
                  // setEnquiryDetails({
                  //   ...EnquiryDetails,
                  //   phone: e.target.value
                  // })
                }
                }

              />
            </div>
            <div className="mb-3 contactinputDiv">
              <input type="Name" placeholder='Enter your Email' className="form-control roboto-p " id="email" aria-describedby="emailHelp"
                onChange={(e) => {
                  // setEmail(e.target.value);
                  // setEnquiryDetails({
                  //   ...EnquiryDetails,
                  //   email: e.target.value
                  // })
                }}

              />
            </div>
            <div className="mb-3 contactinputDiv">
              <input type="Name" placeholder='Enter your City' className="form-control roboto-p " id="city" aria-describedby="city"
                onChange={(e) => {
                  // setCity(e.target.value);
                  // setEnquiryDetails({
                  //   ...EnquiryDetails,
                  //   city: e.target.value
                  // })
                }}

              />
            </div>
           
            <div className=' text-center'>
              <button type="submit" className="btn btn-primary roboto-p" >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
