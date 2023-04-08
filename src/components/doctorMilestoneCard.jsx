import React from "react";
import { useState } from "react";

export default function DoctorMilestoneCard() {
    const [patientConsulted,setPatientConsulted]=useState("27");
  return (
    <div className="doctor-milestone-card" style={{paddingRight:"2rem",paddingLeft:"2rem"}}>
      <h4 className="blue-heading">{patientConsulted} Patients</h4>
      <small>Next Milestone 100 Patients</small>
      <div class="progress">
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{width:"23%"}}
          aria-valuenow={patientConsulted}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}
