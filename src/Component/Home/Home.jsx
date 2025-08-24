import React from 'react'
import Navigation from '../Header/Navigation'
import Banner from '../Banner/Banner'
import Services from '../Services/Services'
import Why from '../Why/Why'
import Footer from '../Footer/Footer'
import NewService from '../Services/NewServices1'
import OwnerDetails from '../Owner/OwnerDetails'

function Home() {
  return (
    <div>    
      <Banner />
      {/* <Services /> */}
      <NewService/>
      <OwnerDetails/>
      <Why />
      
    </div>
  )
}

export default Home
