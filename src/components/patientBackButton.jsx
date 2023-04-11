import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth/auth";

export default function PatientBackButton(){
    const navigate = useNavigate();
    const handleClick=()=>{
        navigate("/doctor/home");
    }
    return(
        <h4 style={{textAlign:"center",cursor:"pointer",color:"#800020"}} onClick={handleClick}><i class="fa-solid fa-arrow-left"></i>  Back</h4>
    );
}