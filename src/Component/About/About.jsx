import React, { useEffect } from 'react';
import '../About/About.css';

function About() {
  useEffect(() => {
    document.title = "About - Codyatra"
  })
  return (
    <div className="about-page">
      <header className="about-header text-center p-2">
        <h1 className="about-title  fw-bold">Who We Are & Why We Exist</h1>
        <p className="about-subtitle text-center">Welcome to <span className="codyatra-brand">Codyatra</span>—Your Growth Partner for the Digital Journey.</p>
      </header>

      <main className="about-content container my-5">
        <section className="about-mission mb-5">
          <div className="card mission-card p-4">
            <h3 className="card-title">Our Mission</h3>
            <p>
              We’re not just another digital agency. We’re a <span className="fw-bold">mission-driven team</span> of creatives, strategists, and developers who believe in doing things differently—with <span className="fw-bold">purpose, honesty, and real impact</span>.
            </p>
            <p>
              <span className="codyatra-brand">Codyatra</span> was born to help startups, small businesses, and personal brands <span className="fw-bold">grow with digital clarity</span>, without the confusion of jargon or empty promises. In a world of copy-paste marketing and automated solutions, we stand for <span className="fw-bold">depth, personalization, and lasting value</span>.
            </p>
          </div>
        </section>

        <section className="mission-card about-story my-5 ">
          <div className="card mission-card p-4">
            <h3 className="section-heading">Why We Started</h3>
            <p>
              We saw a common problem: businesses spending money on digital services without understanding what they were getting, or worse, getting no results at all. Too many agencies offered overpriced, cookie-cutter solutions with zero personal involvement.
            </p>
            <p>
              So, we decided to create <span className="fw-bold">Something Better, Something Real, Something that Actually Cares</span>.
            </p>
            <p className="story-conclusion">
              That’s how <span className="codyatra-brand">Codyatra</span> began—a journey (<span className="fw-bold">"Yatra"</span>) to bring clarity, creativity, and strategy back to the digital lives of modern businesses.
            </p>
          </div>
        </section>


        <section className="about-services mb-5">
          <div className="card mission-card p-4">
            <h3 className="section-heading">What We Do</h3>
            <div className="services-list">
              <p>We help you:</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="fw-bold">Build beautiful, functional websites</span> that convert visitors into customers.
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Create engaging content</span> (posts, reels, stories) that speaks your customer’s language.
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Run ads</span> that generate actual leads, not just likes.
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Develop a brand</span> that people trust and remember.
                </li>
                <li className="list-group-item">
                  <span className="fw-bold">Turn your digital presence into real business growth.</span>
                </li>
              </ul>
            </div>
            <p className="services-promise mt-4">
              We offer everything from website & app development to SEO, digital marketing, and branding—all under one roof. But more importantly, we offer a <span className="fw-bold">genuine partnership</span> that grows with you. We don’t just take orders; we help you make smart, strategic decisions.
            </p>
          </div>
        </section>



        <section className="about-new mb-5 text-center">
          <div className="card mission-card p-4">
            <h3 className="section-heading">We’re New—And Proud of It.</h3>
            <p>
              We’re honest about who we are. We're a young agency with a big vision and even bigger commitment.
            </p>
            <div className="new-advantages">
              <p className="fw-bold">Being new means we're:</p>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">More energetic and involved.</li>
                <li className="list-group-item">More flexible and adaptive.</li>
                <li className="list-group-item">More hungry to <span className="fw-bold">prove our worth</span>.</li>
              </ul>
            </div>
            <p className="new-promise">
              We don’t believe in shortcuts. We believe in <span className="fw-bold">showing up every day, doing the hard work</span>, and building our name—one successful project at a time. Your success is <span className="fw-bold">our reputation</span>.
            </p>
          </div>
        </section>



        <section className="about-who-we-work-with mb-5">
          <div className="card mission-card p-4">
            <h3 className="section-heading">Who We Work With</h3>
            <p>We're the perfect fit for:</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Startup founders & entrepreneurs.</li>
              <li className="list-group-item">Local business owners (cafes, gyms, clinics, shops).</li>
              <li className="list-group-item">Personal brands (coaches, creators, professionals).</li>
              <li className="list-group-item">Small businesses ready to scale.</li>
              <li className="list-group-item">Teams who want strategy, not just services.</li>
            </ul>
            <p className="mt-3">Whether you’re just getting started or ready to grow online, we're here to make that journey easier, faster, and more effective.</p>
          </div>
        </section>



        <section className="about-closing mb-5 text-center">
          <div className="card mission-card p-4">
            <h3 className="section-heading">Let's Build Something Meaningful</h3>
            <p>We don’t want to be the biggest agency. We want to be <span className="fw-bold">your favorite</span>. The one you trust. The one you rely on. The one you recommend.</p>
            <p>We’re in this for the <span className="fw-bold">long game</span>. If you’re serious about building a brand that matters and working with people who <span className="fw-bold">genuinely care</span>, then you're in the right place.</p>
                 </div>
            <h5 className="closing-statement fw-bolder mt-4">
              This is <span className="codyatra-brand">Codyatra</span>. The digital journey begins here. We can’t wait to walk it with you.
            </h5>
     
        </section>
      </main>
    </div>
  );
}

export default About;