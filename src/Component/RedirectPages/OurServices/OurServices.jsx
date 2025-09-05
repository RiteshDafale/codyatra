import React, { useEffect } from 'react'
import '../OurServices/OurServices.css';
import webIcon from '../OurServices/Icons/web.png';
import checkmark from '../OurServices/Icons/checkmark.png';
import marketingIcon from '../OurServices/Icons/Digital_marketing1.png';
import socialMediaIcon from '../OurServices/Icons/social-media.png';
import videoIcon from '../OurServices/Icons/video.png';
import strategyIcon from '../OurServices/Icons/strategy.gif';
import freebiesIcon from '../OurServices/Icons/free.png';
import ScrollFloatText from '../OurServices/ScrollFloatText';

function OurServices() {
  useEffect(() => {
    document.title = "Services - Codyatra";
  }, []);
  return (
    <div>
      <div className="container-fluid  ServiceMaindiv">
        <h1 className='text-center mt-3'>Our Services</h1>
        <div className="row firstRow">
          <div className="col-lg-6 serviceCol">
            <div className=" firstList">
              <div className=" serviceSection">
                <div className="serviceHeader">
                  <div className="webIcon">
                    <img src={webIcon} alt="Web Development" />
                  </div>
                  <div className="serviceTitle">
                    <h3 className=''>Website & App Development</h3>
                    <p>Build your digital foundation.</p>
                  </div>
                </div>
                <ul className="serviceList">
                  {/* <img src={checkmark} className='checkmark' alt="some issue" /> */}
                  <li className='text-light'><img src={checkmark} className='checkmark' alt="some issue" />Custom Business Website (Static & Dynamic)</li>
                  <li className='text-light'><img src={checkmark} className='checkmark' alt="some issue" />E-commerce Website (Custom)</li>
                  <li className='text-light'><img src={checkmark} className='checkmark' alt="some issue" />Landing Pages (Sales, Lead Generation, Event)</li>
                  <li className='text-light'><img src={checkmark} className='checkmark' alt="some issue" />Blog / Portfolio Websites</li>
                  <li className='text-light'><img src={checkmark} className='checkmark' alt="some issue" />Web Applications (Progressive Web Apps)</li>
                  <li className='text-light'><img src={checkmark} className='checkmark' alt="some issue" />Domain + Hosting Setup</li>
                  <li className='text-light'><img src={checkmark} className='checkmark' alt="some issue" />Website Maintenance & Support</li>
                  <li className='text-light'><img src={checkmark} className='checkmark' alt="some issue" />Website Speed & SEO Optimization</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 serviceCol"> <div className="container-fluid firstList">
            <div className=" serviceSection">
              <div className="serviceHeader">
                <div className="socialIcon">
                  <img src={socialMediaIcon} alt="Web Development" />

                </div>
                <div className="serviceTitle">
                  <h3>Social Media Management & Content Creation</h3>
                  <p>Build your digital foundation.</p>
                </div>
              </div>
              <ul className="serviceList">
                {/* <img src={checkmark} className='checkmark' alt="some issue" /> */}
                <li><img src={checkmark} className='checkmark' alt="some issue" />Social Media Strategy & Calendar</li>
                <li><img src={checkmark} className='checkmark' alt="some issue" />Instagram/Facebook/LinkedIn Management</li>
                <li><img src={checkmark} className='checkmark' alt="some issue" />Content Creation (Posts, Reels, Stories)</li>
                <li><img src={checkmark} className='checkmark' alt="some issue" />Hashtag & Caption Strategy</li>
                <li><img src={checkmark} className='checkmark' alt="some issue" />Personal Branding Content</li>
                <li><img src={checkmark} className='checkmark' alt="some issue" />Carousel & Infographic Design</li>
                <li><img src={checkmark} className='checkmark' alt="some issue" />Reels & Shorts Editing</li>
                <li><img src={checkmark} className='checkmark' alt="some issue" />Content Repurposing (for multiple platforms)</li>
              </ul>
            </div>
          </div>
          </div>
        </div>

        {/* Second row */}
        <div className="row firstRow">
          <div className="col-lg-6 serviceCol">
            <div className=" firstList">
              <div className=" serviceSection">
                <div className="serviceHeader">
                  <div className="videoIcon">
                    <img src={videoIcon} alt="Web Development" />
                  </div>
                  <div className="serviceTitle">
                    <h3 className=''>Video & Photography (On Request / City-Specific</h3>
                    <p>Build your digital foundation.</p>
                  </div>
                </div>
                <ul className="serviceList">
                  {/* <img src={checkmark} className='checkmark' alt="some issue" /> */}
                  <li><img src={checkmark} className='checkmark' alt="some issue" />Product Photography</li>
                  <li><img src={checkmark} className='checkmark' alt="some issue" />Food / Fashion / Fitness Shoots</li>
                  <li><img src={checkmark} className='checkmark' alt="some issue" />Short Video Reels </li>
                  <li><img src={checkmark} className='checkmark' alt="some issue" />Promo Video Creation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 serviceCol"> <div className="container-fluid firstList">
            <div className=" serviceSection">
              <div className="serviceHeader">
                <div className="strategyIcon">
                  <img src={marketingIcon} alt="Web Development" />

                </div>
                <div className="serviceTitle">
                  <h3> Digital Marketing & Advertising</h3>
                  <p>Build your digital foundation.</p>
                </div>
              </div>
              <ul className="serviceList">
                {/* <img src={checkmark} className='checkmark' alt="some issue" /> */}
                  <li><img src={checkmark} className='checkmark' alt="some issue" />Google Ads (Search, Display, YouTube)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Meta Ads (Facebook & Instagram)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />LinkedIn Ads (B2B Lead Generation)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Social Media Ads Funnel Strategy</li>
              </ul>
            </div>
          </div>
          </div>
        </div>
        {/* third row */}
        <div className="row firstRow">
          <div className="col-lg-6 serviceCol">
            <div className=" firstList">
              <div className=" serviceSection">
                <div className="serviceHeader">
                  <div className="videoIcon">
                    <img src={freebiesIcon} alt="Web Development" />
                  </div>
                  <div className="serviceTitle">
                    <h3 className=''>Freebies & Entry Services (Great for First-Time Clients)</h3>
                  </div>
                </div>
                <ul className="serviceList">
                  {/* <img src={checkmark} className='checkmark' alt="some issue" /> */}
                  <li><img src={checkmark} className='checkmark' alt="some issue" />Free Business Profile Audit</li>
                  <li><img src={checkmark} className='checkmark' alt="some issue" />Free Instagram Optimization Checklist</li>
                  <li><img src={checkmark} className='checkmark' alt="some issue" />Free 15-min Strategy Call</li>
                  <li><img src={checkmark} className='checkmark' alt="some issue" />1 Free Custom Post/Reel Design (Sample Work)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 serviceCol"> <div className="container-fluid firstList">
            <div className=" serviceSection">
              <div className="serviceHeader">
                <div className="strategyIcon">
                  <img src={strategyIcon} alt="Web Development" />

                </div>
                <div className="serviceTitle">
                  <h3>Strategy & Consulting</h3>
                  <p>Build your digital foundation.</p>
                </div>
              </div>
              <ul className="serviceList">
                {/* <img src={checkmark} className='checkmark' alt="some issue" /> */}
                <li><img src={checkmark} className='checkmark' alt="some issue" />Brand Strategy Blueprint</li>
                <li><img src={checkmark} className='checkmark' alt="some issue" />Growth Plan for Startups</li>
                <li><img src={checkmark} className='checkmark' alt="some issue" />Content Plan (30/60/90 days)</li>
                <li><img src={checkmark} className='checkmark' alt="some issue" />Budget Planning for Marketing</li>
              </ul>
            </div>
          </div>
          </div>
        </div>


      </div>
    </div>
  )
}

export default OurServices
