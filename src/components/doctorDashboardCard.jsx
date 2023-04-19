import axios from "axios";
import React, { useEffect, useState } from "react";
import { getConfig, initUrl } from "../auth/auth";

export default function DoctorDashboardCard() {
  const [consult,setConsult]=useState("");
  const [waitlisted,setwaitlisted]=useState("");
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
          setwaitlisted(res2.data.length);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    },[]);
  const cardStyle = {
    backgroundColor: "#FDF4F5",
    margin: "1rem",
    padding: "0.5rem",
    borderRadius: "20px",
    boxShadow:"8px 8px 8px gray",
  };
  return (
    <div className="row" style={{ display: "flex", justifyContent: "center" }}>
      <div className="col" style={cardStyle}>
        <div className="row">
          <div className="col">
            <h1 style={{ textAlign: "center", fontSize: "4rem",color:"#B2A4FF" }}>
              <i className="fa-solid fa-hospital-user"></i>
            </h1>
          </div>
          <div className="col" style={{ marginTop: "0.5rem" }}>
            <h6 className="dark-blue-heading">Active</h6>
            <h2 className="dark-blue-heading">{consult}</h2>
          </div>
        </div>
      </div>
      <div className="col" style={cardStyle}>
        <div className="row" style={{}}>
          <div className="col">
            <h1 style={{ textAlign: "center", fontSize: "4rem",color:" #87ceeb "}}>
              <i class="fa-solid fa-hourglass-start"></i>
            </h1>
          </div>
          <div className="col" style={{ marginTop: "0.5rem" }}>
            <h6 className="dark-blue-heading">Waitlisted</h6>
            <h2 className="dark-blue-heading">{waitlisted}</h2>
          </div>
        </div>
      </div>
      <div className="col" style={cardStyle}>
        <div className="row" style={{}}>
          <div className="col">
            <h1 style={{ textAlign: "center", fontSize: "4rem",color:"#FC2947" }}>
            <i class="fa-solid fa-heart"></i>
            </h1>
          </div>
          <div className="col" style={{ marginTop: "0.5rem" }}>
            <h6 className="dark-blue-heading">Healthy</h6>
            <h2 className="dark-blue-heading">5</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
