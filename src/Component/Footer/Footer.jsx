import React from 'react'
import '../Footer/Footer.css';
import logo from '../Images/Logo/Logo.png';
import { useNavigate, Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid bg-dark footer text-light d-flex flex-column justify-content-center align-items-center'>
      <div className="row  w-full">
        <div className="col-lg-4 col-sm-12 footercolumn firstcol d-flex flex-column justify-content-center align-items-center">
          <div className="text text-start  px-2 mt-2">
            <p className='roboto-p'>
              <span className='fw-bolder'>CODYATRA </span>was born with a clear <span className='fw-bold'>vision:</span> To help startups, small businesses,
              personal brands, and local entrepreneurs grow with digital clarity—without
              falling into the trap of fake promises or confusing jargon.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 footercolumn d-flex flex-column justify-content-center align-items-center ">
          <div className="servicesCotnent my-2">
            <h3 className='text-center mt-2'>Services</h3>
            <div className="list">
              <ul>
                <li className='roboto-p'>Website & App Development</li>
                <li className='roboto-p'>Digital Marketing & Advertising</li>
                <li className='roboto-p'>Social Media Management</li>
                <li className='roboto-p'>Video & Photography</li>
                <li className='roboto-p'>Strategy & Consulting </li>
                <li className='roboto-p'>Freebies & Entry Services </li>
              </ul>
            </div>
          </div>
        </div>
       
        <div className="col-lg-4 col-sm-12 footercolumn d-flex justify-content-center align-items-center flex-column ">
          <h3>Social Media </h3>
          <div className=' d-flex '>
          <div className="instagram">
            <i class="fa-brands fa-instagram insticon " title='Instagram'
              onClick={() => {
                document.location.href = "https://www.instagram.com/"
              }}
            ></i>
          </div>
          <div className="instagram">
            <i class="fa-brands fa-facebook insticon"
              onClick={() => {
                document.location.href = "https://www.facebook.com/"
              }}></i>
          </div>
          <div className="instagram">
            <i class="fa-brands fa-whatsapp insticon"></i>
          </div>
          <div className="instagram">
            <i class="fa-regular fa-envelope insticon"
              onClick={() => {
                document.location.href = "#"
              }}></i>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
