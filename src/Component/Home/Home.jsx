import React, { useEffect } from 'react'
import Banner from '../Banner/Banner'
import Services from '../Services/Services'
import Why from '../Why/Why'
import NewService from '../Services/NewServices1'
import OwnerDetails from '../Owner/OwnerDetails'

function Home() {

  useEffect(() => {
    document.title = "Codyatra - Digital Marketting"
  }, [])


  return (
    <div>
      {/* <Banner /> */}
      {/* <Services /> */}
      <Why />
      <NewService />
      <OwnerDetails />
    </div>
  )
}

export default Home
