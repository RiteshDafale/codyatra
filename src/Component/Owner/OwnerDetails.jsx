import React from 'react';
import '../Owner/OwnerDetails.css';
import OwnerImage from '../Owner/OwnerImage/owner.jpg';

function OwnerDetails() {
  return (
    <div className="container-fluid owner-section py-5">
      <div className="row d-flex align-items-center ">
        
        {/* Text Section */}
        <div className="col-lg-6 col-md-12 owner-text">
          <h1 className="text-center mb-4">About the Founder</h1>
          <div className="owner-content px-4">
            <p>
              Hi, I’m <span className="highlight-owner">Kanishk Mehta</span>, founder of <span className="highlight-owner">CODYATRA</span>.
              This isn’t just a company intro — it’s a glimpse into my journey.
            </p>
            <p>
              Our story is still being written — built on bold steps, challenges, and real growth.
            </p>
            <p>
              I don't have all the answers. But I learn daily — from clients, my team, and this fast-evolving digital world.
            </p>
            <p>
              What I promise is simple: <strong>effort, honesty, creativity, and full commitment</strong> — every day.
            </p>
            <p>
              This is just the beginning. If you’re ready to build something meaningful — let’s start this journey together.
            </p>
            <p>
              Let’s turn ideas into action.<br />
              Let’s make your brand unforgettable.<br />
              Let’s walk this <strong>Yatra</strong> together.
            </p>
            <p className="mt-4">
              <span className="highlight-owner fw-bold">Kanishk Mehta</span><br />
              Founder, CODYATRA<br />
              <em>“Your growth is our journey.”</em>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="col-lg-6 col-md-12 owner-image-wrapper">
          <img
            src={OwnerImage}
            alt="Founder"
            className="img-fluid owner-img"
          />
        </div>

      </div>
    </div>
  );
}

export default OwnerDetails;
