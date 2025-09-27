import React, { useEffect, useState } from 'react'
import '../OurServices/OurServices.css';
import webIcon from '../OurServices/Icons/web.gif';
import checkmark from '../OurServices/Icons/checkmark.png';
import marketingIcon from '../OurServices/Icons/Digital_marketing.gif';
import socialMediaIcon from '../OurServices/Icons/social-media.gif';
import videoIcon from '../OurServices/Icons/video.gif';
import strategyIcon from '../OurServices/Icons/strategy.gif';
import freebiesIcon from '../OurServices/Icons/free.gif';
import ScrollFloatText from '../OurServices/ScrollFloatText';

function OurServices() {
  useEffect(() => {
    document.title = "Services - Codyatra";
  }, []);

  const [isServiceLoading,setisServiceLoading] = useState(true);
  return (
    <div>
      <div className="container-fluid  ServiceMaindiv">
        <h1 className='text-center Poppins-head mt-3'>Our Services</h1>
        <div className="row firstRow">
          <div className="col-lg-6 serviceCol">
            <div className=" firstList">
              <div className=" serviceSection">
                <div className="serviceHeader">
                  <div className="webIcon">
                    {/* <img src={webIcon} alt="Web Development" /> */}
                       <img loading='lazy' src={webIcon} alt="Web Development"  />
                  </div>
                  <div className="serviceTitle">
                    <h3 className='Poppins-subhead'>Website & App Development</h3>
                    <p className='roboto-p text-secondary fw-bold'>Build your digital foundation.</p>
                  </div>
                </div>
                <ul className="serviceList">
                  {/* <img src={checkmark} className='checkmark' alt="some issue" /> */}
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Custom Business Website (Static & Dynamic)</li>
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />E-commerce Website (Custom)</li>
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Landing Pages (Sales, Lead Generation, Event)</li>
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Blog / Portfolio Websites</li>
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Web Applications (Progressive Web Apps)</li>
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Domain + Hosting Setup</li>
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Website Maintenance & Support</li>
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Website Speed & SEO Optimization</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 serviceCol"> <div className="container-fluid firstList">
            <div className=" serviceSection">
              <div className="serviceHeader">
                <div className="socialIcon">
                  <img loading='lazy' src={socialMediaIcon} alt="Web Development" />

                </div>
                <div className="serviceTitle">
                  <h3 className='Poppins-subhead'>Social Media Management & Content Creation</h3>
                  <p className='roboto-p text-secondary fw-bold'>Build your digital foundation.</p>
                </div>
              </div>
              <ul className="serviceList">
                {/* <img src={checkmark} className='checkmark' alt="some issue" /> */}
                <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Social Media Strategy & Calendar</li>
                <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Instagram/Facebook/LinkedIn Management</li>
                <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Content Creation (Posts, Reels, Stories)</li>
                <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Hashtag & Caption Strategy</li>
                <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Personal Branding Content</li>
                <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Carousel & Infographic Design</li>
                <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Reels & Shorts Editing</li>
                <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Content Repurposing (for multiple platforms)</li>
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
                    <img loading='lazy' src={videoIcon} alt="Web Development" />
                  </div>
                  <div className="serviceTitle">
                    <h3 className='Poppins-subhead'>Video & Photography (On Request / City-Specific</h3>
                    <p className='roboto-p text-secondary fw-bold'>Build your digital foundation.</p>
                  </div>
                </div>
                <ul className="serviceList">
                  {/* <img src={checkmark} className='checkmark' alt="some issue" /> */}
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Product Photography</li>
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Food / Fashion / Fitness Shoots</li>
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Short Video Reels </li>
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Promo Video Creation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 serviceCol"> <div className="container-fluid firstList">
            <div className=" serviceSection">
              <div className="serviceHeader">
                <div className="strategyIcon">
                  <img loading='lazy' src={marketingIcon} alt="Web Development" />

                </div>
                <div className="serviceTitle">
                  <h3 className='Poppins-subhead'> Digital Marketing & Advertising</h3>
                  <p className='roboto-p text-secondary fw-bold'>Build your digital foundation.</p>
                </div>
              </div>
              <ul className="serviceList">
                {/* <img src={checkmark} className='checkmark' alt="some issue" /> */}
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Google Ads (Search, Display, YouTube)</li>
            <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Meta Ads (Facebook & Instagram)</li>
            <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />LinkedIn Ads (B2B Lead Generation)</li>
            <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Social Media Ads Funnel Strategy</li>
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
                    <img loading='lazy' src={freebiesIcon} alt="Web Development" />
                  </div>
                  <div className="serviceTitle">
                    <h3 className='Poppins-subhead'>Freebies & Entry Services (Great for First-Time Clients)</h3>
                    <p className='roboto-p text-secondary fw-bold'>Build trust. Deliver value from Day 1.</p>
                  </div>
                </div>
                <ul className="serviceList">
                  {/* <img src={checkmark} className='checkmark' alt="some issue" /> */}
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Free Business Profile Audit</li>
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Free Instagram Optimization Checklist</li>
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Free 15-min Strategy Call</li>
                  <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />1 Free Custom Post/Reel Design (Sample Work)</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6 serviceCol"> <div className="container-fluid firstList">
            <div className=" serviceSection">
              <div className="serviceHeader">
                <div className="strategyIcon">
                  <img loading='lazy' src={strategyIcon} alt="Web Development" />

                </div>
                <div className="serviceTitle">
                  <h3 className='Poppins-subhead'>Strategy & Consulting</h3>
                  <p className='roboto-p text-secondary fw-bold'>Build your digital foundation.</p>
                </div>
              </div>
              <ul className="serviceList">
                {/* <img src={checkmark} className='checkmark' alt="some issue" /> */}
                <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Brand Strategy Blueprint</li>
                <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Growth Plan for Startups</li>
                <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Content Plan (30/60/90 days)</li>
                <li className='roboto-p'><img src={checkmark} className='checkmark' alt="some issue" />Budget Planning for Marketing</li>
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
