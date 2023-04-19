import React, { useEffect, useState } from "react";
import DoctorsList from "./doctorsList";
import AdminSidebar from "./adminSidebar";
import axios from "axios";
import { getConfig, initUrl, isTokenExist } from "../auth/auth";
import NotLoggedIn from "../auth/handleNotLoggedIn";
import { useNavigate } from "react-router-dom";
import WarningPage from "./warningPage";
export default function AdminHome() {
    const cardStyle={
        padding:"1rem",
        paddingLeft:"2rem",
        boxShadow:"6px 5px 8px gray",
        opacity:"1",
    };
    const [doclist,setDoclist]=useState();
    const [isToken,setIsToken]=useState(false);
    const [countOfDoc,setCountOfDoc] = useState(0);
    const [patCount,setPatCount] = useState("");
    const navigate = useNavigate();
    useEffect(()=>{
      //this is to set is Token
      setIsToken(isTokenExist());
      const fetchAllDoctors=async()=>{
        const config = getConfig();
        const res = await axios.get(initUrl+"/doc/getcount",config);
        setCountOfDoc(res.data);
        const res2 = await axios.post(initUrl+"/pat/getall",{},config);
        // console.log(res2.data);
        setPatCount(res2.data);
      };
      fetchAllDoctors();
    },[]);
    if(!isToken){
      return(<WarningPage/>);
    }
    else
  return (
    <div className="container row" style={{ margin: "0.5rem auto" }}>
      <div className="col-12 col-md-3" style={{}}>
        <AdminSidebar/>
      </div>
      <div className="col-12 col-md-9 dashboard" style={{}}>
        <div className="row" style={{marginBottom:"1rem"}}>
          <div className="col-md-4">
            <div className="bg-light" style={cardStyle}>
                <h3>Doctor</h3>
                <small>Count of Doctor</small>
                <h1 style={{fontSize:"4rem"}}>{countOfDoc}</h1>
            </div>
          </div>
          <div className="col-md-4">
          <div className="bg-light" style={cardStyle}>
                <h3>Patients</h3>
                <small>Count of Patients</small>
                <h1 style={{fontSize:"4rem"}}>{patCount}</h1>
            </div>
          </div>
          <div className="col-md-4">
          <div className="bg-light" style={cardStyle}>
                <h3>Testimonials</h3>
                <small>Count of Testimonials</small>
                <h1 style={{fontSize:"4rem"}}>37</h1>
            </div>
          </div>
        </div>
        <div className="bg-light" style={{padding:"0.5rem",textAlign:"center",marginBottom:"1rem",}}>
            <h3>List of Doctors</h3>
        </div>
        <div className="bg-light" style={{padding:"0.5rem",textAlign:"center",height:"350px",overflow:"auto"}}>
            <DoctorsList/>
        </div>
      </div>
    </div>
  );
}
