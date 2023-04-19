import axios from "axios";
import React, { useEffect, useState } from "react";
import { getConfig, initUrl } from "../auth/auth";

export default function AdminDoctorStats(props) {
  const did=props.id;
  const [consult,setConsult]=useState("");
  const [pending,setPending]=useState("");
    useEffect(()=>{
      const fetchData = async()=>{
        try {
          const config = getConfig();
          const res = await axios.post(initUrl+"/consult/activ/"+did,{},config);
          console.log(res.data.length);
          setConsult(res.data.length);
          const res2 = await axios.post(initUrl+"/consult/blocked/"+did,{},config);
          console.log(res2.data.length);
          setPending(res2.data.length);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    },[]);
  const cardStyle = {
    padding: "1rem",
    paddingLeft: "2rem",
    boxShadow: "6px 5px 8px gray",
    opacity: "1",
  };
  return (
    <div className="row" style={{marginTop:"1rem"}}>
      <div className="col-md-4">
        <div className="bg-light" style={cardStyle}>
          <h3>Consulted</h3>
          <h1 style={{ fontSize: "3rem" }}>{consult}</h1>
          <small>Patients Consulted</small>
        </div>
      </div>
      <div className="col-md-4">
        <div className="bg-light" style={cardStyle}>
          <h3>Waitlisted</h3>
          <h1 style={{ fontSize: "3rem" }}>{pending}</h1>
          <small>Patients Waitlisted</small>
        </div>
      </div>
      <div className="col-md-4">
        <div className="bg-light" style={cardStyle}>
          <h3>Healthy</h3>
          <h1 style={{ fontSize: "3rem" }}>7</h1>
          <small>Almost Recovered</small>
        </div>
      </div>
    </div>
  );
}
