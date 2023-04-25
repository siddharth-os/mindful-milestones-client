import React from "react";

export default function LoggedInNavList(){
    return(
        <ul className="navbar-nav" style={{fontSize:"18px"}}>
        <li className="nav-item active">
          <a className="nav-link" href="/">
              Home
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="/testimonials">
            Testimonials
          </a>
        </li>
      </ul>
    );
}