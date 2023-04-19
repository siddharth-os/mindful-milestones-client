import axios from "axios";
import React, { useEffect, useState } from "react";
import { getConfig, initUrl } from "../auth/auth";

export default function DoctorSideBarCard() {
  const [docDetail,setDoctorDetail]=useState({});
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const did = localStorage.getItem('id');
        const config = getConfig();
        const res = await axios.get(initUrl+"/doc/get/"+did,config);
        // console.log(res.data);
        setDoctorDetail(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[]);
  return (
    <div className="Doc-sidebar-card" style={{ textAlign: "center" }}>
      <img
        className="doctor-img"
        src={require("./images/profile2-doctor.jpg")}
        alt="logo"
        style={{ marginBottom: "1rem" }}
      />
      <h4 className="dark-blue-heading">Dr. {docDetail.name}</h4>
      {/* <h6>Pagal Aurat</h6> */}
      <h6>{docDetail.qual}, {docDetail.specs}</h6>
      <small>English,Hindi</small>
    </div>
  );
}
