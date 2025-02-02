import React, { useState } from "react";
import HeroSection from "../../../Components/HeroSection";
import AdminSidebar from "../../../Components/AdminSidebar";
import { Link } from "react-router-dom";
import formvalidators from "../../../formvalidatiors/formvalidators";
import imagevalidatiors from "../../../formvalidatiors/imagevalidatiors";

export default function AdminCreateMaincategory() {
  let [data, setData] = useState({
    name: "",
    pic: "",
    active: true,
  });
  let [error, setError] = useState({
    name: "Name Field Is Mendatory",
    pic: "Pic Field Is Mendatory",
  });
  let [show, setShow] = useState(false);

  function getInputData(e) {
    let name = e.target.name;
    let value = e.target.files ? "/product/" + e.target.files[0].name : e.target.value;

    if (name !== "active") {
      setError((old) => {
        return {
          ...old,
          [name]: e.target.files ? imagevalidatiors(e):  formvalidators(e),
        };
      });
    }

    setData((old) => {
      return {
        ...old,
        [name]: name === "active" ? (value === "1" ? true : false) : value,
      };
    });
  }
 async function postSubmit(e) {
     e.preventDefault()
     let errorItem = Object.values(error).find(x=>x!=="") 
     if(errorItem){
          setShow(true)
     }
     else{
         let response = await fetch()
     }
  }
  return (
    <>
      <HeroSection title="Admin - Maincategory" />
      <div className="container-fluid py-5 mb-5">
        <div className="row">
          <div className="col-md-3">
            <AdminSidebar />
          </div>
          <div className="col-md-9">
            <h5 className="bg-primary text-light text-center p-2">
              Maincategory{" "}
              <Link to="/admin/maincategory/">
                <i className="fa fa-arrow-left text-light float-end"></i>
              </Link>{" "}
            </h5>

            <form onSubmit={postSubmit}>
              <div className="mb-3"> 
                <label>Name*</label>
                <input
                  type="text"
                  name="name"
                  onChange={getInputData}
                  placeholder="Maincategory Name"
                  className={`form-control border-3 ${
                    show && error.name ? "border-danger" : "border-primary"
                  } `}
                />
                {show && error.name ? (
                  <p className="text-danger">{error.name}</p>
                ) : null}
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label>Pic*</label>
                  <input
                    type="file"
                    name="name"
                    onChange={getInputData}
                    className={`form-control border-3 ${
                      show && error.pic ? "border-danger" : "border-primary"
                    } `}
                  />
                  {show && error.pic ? (
                    <p className="text-danger">{error.pic}</p>
                  ) : null}
                </div>
                <div className="col-md-6 mb-3">
                  <label>Active*</label>
                  <select
                    name="active"
                    onChange={getInputData}
                    className="form-select border-3 border-primary"
                  >
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>

              <div className="mb-3">
                <button type="submit" className="btn btn-primary w-100">
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
