import axios from "axios";
import React, { useEffect, useState } from "react";
import { getConfig, initUrl } from "../auth/auth";

export default function DoctorStatsCard() {
  const [consult,setConsult]=useState("");
  const [pending,setPending]=useState("");
    useEffect(()=>{
      const fetchData = async()=>{
        try {
          const config = getConfig();
          const did = localStorage.getItem('id');
          const res = await axios.post(initUrl+"/consult/activ/"+did,{},config);
          // console.log(res.data.length);
          setConsult(res.data.length);
          const res2 = await axios.post(initUrl+"/consult/blocked/"+did,{},config);
          // console.log(res2.data.length);
          setPending(res2.data.length);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    },[]);
    const headingStyles={
      margin:"0 auto",
      color:"#28328c"
  }
  return (
    <div style={{}}>
      <div className="row">
        <div className="col-md-4" style={{backgroundColor:"",margin:"0.5rem auto"}}>
          <h4 style={headingStyles}>{consult}</h4>
          <small>Consultations</small>
        </div>
        <div className="col-md-4" style={{backgroundColor:"",margin:"0.5rem auto"}}>
          <h4 style={headingStyles}>{pending}</h4>
          <small>Pending</small>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4" style={{backgroundColor:"",margin:"0.5rem auto"}}>
          <h4 style={headingStyles}>9</h4>
          <small>Experience(yrs)</small>
        </div>
        <div className="col-md-4 disabled" style={{backgroundColor:"",margin:"0.5rem auto",opacity:"0.3"}}>
          <h4 style={headingStyles}>3</h4>
          <small>Referrals</small>
        </div>
      </div>
    </div>
  );
}
