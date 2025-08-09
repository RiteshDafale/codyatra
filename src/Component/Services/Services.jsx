import React from 'react'
import '../Services/Services.css'

function Services() {
    return (
        <div>
            <div className='container text-center service-Margin p-2'>
                <div className="service_content">
                    <h2 className='starter_head1 display-5'>Our Services</h2>
                    <p className='text-start p-2 fs-5'>
                        We offer result-driven digital marketing services that blend creativity with data to fuel your brand’s growth.
                        From eye-catching campaigns to smart strategies that convert clicks into loyal customers, we’re here to elevate
                        your online presence. Our forward-thinking approach ensures your brand stays ahead in the ever-evolving digital landscape.
                    </p>
                </div>

                <div className="service_disp mt-4 border  border-dark">
                    <div className="accordion accordion-flush" id="accordionFlushExample">

                        {/* Website & App Development */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fw-bold fs-4 service_head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Website & App Development
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body border border-3 service_desc text-start">
                                    <ol className="list-group list-group-numbered development">
                                        <li className="list-group-item fs-5" role='button'>Custom Business Website (Static & Dynamic)</li>
                                        {/* <li>Custom Business Website (Static & Dynamic)</li> */}
                                         <li className="list-group-item fs-5">E-commerce Website (Custom)</li>
                                        <li className="list-group-item fs-5">Landing Pages (Sales, Lead Generation, Event)</li>
                                        <li className="list-group-item fs-5">Blog / Portfolio Websites</li>
                                        <li className="list-group-item fs-5">Web Applications (Progressive Web Apps)</li>
                                        <li className="list-group-item fs-5">Domain + Hosting Setup</li>
                                        <li className="list-group-item fs-5">Website Maintenance & Support</li>
                                        <li className="list-group-item fs-5">Website Speed & SEO Optimization</li>
                                    </ol>
                                    <div className="morebtn m-3">
                                        <button className='btn btn-success text-light'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Digital Marketing & Advertising */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fw-bold fs-4 service_head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Digital Marketing & Advertising
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body border border-3 service_desc text-start">
                                    <ol className="list-group list-group-numbered development">
                                        <li className="list-group-item fs-5">Google Ads (Search, Display, YouTube)</li>
                                        <li className="list-group-item fs-5">Meta Ads (Facebook & Instagram)</li>
                                        <li className="list-group-item fs-5">LinkedIn Ads (B2B Lead Generation)</li>
                                        <li className="list-group-item fs-5">Social Media Ads Funnel Strategy</li>
                                    </ol>
                                    <div className="morebtn m-3">
                                        <button className='btn btn-success text-light'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Media Management */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fw-bold fs-4 service_head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Social Media Management & Content Creation
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body service_desc text-start">
                                    <p className='fs-5 m-3 fw-bold text-decoration-underline'>Build an audience. Stay relevant. Stay ahead.</p>
                                    <ol className="list-group list-group-numbered development">
                                        <li className="list-group-item fs-5">Social Media Strategy & Calendar</li>
                                        <li className="list-group-item fs-5">Instagram/Facebook/LinkedIn Management</li>
                                        <li className="list-group-item fs-5">Content Creation (Posts, Reels, Stories)</li>
                                        <li className="list-group-item fs-5">Hashtag & Caption Strategy</li>
                                        <li className="list-group-item fs-5">Personal Branding Content</li>
                                        <li className="list-group-item fs-5">Carousel & Infographic Design</li>
                                        <li className="list-group-item fs-5">Reels & Shorts Editing</li>
                                        <li className="list-group-item fs-5">Content Repurposing (for multiple platforms)</li>
                                    </ol>
                                    <div className="morebtn m-3">
                                        <button className='btn btn-success text-light'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Video & Photography */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button fw-bold fs-4 service_head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="true" aria-controls="flush-collapseFour">
                                    Video & Photography (On Request / City-Specific)
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse collapse show" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body service_desc text-start">
                                    <p className='fs-5 m-3 fw-bold text-decoration-underline'>Visuals that stop the scroll.</p>
                                    <ol className="list-group list-group-numbered development">
                                        <li className="list-group-item fs-5">Product Photography</li>
                                        <li className="list-group-item fs-5">Food / Fashion / Fitness Shoots</li>
                                        <li className="list-group-item fs-5">Short Video Reels</li>
                                        <li className="list-group-item fs-5">Promo Video Creation</li>
                                    </ol>
                                    <div className="morebtn m-3">
                                        <button className='btn btn-success text-light'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 💼 Strategy & Consulting */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fw-bold fs-4 service_head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                                     Strategy & Consulting
                                </button>
                            </h2>
                            <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body service_desc text-start">
                                    <p className='fs-5 m-3 fw-bold  text-decoration-underline'>Get a roadmap, not confusion.</p>
                                    <ol className="list-group list-group-numbered development">
                                        <li className="list-group-item fs-5">Brand Strategy Blueprint</li>
                                        <li className="list-group-item fs-5">Growth Plan for Startups</li>
                                        <li className="list-group-item fs-5">Content Plan (30/60/90 days)</li>
                                        <li className="list-group-item fs-5">Budget Planning for Marketing</li>
                                    </ol>
                                    <div className="morebtn m-3">
                                        <button className='btn btn-success text-light'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 🎁 Freebies & Entry Services */}
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed fw-bold fs-4 service_head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                                    Freebies & Entry Services (Great for First-Time Clients)
                                </button>
                            </h2>
                            <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body service_desc text-start">
                                    <p className='fs-5 m-3 fw-bold  text-decoration-underline'>Build trust. Deliver value from Day 1.</p>
                                    <ol className="list-group list-group-numbered development">
                                        <li className="list-group-item fs-5">Free Business Profile Audit</li>
                                        <li className="list-group-item fs-5">Free Instagram Optimization Checklist</li>
                                        <li className="list-group-item fs-5">Free 15-min Strategy Call</li>
                                        <li className="list-group-item fs-5">1 Free Custom Post/Reel Design (Sample Work)</li>
                                    </ol>
                                    <div className="morebtn m-3">
                                        <button className='btn btn-success text-light'>Explore Freebies</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;
