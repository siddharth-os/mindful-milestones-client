import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "./adminSidebar";
import { getConfig, initUrl, isAdmin, logout } from "../auth/auth";
import { validateLICString, validateMobileNumber } from "../auth/stringValid";
export default function AddDoctor() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const[password,setPassword]=useState("");
  const [lic, setLic] = useState("");
  const [qual, setQual] = useState("");
  const [specs, setSpecs] = useState("");
  const bDate = "1999/10/16";
  const navigate=useNavigate();
  useEffect(()=>{
    if(!isAdmin()){
      logout();
      navigate("/admin/login");
    }
  },[]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const password = username.substring(0, 4) + bDate.substring(0,4);
    const password = "123";
    const cred = { username,email, role:1 };
    let config = getConfig();
    try {
      const result = await axios.post(initUrl+"/doc/register",cred,config);
      if(result){
        const details = { did: result.data,name:username, bDate, email, lic, qual, specs };
            const res = await axios.post(initUrl+"/doc/add",details,config);
            alert("Doctor added Successfully");
            navigate("/admin/home");
      }
    } catch (error) {
      alert("Username or Email already exist");
      console.log(error);
    }
  };
  return (
    <div className="container row" style={{margin:"0.5rem auto"}}>
      <div className="col-12 col-md-3" style={{height:"600px"}}>
        <AdminSidebar/>
      </div>
      <div className="col-12 col-md-9">
        <div className="col-md-6 bg-light" style={{margin:"0 auto",boxShadow:"5px 5px 5px gray"}}>
          <form style={{ opacity: "1" ,padding:"1rem"}} onSubmit={(e) => handleSubmit(e)}>
            <div style={{ textAlign: "center" }}>
              <h2>Add New Doctor</h2>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">UserName</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter Username"
                style={{ borderRadius: "0" }}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail2">Email</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Enter Username"
                style={{ borderRadius: "0" }}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail3">License</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail3"
                aria-describedby="emailHelp"
                placeholder="Enter License Number"
                style={{ borderRadius: "0" }}
                onChange={(e) => setLic(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail4">Qualification</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail4"
                aria-describedby="emailHelp"
                placeholder="Qualification"
                style={{ borderRadius: "0" }}
                onChange={(e) => setQual(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail5">Specialization</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail5"
                aria-describedby="emailHelp"
                placeholder="Qualification"
                style={{ borderRadius: "0" }}
                onChange={(e) => setSpecs(e.target.value)}
                required
              />
            </div>
            {/* <Link to={`/admin/home`} style={{ textDecoration: "none" }}> */}
            <button
              type="submit"
              className="btn btn-dark"
              style={{ borderRadius: "0", width: "100%", margin: "1rem 0" }}
            >
              Submit
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
}
// username,email,role=1(silent),password(silent)
//
