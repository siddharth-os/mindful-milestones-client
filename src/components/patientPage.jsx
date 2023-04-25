import React, { useEffect } from "react";
import DoctorLogoutSideBar from "./doctorLogout";
import PatientBodyInfo from "./patientBodyInfo";
import PatientDashboardCard from "./patientDashboardCard";
import PatientSeverity from "./patientSeverity";
import PatientSideBarCard from "./patientSideBarCard";
import PatientTopCard from "./patientTopCard";
import Questionnaire from "./questionnaire";
import Button from '@mui/material/Button';
import PatientBackButton from "./patientBackButton";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getConfig, initUrl, isDoctor, logout } from "../auth/auth";
import axios from "axios";
import NoteAndQues from "./doctorNoteAndQuestion";
export default function PatientPage(){
    
    const {id}=useParams();
    const navigate = useNavigate();
    useEffect(()=>{
      if(!isDoctor()){
        logout();
        navigate("/doctor/login");
      }
      else{
        const callApi = async()=>{
          try {
            const config = getConfig();
            const res = await axios.post(initUrl+"/activate/patient/"+id,{},config);
          } catch (error) {
            console.log(error);
          }
        }
        callApi();
      }
    },[]);
    const sideBarStyle={
        backgroundColor:"#FDF4F5",padding:"1rem",borderRadius:"20px",boxShadow:"8px 8px 8px gray",
    }

    return(
        <div className="container row" style={{margin:"1rem auto"}}>
      <div className="col-12 col-md-4 doc-sidebar-main" style={sideBarStyle}>
        <PatientSideBarCard pid = {id}/>
        <hr />
        <PatientSeverity pid = {id}/>
        <hr />
        <PatientBodyInfo pid ={id}/>
        <hr />
        <PatientBackButton/>
      </div>
      <div className="col-12 col-md-8">
        <PatientTopCard pid ={id}/>
        <PatientDashboardCard pid={id}/>
        <NoteAndQues pid={id}/>
        {/* <Questionnaire pid = {id}/> */}
      </div>
    </div>
    );
}