import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home/Home'
import Navigation from './Component/Header/Navigation'
import './App.css'
import Footer from './Component/Footer/Footer'
import About from './Component/About/About'
import NewWhy from './Component/Why/NewWhy'
import OurServices from './Component/RedirectPages/OurServices/OurServices'
import Testimonial from './Component/Testimonial/Testimonial'
import Pricing from './Component/PricingPlan/Pricing'
import Dashboard from './Component/Dashboard/Dashboard'
import FreeTools from './Component/FreeTools/FreeTools'


function App() {
  // background-color: rgb(25 48 96);
  return (
    <div className='mainBackgroundColor' >
        <Navigation />
        <Routes>
          <Route path="/codyatra" element={<Home />}></Route>
          <Route path="/codyatra/about" element={<About/>}  />
          <Route path='/codyatra/Why' element={<NewWhy/>} />
          <Route path='/codyatra/outservices' element={<OurServices/>} />
          <Route path='/codyatra/testmonial' element={<Testimonial/>}></Route>
          <Route path='/codyatra/pricingplan' element={<Pricing/>}></Route>
          <Route path='/codyatra/Dashboard' element={<Dashboard/>}></Route>
          <Route path='/codyatra/FreeTools' element={<FreeTools/>}></Route>
        </Routes>
  <Footer/>
    </div>
  )
}

export default App
