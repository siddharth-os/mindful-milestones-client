import React from "react";

export default function AdminDoctorStats(props) {
  const did=props.id;
  const cardStyle = {
    padding: "1rem",
    paddingLeft: "2rem",
    boxShadow: "6px 5px 8px gray",
    opacity: "1",
  };
  return (
    <div className="row" style={{marginTop:"1rem"}}>
      <div className="col-md-4">
        <div className="bg-light" style={cardStyle}>
          <h3>Consulted</h3>
          <h1 style={{ fontSize: "3rem" }}>15</h1>
          <small>Patients Consulted</small>
        </div>
      </div>
      <div className="col-md-4">
        <div className="bg-light" style={cardStyle}>
          <h3>Waitlisted</h3>
          <h1 style={{ fontSize: "3rem" }}>4</h1>
          <small>Patients Waitlisted</small>
        </div>
      </div>
      <div className="col-md-4">
        <div className="bg-light" style={cardStyle}>
          <h3>Healthy</h3>
          <h1 style={{ fontSize: "3rem" }}>7</h1>
          <small>Almost Recovered</small>
        </div>
      </div>
    </div>
  );
}
