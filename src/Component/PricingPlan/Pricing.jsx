import React, { useEffect, useState } from 'react';
import '../PricingPlan/Pricing.css';
import starter from '../PricingPlan/PricingImages/Starter.png';
import growth from '../PricingPlan/PricingImages/Growth.png';
import premium from '../PricingPlan/PricingImages/Premium.png';

function Pricing() {
  const [showpopup, setpopup] = useState(false);

  useEffect(() => {
    document.title = "Codyatra - Pricing Plans";

    const timer = setTimeout(() => {
      setpopup(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const closePopup = (e) => {
    e.preventDefault();
    setpopup(false);
  };

  return (
    <div>
      {/* Popup + Overlay */}
      {showpopup && (
        <>
          <div className="popup-overlay"></div>
          <div className="pricePopup">
            <p>
              This is our base price — but your vision is unique. We customize
              every plan to fit your exact goals, ensuring you pay only for
              what truly drives results.
            </p>
            <button className="popupbtn" onClick={closePopup}>
              Close
            </button>
          </div>
        </>
      )}

      {/* Main Content with conditional blur */}
      <div className={showpopup ? "page-content blur" : "page-content"}>
        <div className="container my-4  d-flex flex-column justify-content-center align-items-center">
          <div className="row">
            <div className="col-lg-4 col-sm-12 priceColumn d-flex justify-content-center align-items-center">
              <div className="starterimage">
                <img
                  src={starter}
                  className="rounded mx-auto d-block"
                  alt="Starter"
                />
              </div>
            </div>
            <div className="my-3 col-lg-4 col-sm-12 priceColumn d-flex justify-content-center align-items-center">
              <div className="starterimage">
                <img
                  src={growth}
                  className="img-thumbnail"
                  alt="Growth"
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 priceColumn d-flex justify-content-center align-items-center">
              <div className="starterimage">
                <img
                  src={premium}
                  className="img-thumbnail"
                  alt="Premium"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
