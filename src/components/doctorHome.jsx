import React from "react";
import { useNavigate } from "react-router-dom";
import { isDoctor, logout } from "../auth/auth";
import DoctorDashboardCard from "./doctorDashboardCard";
import DoctorLogoutSideBar from "./doctorLogout";
import DoctorMilestoneCard from "./doctorMilestoneCard";
import DoctorQuote from "./doctorQuoteComponent";
import DoctorSideBarCard from "./doctorSideBarCard";
import DoctorStatsCard from "./doctorStatsCard";
import DualPatientsList from "./dualPatientsList";
export default function DoctorHome() {
  const navigate = useNavigate();
  const sideBarStyle={
    backgroundColor:"#FDF4F5",padding:"1rem",borderRadius:"20px",boxShadow:"8px 8px 8px gray",

  }
  if(!isDoctor()){
    logout();
    navigate("/doctor/login");
  }
  return (
    <div className="container row" style={{margin:"1rem auto"}}>
      <div className="col-12 col-md-4 doc-sidebar-main" style={sideBarStyle}>
        {/* <p> <i class="fa-solid fa-house"></i> lkfalkm</p> */}
        <DoctorSideBarCard/>
        <hr />
        <DoctorMilestoneCard/>
        <hr />
        <DoctorStatsCard />
        <hr />
        <DoctorLogoutSideBar/>
      </div>
      <div className="col-12 col-md-8">
        <DoctorQuote/>
        <DoctorDashboardCard/>
        <DualPatientsList/>
      </div>
    </div>
  );
}
