import React from "react";

export default function PatientSideBarCard() {
  return (
    <div className="Doc-sidebar-card" style={{ textAlign: "center" }}>
      <img
        className="doctor-img"
        src={require("./images/patientprofile2.jpg")}
        alt="logo"
        style={{ marginBottom: "1rem" }}
      />
      <h4 className="dark-blue-heading">Pankaj Udaas</h4>
      {/* <h6>Pagal Aurat</h6> */}
      <h6>Depression, Anxiety</h6>
      <small>English,Hindi</small>
    </div>
  );
}
