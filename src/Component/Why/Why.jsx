import React, { useState, version } from 'react'
import './Why.css'
import {useNavigate } from 'react-router-dom';

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
      <div className="container ans p-3">
        <p className='border-dark'>
          In today’s crowded digital space, businesses are not just looking for services — they’re looking for real partners, people who understand their goals, respect their vision, and go beyond the usual to create lasting impact.
        </p>
        <p className='border-dark text-align  para'>
          That’s exactly what <span className='fw-bold'>Codyatra </span> stands for.
        </p>

        <div className='lh-1 '>
          <p className='line-height text-align '>We’re not here to sell you vanity metrics or empty promises.</p>
          <p className='text-align '>We’re here to build, support, and grow — <span className='fw-bold'>together </span>.</p>
        </div>

        {/* {isopen && (
          <>
            <div className='lh-1 text-align'>
              <p>Yes, we’re new in the market.</p>
              <p>And we’re proud of it.</p>
              <p className='line-height'>Because being new means we’re hungry. We’re sharp. We’re not stuck in old ways.</p>
              <p className='line-height'>We’re building this agency with <span className='fw-bold'>fresh ideas, deep intention, and bold energy.</span></p>
            </div>

            <div className='lh-1 text-align'>
              <p>At <span className='fw-bold'>Codyatra </span>, we don’t claim to have 15 years of experience.</p>
              <p>But we do claim this:</p>
              <div className=' orderList d-flex '>
              <ol className="orderList list-group list-group-numbered">
                <li className="list-group-item border-2 border-dark">We care more.</li>
                <li className="list-group-item border-2 border-dark">We work harder.</li>
              </ol>

              </div>
              <p className='mt-3'>And we’re more obsessed with your growth than anyone else.</p>
            </div>

              <div className="strategy">
          <h2 className='text-center headWhy fw-bold text-dark'>
            Strategic Partner, Not Just a Service Provider
          </h2>
          <div className='container'>
            <p>
              We don’t believe in just delivering a “social media post” or a “website.” We believe in crafting <span className='fw-bold'>strategies that scale</span>, designs that tell a story, and systems that drive real results. <span className='fw-bold'>Codyatra </span> walks with you as a <span className='fw-bold'>thinking partner</span> — not just a team that does tasks, but a team that asks why, not just how.
            </p>
          </div>
          <div className='text-align unorderList'>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">We study your business.</li>
              <li className="list-group-item">We understand your audience.</li>
              <li className="list-group-item">We design your digital ecosystem — not with shortcuts, but with <span className='fw-bold'>long-term vision</span>.</li>
            </ul>
          </div>
          <div className="button">
          </div>
        </div>
          </>
        )} */}

      
      <div className="btn d-flex align-items-center w-100 border justify-content-center">

            {/* <button className='btn btn-primary '>
              Read more ....
            </button> */}
      </div>
      </div>
    </div>
    </div>
  )
}

export default Why
