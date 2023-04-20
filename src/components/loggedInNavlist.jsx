import React from "react";

export default function LoggedInNavList(){
    return(
        <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">
              Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Feedback
          </a>
        </li>
      </ul>
    );
}