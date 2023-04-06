import React from "react";
import DoctorsList from "./doctorsList";
import AdminSidebar from "./adminSidebar";
export default function AdminHome() {
    const cardStyle={
        padding:"1rem",
        boxShadow:"6px 5px 8px gray"
    };
  return (
    <div className="container row" style={{ margin: "0.5rem auto" }}>
      <div className="col-12 col-md-3" style={{}}>
        <AdminSidebar/>
      </div>
      <div className="col-12 col-md-9 dashboard" style={{}}>
        <div className="row" style={{marginBottom:"1rem"}}>
          <div className="col-md-4">
            <div className="bg-light" style={cardStyle}>
                <h3>Doctor</h3>
                <small>Count of Doctor</small>
                <h1 style={{fontSize:"4rem"}}>37</h1>
            </div>
          </div>
          <div className="col-md-4">
          <div className="bg-light" style={cardStyle}>
                <h3>Patients</h3>
                <small>Count of Doctor</small>
                <h1 style={{fontSize:"4rem"}}>37</h1>
            </div>
          </div>
          <div className="col-md-4">
          <div className="bg-light" style={cardStyle}>
                <h3>Testimonials</h3>
                <small>Count of Testimonials</small>
                <h1 style={{fontSize:"4rem"}}>37</h1>
            </div>
          </div>
        </div>
        <div className="bg-light" style={{padding:"0.5rem",textAlign:"center",marginBottom:"1rem"}}>
            <h3>List of Doctors</h3>
        </div>
        <div className="bg-light" style={{padding:"0.5rem",textAlign:"center",height:"350px",overflow:"auto"}}>
            <DoctorsList/>
        </div>
      </div>
    </div>
  );
}
