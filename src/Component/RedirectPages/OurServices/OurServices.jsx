import React, { useEffect } from 'react';
import '../OurServices/OurServices.css';
import webIcon from '../OurServices/Icons/web.png';
import checkmark from '../OurServices/Icons/checkmark.png';
import marketingIcon from '../OurServices/Icons/Digital_marketing1.png';
import socialMediaIcon from '../OurServices/Icons/social-media.png';
import videoIcon from '../OurServices/Icons/video.png';
import strategyIcon from '../OurServices/Icons/strategy.gif';
import freebiesIcon from '../OurServices/Icons/free.png';
import ScrollFloatText from '../OurServices/ScrollFloatText';
// E:\Naresh IT\Startup Plan\Codyatra\portfolio\src\Component\ScrollFloatText.jsx



 

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
             <ScrollFloatText
                animationDuration={2}
                ease='power4.out'
                scrollStart='top bottom '
                scrollEnd='bottom center'
                stagger={0.03}
              >
            <li><img src={checkmark} className='checkmark' alt="some issue" />Custom Business Website (Static & Dynamic)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />E-commerce Website (Custom)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Landing Pages (Sales, Lead Generation, Event)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Blog / Portfolio Websites</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Web Applications (Progressive Web Apps)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Domain + Hosting Setup</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Website Maintenance & Support</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Website Speed & SEO Optimization</li>
            </ScrollFloatText>
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
              <ScrollFloatText
                animationDuration={2}
                ease='power4.out'
                scrollStart='top bottom '
                scrollEnd='bottom center'
                stagger={0.03}
              >
            <li><img src={checkmark} className='checkmark' alt="some issue" />Google Ads (Search, Display, YouTube)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Meta Ads (Facebook & Instagram)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />LinkedIn Ads (B2B Lead Generation)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue" />Social Media Ads Funnel Strategy</li>
            </ScrollFloatText>
          </ul>
        </div>

        {/* Social Media Management & Content Creation */}
        <div className="serviceSection">
          <div className="serviceHeader">
            <img src={socialMediaIcon} alt="Digital Marketing" className="serviceIcon" />
            <div className="serviceTitle">
              <h3>Social Media Management & Content Creation</h3>
              <p>Build an audience. Stay relevant. Stay ahead.</p>
            </div>
          </div>
          <ul className="serviceList">
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

         {/* Video & Photography (On Request / City-Specific)*/}
        <div className="serviceSection">
          <div className="serviceHeader">
            <img src={videoIcon} alt="Digital Marketing" className="serviceIcon" />
            <div className="serviceTitle">
              <h3>Video & Photography (On Request / City-Specific)</h3>
              <p>Visuals that stop the scroll.</p>
            </div>
          </div>
          <ul className="serviceList">
            <li><img src={checkmark} className='checkmark' alt="some issue"/>Product Photography</li>
            <li><img src={checkmark} className='checkmark' alt="some issue"/>Food / Fashion / Fitness Shoots</li>
            <li><img src={checkmark} className='checkmark' alt="some issue"/>Short Video Reels </li>
            <li><img src={checkmark} className='checkmark' alt="some issue"/>Promo Video Creation</li>
          </ul>
        </div>

        {/* Strategy and Consulting */}
          <div className="serviceSection">
          <div className="serviceHeader">
            <img src={strategyIcon} alt="Digital Marketing" className="serviceIcon strategyGif " style={{cursor:"pointer"}}/>
            <div className="serviceTitle">
              <h3>Strategy & Consulting</h3>
              <p>Get a roadmap, not confusion.</p>
            </div>
          </div>
          <ul className="serviceList">
            <li><img src={checkmark} className='checkmark' alt="some issue"/>Brand Strategy Blueprint</li>
            <li><img src={checkmark} className='checkmark' alt="some issue"/>Growth Plan for Startups</li>
            <li><img src={checkmark} className='checkmark' alt="some issue"/>Content Plan (30/60/90 days)</li>
            <li><img src={checkmark} className='checkmark' alt="some issue"/>Budget Planning for Marketing</li>
          </ul>
        </div>


{/* Freebies & Entry Services (Great for First-Time Clients) */}
         <div className="serviceSection">
          <div className="serviceHeader">
            <img src={freebiesIcon} alt="Digital Marketing" className="serviceIcon strategyGif " style={{cursor:"pointer"}}/>
            <div className="serviceTitle">
              <h3>Freebies & Entry Services (Great for First-Time Clients)</h3>
              <p>Build trust. Deliver value from Day 1.</p>
            </div>
          </div>
          <ul className="serviceList">
            <li><img src={checkmark} className='checkmark' alt="some issue"/>Free Business Profile Audit</li>
            <li><img src={checkmark} className='checkmark' alt="some issue"/>Free Instagram Optimization Checklist</li>
            <li><img src={checkmark} className='checkmark' alt="some issue"/>Free 15-min Strategy Call</li>
            <li><img src={checkmark} className='checkmark' alt="some issue"/>1 Free Custom Post/Reel Design (Sample Work)</li>
          </ul>
        </div>


      </div>
    </div>
  );
}

export default Services;
