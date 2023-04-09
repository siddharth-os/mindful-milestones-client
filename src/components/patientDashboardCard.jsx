import React from "react";
import { CircularProgress } from "@mui/material";
export default function PatientDashboardCard() {
  const cardStyle = {
    backgroundColor: "#FDF4F5",
    margin: "1rem",
    padding: "0.5rem",
    borderRadius: "20px",
    boxShadow: "8px 8px 8px gray",
  };
  return (
    <div
      className="row"
      style={{ display: "flex", justifyContent: "center", marginLeft: "1rem" }}
    >
      <div className="col" style={cardStyle}>
        <div className="row">
        <div className="col" style={{ marginTop: "0.5rem" }}>
            <h1 className="blue-heading" style={{textAlign:"center"}}>Task</h1>
            <small>8/10 completed</small>
          </div>
          <div className="col" >
                <CircularProgress variant="determinate" value={80} style={{height:"100px",width:"100px"}}>{10}</CircularProgress>
          </div>
        </div>
      </div>
      <div className="col" style={cardStyle}>
        <div className="row">
        <div className="col" style={{ marginTop: "0.5rem" }}>
            <h1 className="blue-heading" style={{textAlign:"center"}}>Audio</h1>
            <small>8/10 completed</small>
          </div>
          <div className="col" >
                <CircularProgress variant="determinate" value={80} style={{height:"100px",width:"100px",color:"red"}}>{10}</CircularProgress>
          </div>
        </div>
      </div>
      <div className="col" style={cardStyle}>
        <div className="row">
        <div className="col" style={{ marginTop: "0.5rem" }}>
            <h1 className="blue-heading" style={{textAlign:"center"}}>Video</h1>
            <small>8/10 completed</small>
          </div>
          <div className="col" >
                <CircularProgress variant="determinate" value={80} style={{height:"100px",width:"100px"}}>{10}</CircularProgress>
          </div>
        </div>
      </div>
    </div>
  );
}
