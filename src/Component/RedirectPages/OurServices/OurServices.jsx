import React, { useEffect } from 'react';
import '../OurServices/OurServices.css';
import webIcon from '../OurServices/Icons/web.png';
// import marketingIcon from '../OurServices/Icons/marketing.png';
// import socialMediaIcon from '../OurServices/Icons/social-media.png';
// import videoIcon from '../OurServices/Icons/video.png';
// import strategyIcon from '../OurServices/Icons/strategy.png';
// import freebiesIcon from '../OurServices/Icons/freebies.png';

function Services() {
  useEffect(() => {
    document.title = "Services - Codyatra";
  }, []);

  return (
    <div className="servicesContainer">
      <div className="serviceMainHeading">
        <h1>Services of Codyatra</h1>
      </div>
      <div className="serviceContent">
        
        {/* Website & App Development */}
        <div className="serviceSection">
          <div className="serviceHeader">
            <img src={webIcon} alt="Web Development" className="serviceIcon" />
            <div className="serviceTitle">
              <h3>Website & App Development</h3>
              <p>Build your digital foundation.</p>
            </div>
          </div>
          <ul className="serviceList">
            <li>Custom Business Website (Static & Dynamic)</li>
            <li>E-commerce Website (Custom)</li>
            <li>Landing Pages (Sales, Lead Generation, Event)</li>
            <li>Blog / Portfolio Websites</li>
            <li>Web Applications (Progressive Web Apps)</li>
            <li>Domain + Hosting Setup</li>
            <li>Website Maintenance & Support</li>
            <li>Website Speed & SEO Optimization</li>
          </ul>
        </div>

        {/* Digital Marketing & Advertising */}
        <div className="serviceSection">
          <div className="serviceHeader">
            <img src={webIcon} alt="Digital Marketing" className="serviceIcon" />
            <div className="serviceTitle">
              <h3>🎯 Digital Marketing & Advertising</h3>
              <p>Drive traffic, generate leads, and grow consistently.</p>
            </div>
          </div>
          <ul className="serviceList">
            <li>Google Ads (Search, Display, YouTube)</li>
            <li>Meta Ads (Facebook & Instagram)</li>
            <li>LinkedIn Ads (B2B Lead Generation)</li>
            <li>Social Media Ads Funnel Strategy</li>
          </ul>
        </div>


        {/* Other sections (Social Media, Video, Strategy, Freebies) */}
        
      </div>
    </div>
  );
}

export default Services;
