import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth/auth";

export default function DoctorLogoutSideBar(){
    const navigate = useNavigate();
    const handleClick=()=>{
        logout();
        alert("Logged Out Successfully.");
        navigate("/");
    }
    return(
        <h4 style={{textAlign:"center",cursor:"pointer"}} onClick={handleClick}><i class="fa-solid fa-right-from-bracket"></i> Logout</h4>
    );
}