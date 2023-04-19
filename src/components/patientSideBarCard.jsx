import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function PatientSideBarCard(props) {
  const {pid}=props;
  const [detail,setDetail]=useState();
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        // const res = await axios.post(initUrl+"") 
        
      } catch (error) {
        
      }
    }   

    fetchData();
  },[]);
  return (
    <div className="Doc-sidebar-card" style={{ textAlign: "center" }}>
      <img
        className="doctor-img"
        src={require("./images/patientprofile2.jpg")}
        alt="logo"
        style={{ marginBottom: "1rem" }}
      />
      <h4 className="dark-blue-heading">Pankaj Udaas</h4>
      {/* <h6>Pagal Aurat</h6> */}
      <h6>Depression, Anxiety</h6>
      <small>English,Hindi</small>
    </div>
  );
}
