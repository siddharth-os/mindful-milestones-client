import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getConfig, initUrl } from "../auth/auth";

export default function PatientBodyInfo(props){
  const {pid}=props;
  const [detail,setDetail]=useState({});
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const config = getConfig();
        const res = await axios.post(initUrl+"/get/patient/"+pid,{},config);
        console.log(res.data);
        setDetail(res.data);
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
          <h3 style={headingStyles}>{detail.age}</h3>
          <small>Age</small>
        </div>
        <div className="col-md-4" style={{backgroundColor:"",margin:"0.5rem auto"}}>
          <h3 style={headingStyles}>{detail.bloodgroup}</h3>
          <small>Blood</small>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4" style={{backgroundColor:"",margin:"0.5rem auto"}}>
          <h3 style={headingStyles}>{detail.height}</h3>
          <small>Height(in cms)</small>
        </div>
        <div className="col-md-4" style={{backgroundColor:"",margin:"0.5rem auto"}}>
          <h3 style={headingStyles}>{detail.weight}</h3>
          <small>Weight(in kgs)</small>
        </div>
      </div>
    </div>
  );
}