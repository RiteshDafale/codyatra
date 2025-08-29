import React, { useEffect, useState } from 'react';
import '../PricingPlan/Pricing.css';
import starter from '../PricingPlan/PricingImages/Starter.png';
import growth from '../PricingPlan/PricingImages/Growth.png';
import premium from '../PricingPlan/PricingImages/Premium.png';
import { toast ,Zoom ,Slide ,Flip } from 'react-toastify';

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


  const handleRequest = (e) => {
    e.preventDefault();
    console.log("button clicked");

    toast.info(
      <div>
        <strong>Request Received!</strong>
        <div>We’ll contact you shortly </div>
      </div>,
      {
        position: "top-right",
        autoClose: 6000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
         transition: Flip,
        theme: "colored",
      }
    )


    // toast('Your request has been received. We’ll contact you shortly to follow up.', {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: false,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    //   theme: "colored",
    //   transition: 'Bounce',
    // });
  }

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

      <div className="container Form-mainDiv ">

        <h2 className='text-center'>Get the Best Deal – Request a Callback!</h2>
        <p className='text-center'>Want to negotiate the price? Just fill out the form, and we’ll contact you to discuss how we can make it work.</p>
        <div className="container Form-subDiv" >
          <form>
            <div class="mb-3 inputDiv">
              <input type="Name" placeholder='Enter your name' class="form-control " id="Name" aria-describedby="name" />
            </div>
            <div class="mb-3 inputDiv">
              <input type="Name" placeholder='Enter your Phone Number' class="form-control " id="phone" aria-describedby="phone" />
            </div>
            <div class="mb-3 inputDiv">
              <input type="Name" placeholder='Enter your Email' class="form-control " id="email" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3 inputDiv">
              <input type="Name" placeholder='Enter your City' class="form-control " id="city" aria-describedby="city" />
            </div>
            <div class="mb-3 cityDiv">
              <select class="form-select" aria-label="Default select example">
                <option selected>Marketing Budget</option>
                <option value="1">50k to 1 Lakh</option>
                <option value="2">1 Lakh to 2 Lakh</option>
                <option value="3">2 Lakh to 3 Lakh</option>
                <option value="3">3 Lakh and above</option>
              </select>
            </div>
            <div className='border text-center'>

              <button type="submit" class="btn btn-primary" onClick={handleRequest}>Submit</button>
            </div>
          </form>
        </div>
      </div>












    </div>
  );
}

export default Pricing;
