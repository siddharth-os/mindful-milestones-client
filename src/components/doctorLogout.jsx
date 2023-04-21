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
        <div style={{textAlign:"center"}}>
            <h4 style={{textAlign:"center",cursor:"pointer",color:"#800020"}} onClick={handleClick}><i class="fa-solid fa-right-from-bracket"></i> Logout</h4>
            <a href="/doctor/reset">Reset Password</a>
        </div>
    );
}