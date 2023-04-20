import React from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import AdminSidebar from "./adminSidebar";
import { getConfig, initUrl } from "../auth/auth";
import { useEffect } from "react";

export default function AdminDoctorDetailsEdit(props){
    const {did} = useParams();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [lic, setLic] = useState();
    const [qual, setQual] = useState();
    const [specs, setSpecs] = useState();
    const bDate = "1999/10/16";
    useEffect(() => {
        fetchData();
      }, []);
      const fetchData = async () => {
        const config = getConfig();
        const result = await axios.post(initUrl + "/doc/get/" + did, {},config);
        console.log(result.data.email);
        setUsername(result.data.name);
        setEmail(result.data.email);
        setLic(result.data.lic);
        setQual(result.data.qual);
        setSpecs(result.data.specs);
      };
      const navigate = useNavigate();
      const handleSubmit = async (e)=>{
        e.preventDefault();
        const config = getConfig();
        const details = { did,name:username, bDate, email, lic, qual, specs };
        const result = await axios.post(initUrl+"/doc/change/"+did,details,config);
        console.log(result);
        navigate("/admin/doctor/"+did);
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
                  <h2>Edit Details</h2>
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
                    value={username}
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
                    value={email}
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
                    value={lic}
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
                    value={qual}
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
                    value={specs}
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