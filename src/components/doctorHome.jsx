import React from "react";
import DoctorDashboardCard from "./doctorDashboardCard";
import DoctorLogoutSideBar from "./doctorLogout";
import DoctorMilestoneCard from "./doctorMilestoneCard";
import DoctorQuote from "./doctorQuoteComponent";
import DoctorSideBarCard from "./doctorSideBarCard";
import DoctorStatsCard from "./doctorStatsCard";
export default function DoctorHome() {
  return (
    <div className="container row" style={{margin:"1rem auto"}}>
      <div className="col-12 col-md-4 doc-sidebar-main" style={{backgroundColor:"#FDF4F5",padding:"1rem",borderRadius:"20px"}}>
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
      </div>
    </div>
  );
}
