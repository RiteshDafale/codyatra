import React, { useEffect, useState } from 'react';
import '../PricingPlan/Pricing.css';
import starter from '../PricingPlan/PricingImages/Starter.png';
import growth from '../PricingPlan/PricingImages/Growth.png';
import premium from '../PricingPlan/PricingImages/Premium.png';
import { toast, Zoom, Slide, Flip, Bounce } from 'react-toastify';
import axios from 'axios';

function Pricing() {
  const [showpopup, setpopup] = useState(false);
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [City, setCity] = useState("");
  const [Budget, setBudget] = useState("");

  const [EnquiryDetails, setEnquiryDetails] = useState({})


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

  const handleSelectChange = (e) => {

    setEnquiryDetails({
      ...EnquiryDetails,
      budget: e.target.value
    })
    setBudget(e.target.value);  // Update the state when a new option is selected
    // const budget = e.target.value;
    // setBudget(budget)


  };


  const handleRequest = (e) => {

    e.preventDefault();
    if (!Name || !Budget || !Phone || !Email || !City) {
      console.log("Empty Please enter values ");
      toast.error(
        <div className='mx-4'>
          <strong>Kindly provide the required information.</strong>
        </div>,
        {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Zoom,
        }
      )


    }
    else if (Name || Budget) {
      e.preventDefault();
      console.log("button clicked");
      console.log(EnquiryDetails);

      // console.log("budget =" + Budget);
      console.log("Name =" + EnquiryDetails.name);
      // console.log("Phone =" + Phone);
      // console.log("Email =" + Email);
      // console.log("City =" + City);

      axios.post(`http://localhost:2025/add`,EnquiryDetails)
        .then((resp) => {
          console.log("successfully stored in database");
          console.log(resp);
          console.log("data from  console");
          toast.info(
        <div>
          <strong className='fw-bold'>Request Received!</strong>
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
        })
        .catch((err)=>{
          console.log(err);
          
        })      
    }
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
          <div className="row " >
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
              <input type="Name" placeholder='Enter your name' id="Name" class="form-control " aria-describedby="name"
                onChange={(e) => {
                  setName(e.target.value);
                  setEnquiryDetails({
                    ...EnquiryDetails,
                    Name: e.target.value
                  })
                }}
              />
            </div>
            <div class="mb-3 inputDiv">
              <input type="Name" placeholder='Enter your Phone Number' class="form-control " id="phone" aria-describedby="phone"
                onChange={(e) => {
                  setPhone(e.target.value)
                  setEnquiryDetails({
                    ...EnquiryDetails,
                    phone: e.target.value
                  })
                }
                }

              />
            </div>
            <div class="mb-3 inputDiv">
              <input type="Name" placeholder='Enter your Email' class="form-control " id="email" aria-describedby="emailHelp"
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEnquiryDetails({
                    ...EnquiryDetails,
                    email: e.target.value
                  })
                }}

              />
            </div>
            <div class="mb-3 inputDiv">
              <input type="Name" placeholder='Enter your City' class="form-control " id="city" aria-describedby="city"
                onChange={(e) => {
                  setCity(e.target.value);
                  setEnquiryDetails({
                    ...EnquiryDetails,
                    city: e.target.value
                  })
                }}

              />
            </div>
            <div class="mb-3 cityDiv">
              <select class="form-select" aria-label="Default select example"
                onChange={handleSelectChange}
                name="budget">
                <option disabled selected>Marketing Budget</option>
                <option value="50k to 1 Lakh">20k to 50k</option>
                <option value="1 Lakh to 2 Lakh">50k to 1 Lakh</option>
                <option value="2 Lakh to 3 Lakh">1 Lakh to 3 Lakh</option>
                <option value="3 Lakh and above">3 Lakh and above</option>
              </select>
            </div>
            <div className=' text-center'>
              <button type="submit" class="btn btn-primary" onClick={handleRequest}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
