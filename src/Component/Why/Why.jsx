import React, { useState, version } from 'react'
import './Why.css'
import { useNavigate } from 'react-router-dom';

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
    <div className="container-fluid why-mainDiv mTop d-flex " >
      <div className='why_subDiv '>
        <h2 className='text-center headWhy fw-bold display-5'>
          How can <span className='text-dark'>Codyatra </span> help your business grow?
        </h2>
        <div className="container ans ">
          <p className='border-dark'>
            In today’s crowded digital space, businesses are not just looking for services — they’re looking for real partners, people who understand their goals, respect their vision, and go beyond the usual to create lasting impact.
          </p>

          <div className='WhyheadPara '>
            <p className='border-dark text-align  para'>
              That’s exactly what <span className='fw-bold'>Codyatra </span> stands for.
            </p>

            <p className='line-height text-align '>We’re not here to sell you vanity metrics or empty promises.</p>
            <p className='text-align '>We’re here to build, support, and grow — <span className='fw-bold'>together </span>.</p>
          </div>

         

        </div>
      </div>
    </div>
  )
}

export default Why
