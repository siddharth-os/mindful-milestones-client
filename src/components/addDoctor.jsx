import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "./adminSidebar";
import { initUrl } from "../auth/auth";
export default function AddDoctor() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  // const[password,setPassword]=useState("");
  const [lic, setLic] = useState("");
  const [qual, setQual] = useState("");
  const [specs, setSpecs] = useState("");
  const bDate = "1999/10/16";
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = username.substring(0, 4) + bDate.substring(0,4);
    const cred = { username,email, password, role:1 };
    const token  = 'Bearer '+localStorage.getItem('jwtToken');
    let config = {
      headers: {
        'Authorization':token,
      },
    }
    const result = await axios.post(initUrl+"/doc/register",cred,config);
    if(result){
      const details = { did: result.data,name:username, bDate, email, lic, qual, specs };
      const res = await axios.post(initUrl+"/doc/add",details,config);
      alert("Docotor added Successfully");
      navigate("/admin/home");
    }
    console.log(result.data);
    // //1 is Did
  };
  return (
    <div className="container row">
      <div className="col-12 col-md-3">
        <AdminSidebar/>
      </div>
      <div className="col-12 col-md-9">
        <div className="col-md-6 bg-light" style={{margin:"0 auto "}}>
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
