import axios from "axios";
import React, { useEffect, useState } from "react";
import { getConfig, initUrl } from "../auth/auth";

export default function DoctorSideBarCard() {
  return (
    <div className="Doc-sidebar-card" style={{ textAlign: "center" }}>
      <img
        className="doctor-img"
        src={require("./images/profile2-doctor.jpg")}
        alt="logo"
        style={{ marginBottom: "1rem" }}
      />
      <h4 className="dark-blue-heading">Dr. Drishti Pharma</h4>
      {/* <h6>Pagal Aurat</h6> */}
      <h6>Psychiatrists, MBBS</h6>
      <small>English,Hindi</small>
    </div>
  );
}
