import React from 'react'
import './Navigation.css';
import logo from '../Images/Logo/Logo.png';

function Navigation() {
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
                                <a className="nav-link text-light hoverA " aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item me-2 ">
                                <a className="nav-link text-light hoverA" href="#">Our Services</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link text-light hoverA " href="#" >Pricing plan</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link text-light hoverA " href="#" >Testimonial</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link text-light hoverA  " href="#" >Dashboard</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link text-light hoverA " href="#" >Free Tools</a>
                            </li>
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    About
                                </a>
                                <ul className="dropdown-menu  ">
                                    <li><a className="dropdown-item " href="#">Why Codyatra</a></li>
                                    <li><a className="dropdown-item " href="#">About process</a></li>
                                    <li><a className="dropdown-item " href="#">About us</a></li>
                                    <li><a className="dropdown-item " href="#">Founder and co Founder</a></li>
                                </ul>
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
