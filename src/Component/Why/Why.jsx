import React from 'react'
import './Why.css'

function Why() {
  return (
    <div>
      <div className="container border-top  border-2  border-dark mTop p-3 ">
        <h2 className='text-center headWhy fw-bold display-5'>How can <span className='text-dark'>Codyatra </span> help your business grow?</h2>
        <div className="container ans border-3 p-3 fs-5 ">
          <p className='border-bottom pb-3 border-dark' >In today’s crowded digital space, businesses are not just looking for services — they’re looking for real partners, people who understand their goals, respect their vision, and go beyond the usual to create lasting impact.</p>
          <p className='my-2 fs-5 border-bottom pb-3 border-dark'>That’s exactly what <span className='fw-bold'>Codyatra </span> stands for.</p>

          <div className=' lh-1 my-4 border-bottom pb-3 border-dark'>
            <p className=''>We’re not here to sell you vanity metrics or empty promises.</p>
            <p> We’re here to build, support, and grow — <span className='fw-bold'>together </span>.</p>
          </div>

          <div className='lh-1 border-bottom pb-3 border-dark'>
            <p className='mt-2'>Yes, we’re new in the market.</p>
            <p className=''>And we’re proud of it.</p>
            <p className=''>Because being new means we’re hungry. We’re sharp. We’re not stuck in old ways.</p>
            <p className=''>We’re building this agency with <span className='fw-bold'> fresh ideas, deep intention, and bold energy.</span></p>
          </div>

          <div className='lh-1'>
            <p className='mt-2'>At <span className='fw-bold'>Codyatra </span>, we don’t claim to have 15 years of experience.</p>
            <p className=''>But we do claim this:</p>
            <ol className="orderList list-group list-group-numbered">
              <li className="list-group-item border-2 border-dark" >We care more.</li>
              <li className="list-group-item border-2 border-dark" >We work harder.</li>
            </ol>
            <p className='mt-2'>And we’re more obsessed with your growth than anyone else.</p>
          </div>
        </div>
        <div className="strategy">
          <h2 className='text-center headWhy fw-bold text-dark '>Strategic Partner, Not Just a Service Provider</h2>
          <div className='container '>
            <p className='fs-5 mt-3'>We don’t believe in just delivering a “social media post” or a “website.” We believe in
              crafting <span className='fw-bold'>strategies that scale</span>, designs that tell a story, and systems that drive real results.<span className='fw-bold'> Codyatra </span> walks with you as a <span className='fw-bold'>thinking partner</span> — not just a team that does tasks, but a
              team that asks why, not just how.</p>
          </div>
          <div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item fs-5">We study your business.</li>
              <li className="list-group-item fs-5">We understand your audience.</li>
              <li className="list-group-item fs-5">We design your digital ecosystem — not with shortcuts, but with <span className='fw-bold'> long-term vision</span>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why
