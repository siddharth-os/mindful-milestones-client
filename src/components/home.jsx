import React from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const scss = {
    backgroundColor: "blue",
  };
  return (
    <div className="container" style={{ marginTop: "3rem" }}>
      <div className="row">
        <div className="col-md-6">
          <h1 style={{ marginBottom: "1rem" }}>Mindful Milestones</h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </h4>
          <div style={{ marginTop: "2rem" }}>
          <Link to={`/admin/login`} style={{textDecoration:"none"}}>
          <button className="btn btn-md btn-dark" style={{ marginRight: "1rem" ,borderRadius:"0"}}>
              Admin
            </button>
          </Link>
          <Link to={`/doctor/login`} style={{textDecoration:"none"}}><button className="btn btn-md btn-dark" style={{borderRadius:"0"}}>Doctor</button></Link>
          </div>
        </div>
        <div className="col-md-6">
          <h3>here image</h3>
        </div>
      </div>
    </div>
  );
}

