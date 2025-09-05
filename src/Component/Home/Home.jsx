import React, { useEffect, Suspense } from 'react'
import Banner from '../Banner/Banner'
import Services from '../Services/Services'
import Why from '../Why/Why'
// import NewService from '../Services/NewServices1'    // lazy load 
const NewService = React.lazy(() => import('../Services/NewServices1'));
import OwnerDetails from '../Owner/OwnerDetails'

function Home() {

  useEffect(() => {
    document.title = "Codyatra - Digital Marketting"
  }, [])


  return (
    <div >
      {/* <Banner /> */}
      {/* <Services /> */}
      <Why />
      <Suspense fallback={<div>Loading Please wait ...</div>}>
        <NewService />
      </Suspense>
      <OwnerDetails />
    </div>
  )
}

export default Home
