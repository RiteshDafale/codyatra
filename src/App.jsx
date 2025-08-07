import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Home/Home'
import './App.css'

function App() {
  // background-color: rgb(25 48 96);
  return (
    <div className='mainBackgroundColor' >
      {/* <BrowserRouter> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="*" element={<NotFound />} />  */}
        </Routes>
      {/* </BrowserRouter> */}

    </div>
  )
}

export default App
