import React from "react";
import DoctorLogoutSideBar from "./doctorLogout";
import PatientBodyInfo from "./patientBodyInfo";
import PatientDashboardCard from "./patientDashboardCard";
import PatientSeverity from "./patientSeverity";
import PatientSideBarCard from "./patientSideBarCard";
import PatientTopCard from "./patientTopCard";
import Questionnaire from "./questionnaire";

export default function PatientPage(){
    const sideBarStyle={
        backgroundColor:"#FDF4F5",padding:"1rem",borderRadius:"20px",boxShadow:"8px 8px 8px gray",
    }
    return(
        <div className="container row" style={{margin:"1rem auto"}}>
      <div className="col-12 col-md-4 doc-sidebar-main" style={sideBarStyle}>
        <PatientSideBarCard/>
        <hr />
        <PatientSeverity/>
        <hr />
        <PatientBodyInfo/>
        <hr />
        <DoctorLogoutSideBar/>
      </div>
      <div className="col-12 col-md-8">
        <PatientTopCard/>
        <PatientDashboardCard/>
        <Questionnaire/>
      </div>
    </div>
    );
}