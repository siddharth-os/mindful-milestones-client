import React, { useState } from "react";
import DoctorsList from "./doctorsList";
import AdminSidebar from "./adminSidebar";
import axios from "axios";
import { isTokenExist } from "../auth/auth";
import NotLoggedIn from "../auth/handleNotLoggedIn";
import { useNavigate } from "react-router-dom";
export default function AdminHome() {
    const cardStyle={
        padding:"1rem",
        paddingLeft:"2rem",
        boxShadow:"6px 5px 8px gray",
        opacity:"1",
    };
    const [doclist,setDoclist]=useState([]);
    const [isToken,setIsToken]=useState(false);
    const navigate = useNavigate();
    useState(()=>{
      //this is to set is Token
      // setIsToken(isTokenExist());
      setIsToken(true);
      const fetchAllDoctors=async()=>{
        const token = 'Bearer '+localStorage.getItem('jwtToken');
        console.log(token);
        let config = {
            headers: {
              'Authorization':token,
            },
          }
        // const result= await axios.get("http://172.16.138.189:8080/doc/getall",config);
        const result= await axios.get("http://localhost:8080/doc/getall",config);
        console.log(result.data);
      };
    },[]);
    const directToDoctor=()=>{
      navigate("/doctor/login");
    }
    const directToAdmin=()=>{
      navigate("/admin/login");
    }
    if(!isToken){
      return(
        <div className="container" style={{margin:"1rem auto"}}>
          <h2>You are Not Logged In!!! Please Login.</h2>
          <button className="btn btn-dark" onClick={directToAdmin} style={{borderRadius:"0",marginRight:"1rem"}}>Admin</button>
          <button className="btn btn-dark" onClick={directToDoctor} style={{borderRadius:"0"}}>Doctor</button>
        </div>
      );
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
                <h1 style={{fontSize:"4rem"}}>37</h1>
            </div>
          </div>
          <div className="col-md-4">
          <div className="bg-light" style={cardStyle}>
                <h3>Patients</h3>
                <small>Count of Doctor</small>
                <h1 style={{fontSize:"4rem"}}>37</h1>
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
