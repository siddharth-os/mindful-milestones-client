import React from "react";

export default function DoctorStatsCard() {
    const headingStyles={
        margin:"0 auto",
    }
  return (
    <div style={{}}>
      <div className="row">
        <div className="col-md-4" style={{backgroundColor:"",margin:"0.5rem auto"}}>
          <h3 style={headingStyles}>23</h3>
          <small>Consultations</small>
        </div>
        <div className="col-md-4" style={{backgroundColor:"",margin:"0.5rem auto"}}>
          <h3 style={headingStyles}>7</h3>
          <small>Pending</small>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4" style={{backgroundColor:"",margin:"0.5rem auto"}}>
          <h3 style={headingStyles}>9</h3>
          <small>Experience(yrs)</small>
        </div>
        <div className="col-md-4" style={{backgroundColor:"",margin:"0.5rem auto"}}>
          <h3 style={headingStyles}>3</h3>
          <small>Referrals</small>
        </div>
      </div>
    </div>
  );
}
