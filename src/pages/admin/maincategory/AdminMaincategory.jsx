import React from 'react'
import HeroSection from '../../../Components/HeroSection'
import AdminSidebar from '../../../Components/AdminSidebar'
import { Link } from 'react-router-dom'


export default function AdminMaincategory() {
  return (
   <>
   <HeroSection title="Admin - Maincategory"/>
   <div className="container-fluid py-5 mb-5">
   <div className="row">
    <div className="col-md-3">
         <AdminSidebar/>
    </div>
    <div className="col-md-9">
         <h5 className="bg-primary text-light text-center p-2">Maincategory <Link to="/admin/maincategory/create"><i className='fa fa-plus text-light float-end'></i ></Link> </h5>
    </div>
   </div>
   </div>
   </>
  )
}
