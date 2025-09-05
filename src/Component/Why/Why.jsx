import React, { useState, version } from 'react'
import './Why.css'
import { useNavigate } from 'react-router-dom';
import icon2 from '../Why/icons/icon3.jpeg';
// import firstintro from '../Why/icons/intro.mp4'
import firstintro from '../Why/icons/intro1.mp4'
import ScrollFloatText from '../ScrollFloatText';
import RightAnim from '../AnimatePara/RigthAnimation';



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
        <div className="col-lg-6 col-sm-12 whyColumn icons ">
          <RightAnim direction='horizontal' reverse={false} ease="bounce.easeIn">
            <div className="imgIcon">
              {/* <img src={firstintro} alt='intro'></img> */}
               <video src={firstintro} className="video-player" autoPlay muted loop controlsList="nodownload" />
            </div>
          </RightAnim>
        </div>
        <div className='col-lg-6 col-sm-12 whyColumn  why_subDiv '>
          <div className="whytextContent">
            <RightAnim direction='horizontal' reverse={true}>
              <h2 className='text-center headWhy fw-bold display-5  gradient-text'>
                How can <span className='fw-bolder' style={{ color: "" }}>Codyatra </span> help your business grow?
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
            </RightAnim>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  )
}

export default Why
