import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { getConfig, initUrl } from "../auth/auth";

export default function DoctorMilestoneCard() {
    const [patientConsulted,setPatientConsulted]=useState("27");
    useEffect(()=>{
      const fetchData = async()=>{
        try {
          const config = getConfig();
          const did = localStorage.getItem('id');
          const res = await axios.post(initUrl+"/consult/activ/"+did,{},config);
          // console.log(res.data.length);
          setPatientConsulted(res.data.length);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    },[]);
  return (
    <div className="doctor-milestone-card" style={{paddingRight:"2rem",paddingLeft:"2rem"}}>
      <h4 className="blue-heading">{patientConsulted} Patients</h4>
      <small>Next Milestone 10 Patients</small>
      <div class="progress">
        <div
          className="progress-bar bg-info"
          role="progressbar"
          style={{width:patientConsulted*10+"%"}}
          aria-valuenow={patientConsulted}
          aria-valuemin="0"
          aria-valuemax="10"
        ></div>
      </div>
    </div>
  );
}
