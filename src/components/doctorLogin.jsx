import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import {Link, useNavigate} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { initUrl, isAdmin, isDoctor } from "../auth/auth";
export default function DoctorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(()=>{
    if(isAdmin()){
      navigate("/admin/home");
    }
    if(isDoctor()){
      navigate("/doctor/home");
    }
  },[]);
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post(initUrl+"/doc/authenticate",{username:email,password,role:1});
      localStorage.setItem('jwtToken',res.data.jwttoken);
      localStorage.setItem('role',1);
      localStorage.setItem('id',res.data.did);
      navigate("/");
    } catch (error) {
      alert("Invalid creds");
      navigate("/doctor/login"); 
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
            <h2>Doctor Login</h2>
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
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              style={{ borderRadius: "0" }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <Link to={`/doctor/home`} style={{textDecoration:"none"}}> */}
          <button
            type="submit"
            class="btn btn-dark"
            style={{ borderRadius: "0", width: "100%", margin: "1rem 0" }}
          >
            Submit
          </button>
        </form>
        <div style={{display:"flex",justifyContent:"center"}}>
        <a href="/doctor/forget">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}
