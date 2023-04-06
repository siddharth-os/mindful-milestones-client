import React from "react";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import {Link} from "react-router-dom";
import { useState } from "react";
export default function DoctorLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
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
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
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
          <Link to={`/doctor/home`} style={{textDecoration:"none"}}>
          <button
            type="submit"
            class="btn btn-dark"
            style={{ borderRadius: "0", width: "100%", margin: "1rem 0" }}
          >
            Submit
          </button>
          </Link>
          <div className="form-group" style={{ textAlign: "center" }}>
            <a href="/">Password Reset</a>
          </div>
        </form>
      </div>
    </div>
  );
}
