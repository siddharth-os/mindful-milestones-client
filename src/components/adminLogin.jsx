import React from "react";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { initUrl, isTokenExist } from "../auth/auth";
import AdminHome from "./adminHome";
export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToken, setIsToken] = useState();
  useEffect(() => {
    setIsToken(isTokenExist());
  }, []);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = initUrl + "/admin/authenticate";
    const result = await axios
      .post(
        url,
        // const result = await axios.post("http://localhost:8080/admin/authenticate"
        {
          username: email,
          password,
          role: 0,
        }
      )
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
    if (result.status !== 200) {
      setIsLoggedIn(false);
      alert("Problem Faced");
    } else {
      setIsLoggedIn(true);
    }
    if (result.status === 200) {
      const token = result.data;
      localStorage.setItem("jwtToken", token);
      navigate("/admin/home");
    }
    console.log(isToken);
  };
  // if (isToken !==null) {
  //   navigate("/admin/home");
  // }
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
