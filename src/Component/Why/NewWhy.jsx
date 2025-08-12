import React from 'react'
import './Why.css'

function NewWhy() {
    return (
        <div>
            <div className="container-fluid why-mainDiv mTop d-flex" >
                <div className='why_subDiv '>
                    <h2 className='text-center headWhy fw-bold display-5'>
                        How can <span className='text-dark'>Codyatra </span> help your business grow?
                    </h2>
                    <div className="container ans p-3">
                        <p className='border-dark'>
                            In today’s crowded digital space, businesses are not just looking for services — they’re looking for real partners, people who understand their goals, respect their vision, and go beyond the usual to create lasting impact.
                        </p>
                        <p className='border-dark text-align  para'>
                            That’s exactly what <span className='fw-bold'>Codyatra </span> stands for.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewWhy
