import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAdmin, isDoctor, isLoggedIn } from "../auth/auth";
export default function Home() {
  const scss = {
    backgroundColor: "blue",
  };
  const navigate = useNavigate();
  useEffect(() => {
    if(!isLoggedIn()){
      navigate("/");
    }
    if (isAdmin()) {
      navigate("/admin/home");
    }
    if (isDoctor()) {
      navigate("/doctor/home");
    }
  }, []);
  return (
    <div className="container" style={{ marginTop: "3rem" }}>
      <div className="row">
        <div className="col-md-6">
          <h1 style={{ marginBottom: "1rem" }}>Mindful Milestones</h1>
          <h4>
            Mindful Milestones is a comprehensive health care application
            designed for mental health patients, featuring a user-friendly web
            dashboard for admins and doctors, and a mobile app for patients. The
            self-help app offers support to improve mental well-being,empowering patients on their journey to recovery. The Doctor can
            assign task such as activities, video to watch and audio to listen.
            Admin, doctor, and patient roles ensure seamless communication and
            care coordination for optimal outcomes.
          </h4>
          <div style={{ marginTop: "2rem"}}>
            <Link to={`/admin/login`} style={{ textDecoration: "none" }}>
              <button
                className="btn btn-md btn-dark"
                style={{ marginRight: "1rem", borderRadius: "0" }}
              >
                Admin
              </button>
            </Link>
            <Link to={`/doctor/login`} style={{ textDecoration: "none" }}>
              <button
                className="btn btn-md btn-dark"
                style={{ borderRadius: "0" }}
              >
                Doctor
              </button>
            </Link>
          </div>
        </div>
        <div className="col-md-6" style={{ display: "flex"}}>
          <h1><i>place for image</i></h1>
          {/* <img
            className="doctor-img"
            src={require("./images/app.gif")}
            alt="logo"
            style={{borderRadius:"0",height:"500px",width:"400px",margin: "1rem auto",border:"solid"}}
          /> */}
        </div>
      </div>
    </div>
  );
}
