import React from "react";

export default function PatientSeverity() {
  return (
    <div className="doctor-milestone-card" style={{paddingRight:"2rem",paddingLeft:"2rem"}}>
      <h4 className="blue-heading">Severity</h4>
      <small>This indicates severity of patients.</small>
      <div class="progress">
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{width:"60%"}}
          aria-valuenow={60}
          aria-valuemin="0"
          aria-valuemax="100"
        >60%</div>
      </div>
    </div>
  );
}
