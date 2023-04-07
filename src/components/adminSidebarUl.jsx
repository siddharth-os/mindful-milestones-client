import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "../auth/auth";

export default function AdminSideBarUl() {
  const navigate=useNavigate();
  const handleLogout = ()=>{
    logout();
    alert("You are logged out Successfully.");
    navigate("/");
  }
  return (
    <ul>
      <li>
        <a href="/admin/home">Dashboard</a>
      </li>
      <li>
        <a href="#">Profile</a>
      </li>
      <li>
        <a href="/admin/add">Add Doctor</a>
      </li>
      <li>
        <p onClick={handleLogout} style={{cursor:"pointer"}}>Logout</p>
      </li>
    </ul>
  );
}
