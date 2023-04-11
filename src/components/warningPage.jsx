import React from "react";
import { useNavigate } from "react-router-dom";

export default function WarningPage() {
    const navigate = useNavigate();
    const directToDoctor=()=>{
        navigate("/doctor/login");
      }
      const directToAdmin=()=>{
        navigate("/admin/login");
      }
  return (
    <div className="container" style={{ margin: "1rem auto" }}>
      <h2>You are Not Logged In!!! Please Login.</h2>
      <button
        className="btn btn-dark"
        onClick={directToAdmin}
        style={{ borderRadius: "0", marginRight: "1rem" }}
      >
        Admin
      </button>
      <button
        className="btn btn-dark"
        onClick={directToDoctor}
        style={{ borderRadius: "0" }}
      >
        Doctor
      </button>
    </div>
  );
}
