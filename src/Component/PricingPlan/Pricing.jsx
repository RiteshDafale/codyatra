import React from 'react'
import '../PricingPlan/Pricing.css';
import starter from '../PricingPlan/PricingImages/Starter.png';
import growth from '../PricingPlan/PricingImages/Growth.png';
import premium from '../PricingPlan/PricingImages/Premium.png';

function Pricing() {
  return (
    <div>
      <div className="container my-4 ">
        <div className="row ">
            <div className="col-lg-4 col-sm-12 priceColumn   d-flex justify-content-center align-items-center">
                <div className="starterimage ">
                    <img src={starter} class="rounded mx-auto d-block" alt="Starter"></img>
                </div>
            </div>
            <div className="col-lg-4 col-sm-12 priceColumn   d-flex justify-content-center align-items-center">
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
