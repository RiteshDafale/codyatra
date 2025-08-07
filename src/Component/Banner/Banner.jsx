import React from 'react'
import '../Banner/Banner.css'
import banner from '../Banner/BannerImage/Banner.png';

function Banner() {
    return (
        <div className='mainBanner'>


            <img src={banner} class="img-fluid" alt="..."></img>

        </div>
    )
}

export default Banner
