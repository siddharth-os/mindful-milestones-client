import React from "react";

export default function PatientBodyInfo(){
    const headingStyles={
        margin:"0 auto",
        color:"#28328c"
    }
  return (
    <div style={{}}>
      <div className="row">
        <div className="col-md-4" style={{backgroundColor:"",margin:"0.5rem auto"}}>
          <h3 style={headingStyles}>23</h3>
          <small>Age</small>
        </div>
        <div className="col-md-4" style={{backgroundColor:"",margin:"0.5rem auto"}}>
          <h3 style={headingStyles}>A+</h3>
          <small>Blood</small>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4" style={{backgroundColor:"",margin:"0.5rem auto"}}>
          <h3 style={headingStyles}>180</h3>
          <small>Height(in cms)</small>
        </div>
        <div className="col-md-4" style={{backgroundColor:"",margin:"0.5rem auto"}}>
          <h3 style={headingStyles}>74</h3>
          <small>Weight(in kgs)</small>
        </div>
      </div>
    </div>
  );
}