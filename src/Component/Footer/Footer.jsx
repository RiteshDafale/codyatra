import React from 'react'
import '../Footer/Footer.css';
import logo from '../Images/Logo/Logo.png';
import { useNavigate, Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container-fluid bg-dark footer text-light d-flex flex-column justify-content-center align-items-center'>
      <div className="row  w-full">
        <div className="col-lg-3 col-sm-12 footercolumn firstcol d-flex flex-column justify-content-center align-items-center">
          {/* <div className="content">
            <img src={logo} alt="Codyatra Logo" className='Mainlogo' />
          </div> */}
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
            <h2 className='text-center'>Services</h2>
            <div className="list">
              <ul>
                <li>Website & App Development</li>
                <li>Digital Marketing & Advertising</li>
                <li>Social xMedia Management & Content Creation</li>
                <li>Video & Photography (On Request / City-Specific)</li>
                <li>Strategy & Consulting </li>
                <li>Freebies & Entry Services (Great for First-Time Clients)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 footercolumn">
          <div className="link">
             {/* <Link className="nav-link text-light hoverA " to="/codyatra"> Home</Link> */}
          </div>
        </div>
        <div className="col-lg-3 col-sm-12 footercolumn">Social media icons and Contact info</div>
      </div>
    </div>
  )
}

export default Footer
