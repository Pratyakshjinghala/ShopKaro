import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
     
        <div className="container-fluid bg-dark py-2 d-none d-md-flex">
            <div className="container">
                <div className="d-flex justify-content-between topbar">
                    <div className="top-info">
                        <small className="me-3 text-white-50"><Link to="mailto:cpratyaksh864@gmail.com" target='_blank' rel='noreferrer'  ><i className="fas fa-envelope me-2 text-secondary "></i></Link>cpratyaksh864@gmail.com</small>
                        <small className="me-3 text-white-50"><Link to="tel:+916398452846"><i className="fas fa-envelope me-2 text-secondary"></i></Link>+916398452846</small>
                        
                    </div>
                    <div id="note" className="text-secondary d-none d-xl-flex"><small>Note : We help you to Grow your Business</small></div>
                    <div className="top-link">
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-facebook-f text-primary"></i></a>
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-twitter text-primary"></i></a>
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle"><i className="fab fa-instagram text-primary"></i></a>
                        <a href="" className="bg-light nav-fill btn btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></a>
                    </div>
                </div>
            </div>
        </div>
        

  
        <div className="container-fluid bg-primary sticky-top">
            <div className="mx-5">
                <nav className="navbar navbar-dark navbar-expand-lg py-0">
                    <Link to="/" className="navbar-brand">
                        <h1 className="text-white fw-bold d-block">Shop<span className="text-secondary">Karo</span> </h1>
                    </Link>
                    <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-transparent" id="navbarCollapse">
                        <div className="navbar-nav ms-auto mx-xl-auto p-0">
                            <NavLink to="/" className="nav-item nav-link  text-secondary">Home</NavLink>
                            <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                            <NavLink to="/shop" className="nav-item nav-link">Shop</NavLink>
                            <NavLink to="features" className="nav-item nav-link">Features</NavLink>
                            <NavLink to="/testimonials" className="nav-item nav-link">Testimonials</NavLink>
                            <NavLink to="/contactus" className="nav-item nav-link">Contact Us</NavLink> 
                            <NavLink to="/admin" className="nav-item nav-link">Admin</NavLink> 
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded">
                                    <a href="blog.html" className="dropdown-item">Our Blog</a>
                                    <a href="team.html" className="dropdown-item">Our Team</a>
                                    <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                    <a href="404.html" className="dropdown-item">404 Page</a>
                                </div>
                            </div>
                            <a href="contact.html" className="nav-item nav-link">Contact</a>
                        </div>
                    </div>
                    <div className="d-none d-xl-flex flex-shirink-0">
                        <div id="phone-tada" className="d-flex align-items-center justify-content-center me-4">
                            <a href="" className="position-relative animated tada infinite">
                                <i className="fa fa-phone-alt text-white fa-2x"></i>
                                <div className="position-absolute" style={{top: "-7px", left: "20px"}}>
                                    <span><i className="fa fa-comment-dots text-secondary"></i></span>
                                </div>
                            </a>
                        </div>
                        <div className="d-flex flex-column ">
                            <span className="text-white-50">Have any questions?</span>
                            <span className="text-secondary">Call:+916398452846 <Link to="tel:+916398452846" target='_blank'rel='noreferrer' ></Link> </span>
                        </div>
                       
                    </div>
                </nav>
            </div>
        </div>
        
    </>
  )
}
