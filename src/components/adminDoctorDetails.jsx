import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getConfig, initUrl, isAdmin, logout } from "../auth/auth";
import AdminSidebar from "./adminSidebar";
import DoctorDetailsDiv from "./doctorDetailsDiv";

export default function AdminDoctorDetails(){
    const {did} = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
      if(!isAdmin()){
        logout();
        navigate("/admin/login");
      }
    },[])
    return (
        <div className="container row" style={{ margin: "0.5rem auto" }}>
          <div className="col-12 col-md-3" style={{}}>
            <AdminSidebar/>
          </div>
          <div className="col-12 col-md-9 dashboard" style={{}}>
            <DoctorDetailsDiv id={did}/>
          </div>
        </div>
      );
}