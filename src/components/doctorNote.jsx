import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getConfig, initUrl } from "../auth/auth";

export default function Note(props) {
  const { pid } = props;
  const [note, setNote] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  );
  const headingStyle = {
    color: "#19376D",
    background: "#FDF4F5",
    padding: "0.5rem",
    textAlign: "center",
    marginLeft: "1rem",
    marginBottom: "1rem",
    // width: "100%",
    borderRadius: "20px",
    boxShadow: "8px 8px 8px gray",
  };
  const questionStyle = {
    background: "#FDF4F5",
    marginLeft: "1rem",
    padding: "0.5rem",
    borderRadius: "20px",
    marginBottom: "1rem",
  };
  return (
    <div className="container col-md-4" style={{}}>
      <form>
        <div class="form-group" style={{background: "#e8cccc",boxShadow:"5px 5px 5px gray"}}>
          <div>
            <h4 style={{padding:"0.5rem",color:"#800000",display:"inline-block"}}>Notes</h4>
          </div>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            value={note}
            onChange={(e)=>setNote(e.target.value)}
            style={{background: "#e8cccc",borderRadius: "0",height:"250px" ,color:"#800000"}}
          ></textarea>
          {/* <i class="fa-solid fa-floppy-disk blue-heading" style={{fontSize:"1.5rem",cursor:"pointer",position:"relative",bottom:"2rem",left:"1rem",borderRadius:"100%",background:"white",padding:"0.5rem"}}></i> */}
          <h2 style={{color:"#800000",textAlign:"right",paddingRight:"1rem"}}><i class="fa-solid fa-floppy-disk" style={{cursor:"pointer"}}></i></h2>
        </div>
      </form>
    </div>
  );
}
