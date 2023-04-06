import React from "react";

export default function AdminSideBarUl() {
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
        <a href="#">Logout</a>
      </li>
    </ul>
  );
}
