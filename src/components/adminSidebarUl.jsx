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
      <hr />
      <li>
        <a href="/admin/home"> <i class="fa-solid fa-desktop"></i> Dashboard</a>
      </li>
      <hr />
      {/* <li>
        <a href="#"> <i class="fa-solid fa-user"></i> Profile</a>
      </li>
      <hr /> */}
      <li>
        <a href="/admin/add"> <i class="fa-solid fa-plus"></i> Add Doctor</a>
      </li>
      <hr />
      <li>
        <p onClick={handleLogout} style={{cursor:"pointer"}}> <i class="fa-solid fa-right-from-bracket"></i> Logout</p>
      </li>
      <hr />
    </ul>
  );
}
