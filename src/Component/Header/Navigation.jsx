import React from 'react'
import './Navigation.css';
import logo from '../Images/Logo/Logo.png';
import { useNavigation, Link } from 'react-router-dom'

function Navigation() {

    // const navigate = useNavigation();
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark p-3">
                <div className="container-fluid">
                    {/* <a className="navbar-brand text-light" href="#">{logo}</a> */}
                    <img src={logo} alt="some issue with logo" className='Mainlogo'></img>
                    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon bg-light"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 m-auto">
                            <li className="nav-item me-2 ">
                                {/* <a className="nav-link text-light hoverA " aria-current="page" href="/codyatra">Home</a> */}
                                <Link className="nav-link text-light hoverA " to="/codyatra"> Home</Link>
                            </li>
                            <li className="nav-item me-2 ">
                                {/* <a className="nav-link text-light hoverA" href="#">Our Services</a> */}
                                <Link className="nav-link text-light hoverA " to="/codyatra/outservices"> Our Services</Link>
                            </li>
                            <li className="nav-item me-2">
                                {/* <a className="nav-link text-light hoverA " href="#" >Pricing plan</a> */}
                                <Link className="nav-link text-light hoverA " to="/codyatra/pricingplan"> Pricing plan</Link>
                            </li>
                            <li className="nav-item me-2">
                                {/* <a className="nav-link text-light hoverA " href="#" >Testimonial</a> */}
                                <Link className="nav-link text-light hoverA " to="/codyatra/testmonial">Testimonial</Link>
                            </li>
                            <li className="nav-item me-2">
                                {/* <a className="nav-link text-light hoverA  " href="#" >Dashboard</a> */}
                                <Link className="nav-link text-light hoverA " to="#"> Dashboard</Link>
                            </li>
                            <li className="nav-item me-2">
                                {/* <a className="nav-link text-light hoverA " href="#" >Free Tools</a> */}
                             <Link className="nav-link text-light hoverA " to="#">Free Tools</Link>
                            </li>
                            <li className="nav-item me-2">
                                {/* <a className="nav-link text-light hoverA " href="#" >Free Tools</a> */}
                             <Link className="nav-link text-light hoverA " to="/codyatra/about">About Codyatra</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="button">
                            <button className="btn btn-primary" type="submit">Contact us</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
