import React, { useEffect, useState } from 'react';
import '../Testimonial/Testimonial.css';
import ASCafe from '../Testimonial/videos/ascafe.mp4';
import chaiChopati from '../Testimonial/videos/chai_chopati.mp4';
import chaicom from '../Testimonial/videos/chahacom.mp4';
import chaicom2 from '../Testimonial/videos/chahaCom2.mp4';
import { ThreeDot } from 'react-loading-indicators';

const Testimonial = () => {
    useEffect(() => {
        document.title = "Testimonial - Codyatra";
    }, []);

    const [isReelsLoadingfirst, setisReelsLoadingfirst] = useState(false);
    const [isReelsLoadingsecond, setisReelsLoadingsecond] = useState(false);
    const [isReelsLoadingthird, setisReelsLoadingthird] = useState(false);
    const [isReelsLoadingforth, setisReelsLoadingforth] = useState(false);



    return (
        <div className='testmonialMainDiv' >
            <h1 className='text-center poppins-semibold text-dark mb-3 '> Testimonials</h1>
            <div className="video-section">
                <div className="testmonialcolumn">
                    <div className="video">
                        {!isReelsLoadingfirst && (
                            <div className='loading'>
                                <ThreeDot variant="pulsate" color="#efe5e5" size="medium" text="loading ..." textColor="#efe5e5" />
                            </div>
                        )}
                        <video src={ASCafe} className="video-player" autoPlay muted loop controlsList="nodownload"
                            onLoadedData={() => setisReelsLoadingfirst(true)}
                            style={{ display: isReelsLoadingfirst ? 'block ' : 'none' }}
                        />
                        <h3 className="video-title">ASCafe and Restro</h3>
                    </div>
                </div>
                <div className="testmonialcolumn">
                    <div className="video">
                          {!isReelsLoadingsecond && (
                            <div className='loading'>
                                <ThreeDot variant="pulsate" color="#efe5e5" size="medium" text="loading ..." textColor="#efe5e5" />
                            </div>
                        )}
                        <video src={chaiChopati} className="video-player" autoPlay muted loop controlsList="nodownload"
                         onLoadedData={() => setisReelsLoadingsecond(true)}
                            style={{ display: isReelsLoadingsecond ? 'block ' : 'none' }} />
                        <h3 className="video-title">Chai Chopati</h3>
                    </div>
                </div>
                <div className="testmonialcolumn">
                    <div className="video">
                          {!isReelsLoadingthird && (
                            <div className='loading'>
                                <ThreeDot variant="pulsate" color="#efe5e5" size="medium" text="loading ..." textColor="#efe5e5" />
                            </div>
                        )}
                        <video src={chaicom} className="video-player" autoPlay muted loop controlsList="nodownload"
                         onLoadedData={() => setisReelsLoadingthird(true)}
                            style={{ display: isReelsLoadingthird ? 'block ' : 'none' }} />
                        <h3 className="video-title">Chaha.com</h3>
                    </div>
                </div>
                <div className="testmonialcolumn">
                    <div className="video">
                          {!isReelsLoadingforth && (
                            <div className='loading'>
                                <ThreeDot variant="pulsate" color="#efe5e5" size="medium" text="loading ..." textColor="#efe5e5" />
                            </div>
                        )}
                        <video src={chaicom2} className="video-player" autoPlay muted loop controlsList="nodownload"
                         onLoadedData={() => setisReelsLoadingforth(true)}
                            style={{ display: isReelsLoadingforth ? 'block ' : 'none' }} />
                        <h3 className="video-title">Chaha.com</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;
