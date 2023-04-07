import React from "react";

export default function DoctorDashboardCard() {
  const cardStyle = {
    backgroundColor: "#FDF4F5",
    margin: "1rem",
    padding: "0.5rem",
    borderRadius: "20px",
  };
  return (
    <div className="row" style={{ display: "flex", justifyContent: "center" }}>
      <div className="col" style={cardStyle}>
        <div className="row">
          <div className="col">
            <h1 style={{ textAlign: "center", fontSize: "4rem" }}>
              <i className="fa-solid fa-hospital-user"></i>
            </h1>
          </div>
          <div className="col" style={{ marginTop: "0.5rem" }}>
            <h6>Active</h6>
            <h2>23</h2>
          </div>
        </div>
      </div>
      <div className="col" style={cardStyle}>
        <div className="row" style={{}}>
          <div className="col">
            <h1 style={{ textAlign: "center", fontSize: "4rem" }}>
              <i class="fa-solid fa-hourglass-start"></i>
            </h1>
          </div>
          <div className="col" style={{ marginTop: "0.5rem" }}>
            <h6>Waitlisted</h6>
            <h2>7</h2>
          </div>
        </div>
      </div>
      <div className="col" style={cardStyle}>
        <div className="row" style={{}}>
          <div className="col">
            <h1 style={{ textAlign: "center", fontSize: "4rem" }}>
            <i class="fa-solid fa-heart"></i>
            </h1>
          </div>
          <div className="col" style={{ marginTop: "0.5rem" }}>
            <h6>Healthy</h6>
            <h2>5</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
