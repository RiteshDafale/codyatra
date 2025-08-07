import React from 'react'
import '../Banner/Banner.css'

function Banner() {
    return (
        <div className='container text-center mt-5 bannerFirstdiv '>
            <h4 className='starter_head1 display-6'>Crafting Code . Building Features</h4>
            <p className='text-dark fs-5 '>We turn  ideas into fast , scalable , beautiful  software .</p>
            <div className="container starter_buttons ">
                <div className="row  ">
                    <div className="col-lg-6 col-sm-12 ">
                        <button className='starter-btn' style={{ backgroundColor:"#1E253A" }}>View out Work </button>
                    </div>
                    <div className="col-lg-6 col-sm-12 mt-2 ">
                       <button className='starter-btn' style={{ backgroundColor:"#1E253A" }}>Contact us </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
