import React from 'react'
import Navigation from '../Header/Navigation'
import Banner from '../Banner/Banner'
import Services from '../Services/Services'
import Why from '../Why/Why'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <div>
      <Navigation />
      <Banner />
      <Why />
      <Services />
      <Footer/>
    </div>
  )
}

export default Home
