import React from "react";
import { useNavigate } from "react-router-dom";
export default function NotLoggedIn(){
    alert("You are not logged in.");
    const navigate= useNavigate();
    navigate("/");
}