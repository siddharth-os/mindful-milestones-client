import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { getConfig, initUrl, isAdmin, isDoctor, isLoggedIn, logout } from "../auth/auth";
export default function DoctorForget() {
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    if(isLoggedIn()){
      logout();
    }
  },[]);
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      //Call api here
      if(email===email2){
        const res = await axios.post(initUrl+"/forgotpass",{role:1,username:email});
        alert("Please Wait....");
        alert("Check your email for new password");
        navigate("/doctor/login");
      }
      else{
        alert("Username Mismatched");
      }
      
    } catch (error) {
      alert("Error Encounterd");
      navigate("/doctor/forget"); 
    }

  };
  return (
    <div className="container row" style={{ margin: "2rem auto" }}>
      <div
        className="col-md-4 bg-light"
        style={{ margin: "2rem auto", opacity: "0.8", padding: "1rem " }}
      >
        {/* send type=email from here */}
        <form style={{ opacity: "1" }} onSubmit={handleSubmit}>
          <div style={{ textAlign: "center" }}>
            <Avatar
              sx={{
                bgcolor: "orangered",
                height: "80px",
                width: "80px",
                margin: "0.5rem auto",
              }}
            >
              D
            </Avatar>
            <h2>Recover Password</h2>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Username</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              style={{ borderRadius: "0" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Re-Enter Username</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputEmail23"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              style={{ borderRadius: "0" }}
              value={email2}
              onChange={(e) => setEmail2(e.target.value)}
            />
          </div>
          <button
            type="submit"
            class="btn btn-dark"
            style={{ borderRadius: "0", width: "100%", margin: "1rem 0" }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
