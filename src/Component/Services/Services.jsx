import React from 'react'
import '../Services/Services.css'

function Services() {

    // Add servies via dianai
    return (
        <div>
            <div className='container text-center service-Margin border border-1 border-dark p-2 '>
                <div className="service_content">
                    <h2 className='starter_head1 '>Our Services</h2>
                    <p className='text-start  p-2'>We offer result-driven digital marketing services that blend creativity with data to fuel your brand’s growth. From eye-catching campaigns to smart strategies that convert clicks into loyal customers, we’re here to elevate your online presence. Our forward-thinking approach ensures your brand stays ahead in the ever-evolving digital landscape.</p>
                </div>
                <div className="service_disp mt-4">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-bold fs-4 service_head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Search Engine Optimization (SEO)
                                </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body border border-3 service_desc">
                                    <p className='text-start fs-5'><span className='fw-bold '>Search Engine Optimization (SEO)</span>    helps your website rank higher on search engines like Google, driving organic traffic without paid ads. It involves optimizing your site's content, structure, and performance to make it more visible and relevant to users' search queries. A strong <span className='fw-bold '>Search Engine Optimization (SEO)</span> strategy builds long-term brand credibility and consistent traffic growth.</p>
                                    <div className="morebtn text-start">
                                        <button className='btn btn-success text-light'>Read More </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed fw-bold fs-4 service_head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    Social Media Marketing (SMM)
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body border border-3 service_desc">
                                    <p className='text-start fs-5 '><span className='fw-bold'>Social Media Marketing(SMM)</span>  uses platforms like Instagram, Facebook, LinkedIn, and X (Twitter) to connect with your audience, build brand loyalty, and boost engagement. It includes content creation, community management, paid ads, and performance analytics. With billions of active users, social media is a powerful space to amplify your message and grow your customer base.</p>
                                    <div className="morebtn text-start">
                                        <button className='btn btn-success text-light'>Read More </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed  fw-bold fs-4 service_head" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Pay-Per-Click Advertising (PPC)
                                </button>
                            </h2>
                            <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body service_desc">
                                    <p className='text-start fs-5 '><span className='fw-bold'> Pay-Per-Click Advertising (PPC)</span> is a paid marketing model where you only pay when someone clicks your ad—commonly seen on Google Ads and social media platforms. It’s highly targeted, measurable, and delivers instant visibility to your brand. Ideal for boosting traffic, promoting launches, or running time-sensitive campaigns.</p>
                                    <div className="morebtn text-start">
                                        <button className='btn btn-success text-light'>Read More </button>
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

export default Services
