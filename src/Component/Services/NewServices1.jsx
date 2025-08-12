import React from 'react';
import './Services.css';
import './NewService.css'
import web from './ServicePhotos/Webdevelopment.png'
import DigitalMarketting from './ServicePhotos/DigitalMarketting.png';
import socialMedia from './ServicePhotos/socialMedia.png';


function NewServices1() {
  return (
    <div>
      <div className="border border-dark mainDiv">
        <div className="row my-2">
          <h1 className='text-center'>Our Services</h1>
          {/* First Column */}
          <div className="col-lg-4 col-sm-12 border  column">
            <div className='bigcard'>
            <div class="card  firstDiv" >
              <img src={web} class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column justicy-content-center align-items-center">
                <h5 class="card-title">Website &amp; App Development</h5>
                {/* <p style={{fontSize:"15px"}}>Build your digital foundation.</p> */}
                <a href="#" class="btn btn-primary">Read More</a>
              </div>
            </div>
            </div>
          </div>

          {/* Second Column */}
          <div className="col-lg-4 col-sm-12 border column">
           <div class="card firstDiv">
              <img src={DigitalMarketting} class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column justicy-content-center align-items-center">
                <h5 class="card-title">Digital Marketing &amp; Advertising</h5>
                {/* <p className='text-center '  style={{fontSize:"14px"}}>Drive traffic, generate leads, and grow consistently.</p> */}
                <a href="#" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Third Column */}
          <div className="col-lg-4 col-sm-12 border column">
            <div class="card firstDiv">
              <img src={socialMedia} class="card-img-top" alt="..." />
              <div class="card-body d-flex flex-column justicy-content-center align-items-center">
                <h5 class="card-title">Digital Marketing &amp; Advertising</h5>
                {/* <p className='text-center '  style={{fontSize:"14px"}}>Drive traffic, generate leads, and grow consistently.</p> */}
                <a href="#" class="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewServices1;
