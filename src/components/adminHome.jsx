import React, { useState } from "react";
import DoctorsList from "./doctorsList";
import AdminSidebar from "./adminSidebar";
import axios from "axios";
export default function AdminHome() {
    const cardStyle={
        padding:"1rem",
        paddingLeft:"2rem",
        boxShadow:"6px 5px 8px gray",
        opacity:"1",
        // borderTopRightRadius:"50px",
        // borderBottomLeftRadius:"50px",
        // backgroundImage: "linear-gradient(to right bottom, #ffffff, #f6f6f9, #ecedf2, #e2e4ec, #d8dce6, #d0dbeb, #c6daef, #badaf2, #a5e2fc, #8bebff, #71f3fd, #5ffbf1)",
        // backgroundImage: "linear-gradient(to right bottom, #11d7cc, #40d4de, #69cfe6, #8ccae6, #a7c6df, #aac7dd, #aec7dc, #b1c8da, #a4cddf, #95d1e0, #88d6dd, #80dad4)"
      
        // // background: "rgb(255,255,255)",
        // background: "linear-gradient(90deg, rgba(255,255,255,1) 3%, rgba(173,173,173,1) 6%, rgba(247,247,250,1) 11%, rgba(121,227,211,1) 70%)"
    };
    const [doclist,setDoclist]=useState([]);
    useState(()=>{
      const fetchAllDoctors=async()=>{
        const token = 'Bearer '+localStorage.getItem('jwtToken');
        console.log(token);
        let config = {
            headers: {
              'Authorization':token,
            },
          }
        const result= await axios.get("http://172.16.138.189:8080/doc/getall",config);
        // setDoclist(result.data[0]);
        // console.log(doclist);
        console.log(result.data);
      };
      fetchAllDoctors();
    },[]);
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
