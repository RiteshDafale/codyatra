import React, { useEffect } from 'react';
import '../OurServices/OurServices.css';
import webIcon from '../OurServices/Icons/web.png';
import checkmark from '../OurServices/Icons/checkmark.png';
import marketingIcon from '../OurServices/Icons/Digital_marketing1.png';
// import socialMediaIcon from '../OurServices/Icons/social-media.png';
// import videoIcon from '../OurServices/Icons/video.png';
// import strategyIcon from '../OurServices/Icons/strategy.png';
// import freebiesIcon from '../OurServices/Icons/freebies.png';

function Services() {
  useEffect(() => {
    document.title = "Services - Codyatra";
  }, []);

  return (
    <div className="servicesContainer ">
      <div className="serviceMainHeading">
        <h1>Services of Codyatra</h1>
      </div>
      <div className="serviceContent ">

        {/* Website & App Development */}
        <div className=" serviceSection">
          <div className="serviceHeader">
            <img src={webIcon} alt="Web Development" className="serviceIcon" />
            <div className="serviceTitle">
              <h3 className=''>Website & App Development</h3>
              <p>Build your digital foundation.</p>
            </div>
          </div>
          {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_T0wLYMTpZbH4LkSoC2ZcRTkoTJg2_oksYw&s" alt="some issue" /> */}
          <ul className="serviceList">
            <li><img src={checkmark} className='checkmark' alt="some issue" />Custom Business Website (Static & Dynamic)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />E-commerce Website (Custom)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Landing Pages (Sales, Lead Generation, Event)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Blog / Portfolio Websites</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Web Applications (Progressive Web Apps)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Domain + Hosting Setup</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Website Maintenance & Support</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Website Speed & SEO Optimization</li>
          </ul>
        </div>

        {/* Digital Marketing & Advertising */}
        <div className="serviceSection">
          <div className="serviceHeader">
            <img src={marketingIcon} alt="Digital Marketing" className="serviceIcon" />
            <div className="serviceTitle">
              <h3> Digital Marketing & Advertising</h3>
              <p>Drive traffic, generate leads, and grow consistently.</p>
            </div>
          </div>
          <ul className="serviceList">
            <li><img src={checkmark} className='checkmark' alt="some issue" />Google Ads (Search, Display, YouTube)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Meta Ads (Facebook & Instagram)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />LinkedIn Ads (B2B Lead Generation)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Social Media Ads Funnel Strategy</li>
          </ul>
        </div>


        {/* Other sections (Social Media, Video, Strategy, Freebies) */}

      </div>
    </div>
  );
}

export default Services;
