import React from 'react';
import './Services.css';
import './NewService.css';
import web from './ServicePhotos/Webdevelopment.png';
import DigitalMarketting from './ServicePhotos/DigitalMarketting.png';
import socialMedia from './ServicePhotos/socialMedia.png';
import photography from './ServicePhotos/photography.png';
import strategy from './ServicePhotos/strategy.png';
import free from './ServicePhotos/freeServices.png';

function NewServices1() {
  return (
    <div className="mainDiv ">
      <div className='mainHeading'>
        <h1 className="text-center ">Our Services</h1>
      </div>


















      {/* First Row */}
      <div className="row firstrow ">
        {/* First Column */}
        <div className="col-lg-4  col-sm-12 first servicecolumn ">
          <div className="firstcontent d-flex flex-column justify-content-center align-items-center  ">
            <div className="img">
              <img src={web} alt="Website Development" className="img-fluid" />
            </div>
            <div className="heading mt-2">
              <h5 className="text-center ">Website &amp; App Development</h5>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-lg-4  col-sm-12 servicecolumn ">
          <div className="SecondMiDiv  d-flex flex-column justify-content-center align-items-center  ">
            <div className="img">
              <img
                src={DigitalMarketting}
                alt="Digital Marketing"
                className="img-fluid"
              />
            </div>
            <div className="heading  w-100 text-center mt-2">
              <h5 className="">Digital Marketing &amp; Advertising</h5>
            </div>
          </div>
        </div>

        {/* Third Column */}
        <div className="col-lg-4  col-sm-12 servicecolumn  d-flex flex-column justify-content-center align-items-center   ">
          <div>
            <div className="third d-flex flex-column justify-content-center align-items-center   ">
              <div className="img  " >
                <img
                  src={socialMedia}
                  alt="Social Media Management"
                  className="img-fluid socialimg"
                />
              </div>
              <div className="heading_social ">
                <h5 className="text-center">Social xMedia Management &amp; Content Creation</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second row */}
      <div className="row secondrow mt-3">
        {/* First Column */}
        <div className="col-lg-4  col-sm-12 first servicecolumn">
          <div className="photoService d-flex flex-column justify-content-center align-items-center  ">
            <div className="img">
              <img src={photography} alt="Website Development" className="img-fluid" />
            </div>
            <div className="heading w-100 p-2">
              <h5 className="text-center">Video &amp; Photography (On Request / City-Specific)</h5>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="col-lg-4  col-sm-12 servicecolumn digital">
          <div className="SecondMiDiv d-flex flex-column justify-content-center align-items-center ">
              <div className="img">
                <img
                  src={strategy}
                  alt="Digital Marketing"
                  className="img-fluid"
                />
              </div>
              <div className="heading  w-100 text-center p-2">
                <h5 className="">Strategy &amp; Consulting</h5>
              </div>
          </div>
        </div>

        {/* Third Column */}
        <div className="col-lg-4  col-sm-12 servicecolumn  ">
            <div className="third d-flex flex-column justify-content-center align-items-center  ">
              <div className="img " >
                <img
                  src={free}
                  alt="Social Media Management"
                  className="img-fluid socialimg"
                />
              </div>
              <div className="heading_social ">
                <h5 className="text-center">Freebies &amp; Entry Services (Great for First-Time Clients)</h5>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NewServices1;
