import React from "react";
import LoggedInNavList from "./loggedInNavlist";
import NotLoggedInNavList from "./notLoggedInNavlist";

export default function Navbar() {
//     fontFamily: 'Dancing Script', cursive;
// font-family: 'Rubik Vinyl', cursive;
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{opacity:0.6,padding:"1rem",marginBottom:"1rem",}}>
      <a className="navbar-brand" href="/" style={{fontSize:"2rem",fontFamily: "'Dancing Script', cursive"}}>
        Mindful MileStones
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
      <LoggedInNavList/>
      </div>
    </nav>
  );
}
