import React from 'react';
import '../Owner/OwnerDetails.css';
import OwnerImage from '../Owner/OwnerImage/owner.jpg';

function OwnerDetails() {
  return (
    <div className="container-fluid py-3  d-flex flex-col justify-content-center align-items-center">
      <div className="row align-items-center">

        {/* Text Section */}
        <div className="col-lg-6 col-sm-12 mb-4 ownercol">
          <h1 className="text-center mb-4">About Founder</h1>
          <div className="owner-content d-flex flex-column justify-content-center align-items-center ">
            <p className='text-start'>
              Hi, I’m <span className="highlight-owner">Kanishk Mehta</span>, founder of <span className="highlight-owner">CODYATRA</span>. This isn’t just a company intro — it’s a glimpse into my journey.
            </p>
            <p className='text-start'>
              Our story is still unfolding — built on bold steps, learning, and growth.
            </p>
            <p className='text-start'>
              I don't claim to know everything. I learn every day — from our clients, our team, and this evolving digital world.
            </p>
            <p className='text-start'>
              What I do promise is <strong>effort, honesty, creativity, and commitment</strong> — every single day.
            </p>
            <p className='text-start'>
              This is just the beginning. If you’re ready to grow and create something impactful — let’s build together.
            </p>
            <p className='text-start'>
              Let’s turn ideas into action.<br />
              Let’s make your brand unforgettable.<br />
              Let’s walk this <strong>Yatra</strong> together.
            </p>
            <p className="mt-3">
              <span className="highlight-owner fw-bold">Kanishk Mehta</span><br />
              Founder, CODYATRA<br />
              <em>“Your growth is our journey.”</em>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 col-sm-12 ownercol">
          <div className="owner-image-wrapper ">
            <img
              src={OwnerImage}
              alt="Founder"
              className="img-fluid owner-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OwnerDetails;
