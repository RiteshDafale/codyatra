import React from 'react'
import '../Owner/OwnerDetails.css';
import OwnerImage from '../Owner/OwnerImage/owner.jpg';

function OwnerDetails() {
  return (
    <div>
      <div className="container-fluid  my-3">
        <h1 className='text-center'>About Owner</h1>
        <div className="row">
          <div className="container-fluid col-lg-6 ownerCol " >
            <div className="content mt-2 ">
              <p className='text-center'>Hi, I’m <span className='highlightowner'> Kanishk Mehta </span>,the founder of <span className='highlightowner'> CODYATRA</span> __ and this isn’t just a company
                introduction.</p>
              <p >This is my story. Our story. A story that’s still being written, one bold step at a time.</p>
              <p >I don’t claim to have all the answers.</p>
              <p >I’m learning every day — from my clients, my team, and this fast-changing digital world.</p>
              <p >But what I can promise is this:</p>
              <p >If you work with me and my team at CODYATRA, you’ll get <span className='fw-bold'> effort, honesty, creativity, and commitment</span> — every single day.</p>
              <p >This is just the beginning.</p>
              <p >If you’re ready to grow, to be seen, to build something that lasts — I invite you to join this
                journey.</p>
              <p className=''>Let’s turn ideas into action.<br />Let’s make your brand unforgettable.<br />Let’s walk this <span className='fw-bold'> Yatra </span>together.</p>

             <p className=''> <span className='highlightowner fw-bolder'>Kanishk Mehta</span><br/>
              Founder, CODYATRA<br/>
              “Your growth is our journey.”</p>
            </div>
          </div>
          <div className="col-lg-6 ownerCol " >
       <div className="ownerimagediv">
        <img src={OwnerImage} class="img-thumbnail" style={{width:"100%", height:"100%"}} alt="..."></img>
       </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OwnerDetails
