import axios from "axios";
import React, { useEffect, useState } from "react";
import { getConfig, initUrl } from "../auth/auth";

export default function PatientSeverity(props) {
  const {pid}=props;
  const [score,setScore]=useState("");
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const config = getConfig();
        const res = await axios.post(initUrl+"/get/patient/"+pid,{},config);
        if(res.data.score===null){
          setScore(0);
        }
        else{
          setScore(parseInt(res.data.score)*10);
        }
      } catch (error) {
        console.log(error);
      }
    }   

    fetchData();
  },[]);
  return (
    <div className="doctor-milestone-card" style={{paddingRight:"2rem",paddingLeft:"2rem"}}>
      <h4 className="blue-heading">Severity</h4>
      <small>This indicates severity of patients.</small>
      <div class="progress">
        <div
          className="progress-bar bg-danger"
          role="progressbar"
          style={{width:score.toString()+"%"}}
          aria-valuenow={score}
          aria-valuemin="0"
          aria-valuemax="100"
        >{score}%</div>
      </div>
    </div>
  );
}
