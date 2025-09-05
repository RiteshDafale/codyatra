import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home/Home'
import Navigation from './Component/Header/Navigation'
import './App.css'
import Footer from './Component/Footer/Footer'
const About = React.lazy(()=> import ('./Component/About/About'));
const NewWhy = React.lazy(()=> import( './Component/Why/NewWhy'));
const OurServices = React.lazy(()=> import('./Component/RedirectPages/OurServices/OurServices'));
const Testimonial = React.lazy(() => import('./Component/Testimonial/Testimonial'));
const Pricing = React.lazy(()=>import('./Component/PricingPlan/Pricing'));
const Dashboard = React.lazy(()=> import('./Component/Dashboard/Dashboard')); 
const FreeTools = React.lazy(()=> import ('./Component/FreeTools/FreeTools')) ;
const Contact = React.lazy(()=> import('./Component/Contact/Contact.JSX'));
import { ToastContainer } from 'react-toastify';
import DarkVeil from './Component/BackFragment';

// import DarkVeil from './Component/BackFragment';



function App() {
  // background-color: rgb(25 48 96);
  return (
    <div className='mainBackgroundColor' style={{ color: "white" }}>
    

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      // transition={{Bounce}}
      />

      <Navigation />
      <Suspense fallback={<div>Loading ...</div>}>
        {/* <DarkVeil /> */}
        <Routes>
          <Route path="/codyatra" element={<Home />}></Route>
          <Route path="/codyatra/about" element={<About />} />
          <Route path='/codyatra/Why' element={<NewWhy />} />
          <Route path='/codyatra/outservices' element={<OurServices />} />
          <Route path='/codyatra/testmonial' element={<Testimonial />}></Route>
          <Route path='/codyatra/pricingplan' element={<Pricing />}></Route>
          <Route path='/codyatra/Dashboard' element={<Dashboard />}></Route>
          <Route path='/codyatra/FreeTools' element={<FreeTools />}></Route>
          <Route path='/codyatra/Contact' element={<Contact />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
