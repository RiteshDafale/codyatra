import React, { useEffect, useState } from 'react'
import '../PricingPlan/Pricing.css';
import starter from '../PricingPlan/PricingImages/Starter.png';
import growth from '../PricingPlan/PricingImages/Growth.png';
import premium from '../PricingPlan/PricingImages/Premium.png';

function Pricing() {

  const [showpopup, setpopup] = useState(false);

  useEffect(() => {
    document.title = "Codyatra - Pricing Plans"

    const timer = setTimeout(() => {
      setpopup(true);
    }, 500);

    // const timer = setInterval(() => {
    //    setpopup(true)
    // },500);

    return () => clearTimeout(timer);

  },[])

  const closePopup = (e) => {
    e.preventDefault();
    console.log("function called")
    setpopup(false);
  }
  return (
    <div>

      {showpopup && (
        <div className='pricePopup '>
          <p>   This is our base price — but your vision is unique. We customize every plan to fit your exact goals, ensuring you pay only for what truly drives results.</p>
            <button className="popupbtn" onClick={closePopup}>Close</button>
        </div>

      )

      }
      <div className="container my-4 ">
        <div className="row ">
          <div className="col-lg-4 col-sm-12 priceColumn   d-flex justify-content-center align-items-center">
            <div className="starterimage ">
              <img src={starter} class="rounded mx-auto d-block" alt="Starter"></img>
            </div>
          </div>
          <div className="my-3 col-lg-4 col-sm-12 priceColumn   d-flex justify-content-center align-items-center">
            <div className="starterimage">
              <img src={growth} class="img-thumbnail" alt="Growth"></img>
            </div>
          </div>
          <div className="col-lg-4  col-sm-12 priceColumn   d-flex justify-content-center align-items-center">
            <div className="starterimage">
              <img src={premium} class="img-thumbnail" alt="Starter"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
