import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getConfig, initUrl, isDoctor, logout } from "../auth/auth";
import DoctorLogoutSideBar from "./doctorLogout";
import DoctorMilestoneCard from "./doctorMilestoneCard";
import DoctorSideBarCard from "./doctorSideBarCard";
import DoctorStatsCard from "./doctorStatsCard";
import PatientBackButton from "./patientBackButton";

export default function DoctorReset(){
    const [password,setPassword] = useState("");
    const [password2,setPassword2] = useState("");
    const [newPassword,setNewPassword]=useState("");
    const navigate = useNavigate();

    useEffect(()=>{
      if(!isDoctor()){
        logout();
        navigate("/doctor/login");
      }
    },[])
    const sideBarStyle2={
        backgroundColor:"#FDF4F5",padding:"1rem",borderRadius:"20px",boxShadow:"8px 8px 8px gray",
        margin:"1rem auto"
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        //currentpwd,newpwd,role;
        if(password2===newPassword){
            try {
                const config = getConfig();
                const res = await axios.post(initUrl+"/doc/resetpwd",{currentpwd:password,newpwd:newPassword,role:1},config);
                console.log(res.data);
                alert("Password Changed Successfully");
                navigate("/doctor/home");
            } catch (error) {
                console.log(error);
                alert("Invalid Credentials");   
            }
        }
        else{
            alert("New Password Mismatched");
        }
    }
    return(
        <div className="container row" style={{margin:"1rem auto"}}>
        
        <div className="col-12 col-md-4" style={sideBarStyle2}>
            <hr />
            <h3 className="blue-heading" style={{textAlign:"center"}}>Update Password</h3>
            <hr />
            <form onSubmit={handleSubmit}>
              <div className="form-group" style={{marginBottom:"1rem"}}>
                <label htmlFor="username">Current Password</label>
                <input type="password" className="form-control" id="username" placeholder="Enter Password" style={{borderRadius: "20px"}} value={password} onChange={(e)=>setPassword(e.target.value)} required/>
              </div>
              <div className="form-group" style={{marginBottom:"1rem"}}>
                <label htmlFor="password">Enter New Password</label>
                <input type="password" className="form-control" id="password" placeholder="Re Enter Password" style={{borderRadius: "20px"}} value={password2} onChange={(e)=>setPassword2(e.target.value)} required/>
              </div>
              <div className="form-group" style={{marginBottom:"1rem"}}>
                <label htmlFor="password">Re Enter New Password</label>
                <input type="password" className="form-control" id="password2" placeholder="Enter New Password" style={{borderRadius: "20px"}} value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} required/>
              </div>
              <div style={{display:"flex",justifyContent:"center"}}>
              <button type="submit" className="btn btn-primary btn-block" style={{borderRadius:"20px"}}>Update Password</button>
              </div>
            </form>
            <div style={{padding:"0.5rem"}}>
                <PatientBackButton/>
            </div>
        </div>
      </div>
    );
}