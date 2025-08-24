import React from 'react'
import '../Testimonial/Testimonial.css';
import ASCafe from '../Testimonial/videos/ascafe.mp4';
import chaiChopati from '../Testimonial/videos/chai_chopati.mp4';



const Testimonial = () => {
    return (
        <div className='container-fluid mb-3 ' style={{height:"100vh"}}>
            <div className="container-fluid m-4">
                <h1 className='text-center'>Testimonials</h1>
                <div className="row  mt-3 ">
                    <div className="col-lg-6 col-sm-12  column">
                        <div className="video">
                            <video src={ASCafe} className="object-fit-cover" autoPlay muted controlsList='nodownload'></video>
                            <h3>ASCafe and Restro</h3>
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12  column">
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

