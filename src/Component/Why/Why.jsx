import React, { useState, version } from 'react'
import { ClipLoader } from 'react-spinners';
import './Why.css'
import { useNavigate } from 'react-router-dom';
import { CSSProperties } from 'react';
import firstintro from '../Why/icons/intro.mp4'
// import firstintro from '../Why/icons/intro1.mp4'
import {OrbitProgress} from 'react-loading-indicators';
import RightAnim from '../AnimatePara/RigthAnimation';

function Why() {

  const navigate = useNavigate();
  const [isopen, setIsopen] = useState(false);
  const [isvideoLoading, setisvideoLoading] = useState(false);
  const [color, setcolor] = useState("#ffffff");



  return (
    <div className="why-mainDiv mTop " >
      <div className="row ">
        {/* <div aclassName=''> */}
        <div className="col-lg-6 col-sm-12 whyColumn icons ">
          
          <RightAnim direction='horizontal' reverse={false}>
            {!isvideoLoading && (
            <div className='spinner'> 
        <OrbitProgress color={["#000000", "#000000", "#0b0c0b", "#232723"]}
          
          />
            </div>
          )}
            <div className="whyimgIcon ">
              <video src={firstintro} className="video-player" autoPlay muted loop controlsList="nodownload"
                onLoadedData={() => {
                  setisvideoLoading(true);
                }}
                style={{ display: isvideoLoading ? 'block' : 'none' }}
              />
            </div>
          </RightAnim>
        </div>
        <div className='col-lg-6 col-sm-12 whyColumn   why_subDiv '>
          <div className="whytextContent">
            <RightAnim direction='horizontal' reverse={true}>
              <h1 className='text-center headWhy   poppins-semibold'>
                How can <span className='' style={{ color: "" }}>Codyatra </span> help your business grow?
              </h1>
              <div className="container ans">
                <p className='border-dark roboto-p  '>
                  In today’s crowded digital space, businesses are not just looking for services — they’re looking for real partners, people who understand their goals, respect their vision, and go beyond the usual to create lasting impact.
                </p>
                <div className='WhyheadPara  '>
                  <p className='border-dark  roboto-p   '>
                    That’s exactly what <span className='fw-bold'>Codyatra </span> stands for.
                  </p>

                  <p className=' roboto-p ' >We’re not here to sell you vanity metrics or empty promises.</p>
                  <p className=' roboto-p '>We’re here to build, support, and grow — <span className='fw-bold'>together </span>.</p>
                </div>
              </div>
            </RightAnim>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why
