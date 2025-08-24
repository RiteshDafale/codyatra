import React, { useEffect } from 'react'

function Services() {
  useEffect(() => {
    document.title = "Services - Codyatra"
  }, [])
  return (
    <div className=''>
      <div className="container-fluid border my-2">
        <h1 className='fw-bolder text-center display-6'>Digital Solutions That Deliver Results</h1>
        <div className="content mt-1">
          <h4 className='text-center text-decoration-underline'>Digital Solutions That Deliver Results</h4>
          <p className='text-center fw-bold'>We don’t just provide services.<br />
            We deliver strategic solutions that help brands grow, scale, and dominate in their niche.<br />
            Here’s everything CODYATRA offers:</p>

        </div>
      </div>
    </div>
  )
}

export default Services
