import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home/Home'
import Navigation from './Component/Header/Navigation'
import './App.css'
import Footer from './Component/Footer/Footer'
import About from './Component/About/About'

function App() {
  // background-color: rgb(25 48 96);
  return (
    <div className='mainBackgroundColor' >
        <Navigation />
        <Routes>
          <Route path="/codyatra" element={<Home />}></Route>
          <Route path="/codyatra/about" element={<About/>}  />
        </Routes>
  <Footer/>
    </div>
  )
}

export default App
