import React from 'react'
import '../Footer/Footer.css';
import logo from '../Images/Logo/Logo.png';
import { useNavigate, Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid bg-dark footer text-light d-flex flex-column justify-content-center align-items-center'>
      <div className="row  w-full">
        <div className="col-lg-3 col-sm-12 footercolumn firstcol d-flex flex-column justify-content-center align-items-center">
          <div className="text text-center px-2 mt-2">
            <p>
              <span className='fw-bolder' style={{color:"#5188eae6" }}>CODYATRA </span>was born with a clear <span className='fw-bold'>vision:</span> To help startups, small businesses,
              personal brands, and local entrepreneurs grow with digital clarity—without
              falling into the trap of fake promises or confusing jargon.
            </p>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 footercolumn d-flex flex-column justify-content-center align-items-center ">
          <div className="servicesCotnent my-2">
            <h3 className='text-center'>Services</h3>
            <div className="list">
              <ul>
                <li>Website & App Development</li>
                <li>Digital Marketing & Advertising</li>
                <li>Social Media Management</li>
                <li>Video & Photography (On Request / City-Specific)</li>
                <li>Strategy & Consulting </li>
                <li>Freebies & Entry Services </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 footercolumn">
           <h3 className='text-center'>Important Links</h3>
          <div className="link  ">
            <ul>
              <li><p className='text-center'><a class="link-opacity-25-hover" href="/codyatra">Home</a></p></li>
                <li><p className='text-center'><a class="link-opacity-25-hover" href="/codyatra/outservices">Our Services</a></p></li>
                <li><p className='text-center'><a class="link-opacity-25-hover" href="/codyatra/pricingplan">Pricing Plan</a></p></li>
                <li><p className='text-center'><a class="link-opacity-25-hover" href="/codyatra/testmonial">Testimonial</a></p></li>
                <li><p className='text-center'><a class="link-opacity-25-hover" href="/codyatra/Dashboard">Dashboard</a></p></li>
                <li><p className='text-center'><a class="link-opacity-25-hover" href="/codyatra/FreeTools">Free Tools</a></p></li>
                <li><p className='text-center'><a class="link-opacity-25-hover" href="/codyatra/about">About Codyatra</a></p></li>
              </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 footercolumn">Social media icons and Contact info</div>
      </div>
    </div>
  )
}

export default Footer
