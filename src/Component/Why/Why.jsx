import React, { useState, version } from 'react'
import './Why.css'
import { useNavigate } from 'react-router-dom';
// import icon from '../Why/icons/Introicon.gif';
import icon1 from '../Why/icons/icons1.png';
import icon2 from '../Why/icons/icon3.jpeg';

function Why() {

  const navigate = useNavigate();
  const paraStyle = {
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box"
  }
  const [isopen, setIsopen] = useState(false);
  return (
    <div className="container-fluid why-mainDiv mTop " >
      <div className="row ">
      {/* <div className=''> */}
        <div className='col-lg-6 col-sm-12 whyColumn  why_subDiv '>
          <div className="whytextContent">
          <h2 className='text-center headWhy fw-bold display-5  '>
            How can <span className='fw-bolder' style={{ color: "#265ab7" }}>Codyatra </span> help your business grow?
          </h2>
          <div className="container ans ">
            <p className='border-dark'>
              In today’s crowded digital space, businesses are not just looking for services — they’re looking for real partners, people who understand their goals, respect their vision, and go beyond the usual to create lasting impact.
            </p>

            <div className='WhyheadPara '>
              <p className='border-dark headpara1   para'>
                That’s exactly what <span className='fw-bold'>Codyatra </span> stands for.
              </p>

              <p className='headpara1  '>We’re not here to sell you vanity metrics or empty promises.</p>
              <p className=' headpara1'>We’re here to build, support, and grow — <span className='fw-bold'>together </span>.</p>
            </div>
          </div>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12 whyColumn icons ">
          <div className="imgIcon">
            <img src={icon2} alt='intro'></img>
          </div>
        </div>
      {/* </div> */}
      </div>
    </div>
  )
}

export default Why
