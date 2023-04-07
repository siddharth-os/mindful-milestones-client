import React from "react";
import Avatar from "@mui/material/Avatar";
import AdminSideBarUl from "./adminSidebarUl";
export default function AdminSidebar() {
  return (
    <div className="sidebar bg-light" style={{ textAlign: "center",boxShadow:"5px 5px 5px gray" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <Avatar sx={{ bgcolor: "grey", height: "70px", width: "70px" }}>
          A
        </Avatar>
      </div>
      <h2>Admin</h2>
      <AdminSideBarUl />
    </div>
  );
}
