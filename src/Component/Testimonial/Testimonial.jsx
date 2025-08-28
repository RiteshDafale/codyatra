import React, { useEffect } from 'react';
import '../Testimonial/Testimonial.css';
import ASCafe from '../Testimonial/videos/ascafe.mp4';
import chaiChopati from '../Testimonial/videos/chai_chopati.mp4';
import chaicom from '../Testimonial/videos/chahacom.mp4';
import chaicom2 from '../Testimonial/videos/chahaCom2.mp4';

const Testimonial = () => {
    useEffect(() => {
        document.title = "Testimonial - Codyatra";
    }, []);

    return (
        <div className='testmonialMainDiv'>
            <h1 className='text-center testimonial-heading'>Testimonials</h1>
            <div className="video-section">
                <div className="testmonialcolumn">
                    <div className="video">
                        <video src={ASCafe} className="video-player" autoPlay muted loop controlsList="nodownload" />
                        <h3 className="video-title">ASCafe and Restro</h3>
                    </div>
                </div>
                <div className="testmonialcolumn">
                    <div className="video">
                        <video src={chaiChopati} className="video-player" autoPlay muted loop controlsList="nodownload" />
                        <h3 className="video-title">Chai Chopati</h3>
                    </div>
                </div>
                <div className="testmonialcolumn">
                    <div className="video">
                        <video src={chaicom} className="video-player" autoPlay muted loop controlsList="nodownload" />
                        <h3 className="video-title">Chaha.com</h3>
                    </div>
                </div>
                <div className="testmonialcolumn">
                    <div className="video">
                        <video src={chaicom2} className="video-player" autoPlay muted loop controlsList="nodownload" />
                        <h3 className="video-title">Chaha.com</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
