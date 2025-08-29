import React, { useState } from 'react'
import '../Dashboard/Dashboard.css';

function Dashboard() {
  useState(()=>{
    document.title="Dashboard - Codyatra"
  })
  return (
    <div>
   <h3 className='text-danger text-center my-4' style={{height:"100vh"}}>Comming soon --- UNDERMAINTAINANCE</h3>
    </div>
  )
}

export default Dashboard
