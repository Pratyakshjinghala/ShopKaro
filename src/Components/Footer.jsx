import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
   <>
      
         <div className="container-fluid footer bg-dark wow fadeIn" data-wow-delay=".3s">
            <div className="container pt-5 pb-4">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <a href="index.html">
                            <h1 className="text-white fw-bold d-block">Shop<span className="text-secondary">Karo</span> </h1>
                        </a>
                        <p className="mt-4 text-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere delectus qui placeat inventore consectetur repellendus optio debitis.</p>
                        <div className="d-flex hightech-link">
                            <Link to="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-facebook-f text-primary"></i></Link>
                            <Link to="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-twitter text-primary"></i></Link>
                            <Link to="#" className="btn-light nav-fill btn btn-square rounded-circle me-2"><i className="fab fa-instagram text-primary"></i></Link>
                            <Link to="#" className="btn-light nav-fill btn btn-square rounded-circle me-0"><i className="fab fa-linkedin-in text-primary"></i></Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3  className="h3 text-secondary">Quick Link</h3>
                        <div className="mt-4 d-flex flex-column short-link">
                            <Link to="/contactus" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Contact us</Link>
                            <Link to="/about" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>About Us</Link>
                            <Link to="#" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Privacy Policy</Link>
                            <Link to="#" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Terms $ Conditions</Link>
                            <Link to="#" className="mb-2 text-white"><i className="fas fa-angle-right text-secondary me-2"></i>Refund Policy</Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6">
                    <h3  className="h3 text-secondary">Contact Us</h3>
                        <div className="text-white mt-4 d-flex flex-column contact-link">
                            <Link to="/"  className="pb-3 text-light border-bottom border-primary"><i className="fas fa-map-marker-alt text-secondary me-2"></i> B-47 3rd stret , New Ashok Nagar</Link>
                            <Link to="tel:+916398452846" target='_blank' rel='noreferrer' className="py-3 text-light border-bottom border-primary"><i className="fas fa-phone-alt text-secondary me-2"></i> +916398452846</Link>
                            <Link to="mailto:cpratyaksh864@gmail.com" target='_blank' rel='noreferrer' className="py-3 text-light border-bottom border-primary"><i className="fas fa-envelope text-secondary me-2"></i> cpratyaksh864@gmail.com</Link>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                    <h3  className="h3 text-secondary mb-4">Newsletter</h3>
                    <h6 className='text-light'>Subscribe Our Newsletter Service To Get Latest Updates About Our New Product And Great Deals</h6>
                        <form action="">
                            <div className="mb-3"><input type="email" name='email' placeholder='Email Address' className='form-control' /></div>
                            <button className='btn btn-secondary w-100' >Submit</button>
                        </form>
                    </div>
                </div>
                <hr className="text-light mt-5 mb-4"/>
                <div className="row">
                    <div className="col-md-6 text-center text-md-start">
                        <span className="text-light"><a href="#" className="text-secondary"><i className="fas fa-copyright text-secondary me-2"></i>Your Site Name</a>, All right reserved.</span>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                       
                        <span className="text-light">Designed By<a href="https://htmlcodex.com" className="text-secondary">HTML Codex</a> Distributed By <a href="https://themewagon.com">ThemeWagon</a></span>
                    </div>
                </div>
            </div>
        </div>
        
   </>
  )
}
