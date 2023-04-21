import React from "react";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { checkForAdminTokenExist, initUrl, isAdmin, isDoctor, isTokenExist } from "../auth/auth";
import AdminHome from "./adminHome";
export default function AdminLogin() {
  const [email, setEmail] = useState("s");
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
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const res = await axios.post(initUrl+"/admin/authenticate",{username:email,password,role:0});
      localStorage.setItem('jwtToken',res.data);
      localStorage.setItem('role','0');
      navigate("/admin/home");
    } catch (error) {
      console.log(error);
      alert("Error Encountered"); 
      navigate("/admin/login");
    }
  }
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
              A
            </Avatar>
            <h2>Admin Login</h2>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              style={{ borderRadius: "0" }}
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
              onChange={(e) => setPassword(e.target.value)}
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
