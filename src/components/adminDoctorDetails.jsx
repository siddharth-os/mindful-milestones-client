import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getConfig, initUrl } from "../auth/auth";
import AdminSidebar from "./adminSidebar";
import DoctorDetailsDiv from "./doctorDetailsDiv";

export default function AdminDoctorDetails(){
    const {did} = useParams();
    
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