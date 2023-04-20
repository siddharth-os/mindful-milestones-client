import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getConfig, initUrl } from "../auth/auth";
import AdminDoctorStats from "./adminDoctorStats";
import {Link} from "react-router-dom";

export default function DoctorDetailsDiv(props) {
  const did = props.id;
  const [docDetail, setDocDetail] = useState({});
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const config = getConfig();
    const result = await axios.post(initUrl + "/doc/get/" + did,{}, config);
    setDocDetail(result.data);
  };
  return (
    <div className="container" style={{}}>
      <div className="row bg-light" style={{padding:"1rem", boxShadow: "6px 5px 8px gray",}}>
        <div className="col-md-2" style={{textAlign:"center"}}>
          <img
            className="doctor-img"
            src={require("./images/profile2-doctor.jpg")}
            alt="logo"
            style={{marginTop:"0.5rem" }}
          />
          <Link to={`/admin/doctor/edit/${did}`} style={{marginTop:"1rem"}}>Edit Details</Link>
        </div>
        <div className="col">
          <h3>{docDetail.name}</h3>
          <h6>Qual : {docDetail.qual}</h6>
          <h6>DOB : {docDetail.bDate}</h6>
          <h6>Email : {docDetail.email}</h6>
          <h6>License : {docDetail.lic}</h6>
        </div>
      </div>
      <AdminDoctorStats id={did}/>

    </div>
  );
}
