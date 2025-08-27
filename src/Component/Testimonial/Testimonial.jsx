import React, { useEffect } from 'react'
import '../Testimonial/Testimonial.css';
import ASCafe from '../Testimonial/videos/ascafe.mp4';
import chaiChopati from '../Testimonial/videos/chai_chopati.mp4';

const Testimonial = () => {
    useEffect(()=>{
       document.title="Testimonial - Codyatra"
    },[])
    return (
        <div className='container-fluid mb-3  my-2 testmonialMainDiv' >
            <h1 className='text-center'>Testimonials</h1>
            <div className="container-fluid m-4">
                <div className="row  mt-3">
                    <div className="col-lg-6 col-sm-12  testmonialcolumn">
                        <div className="video">
                            <video src={ASCafe} className="object-fit-cover" autoPlay muted controlsList='nodownload'></video>
                            <h3>ASCafe and Restro</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12  testmonialcolumn">
                        <div className="video">
                            <video src={chaiChopati} className="object-fit-cover" autoPlay muted controlsList='nodownload'></video>
                            <h3>Chai Chopati</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial

