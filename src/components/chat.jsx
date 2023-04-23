import { Avatar } from "@mui/material";
import React, { useState } from "react";
import TaskList from "./taskList";

export default function Chat() {
  const [newMessage, setNewMessage] = useState("");

  const sideBarStyle = {
    backgroundColor: "#FDF4F5",
    padding: "0.5rem",
    borderRadius: "20px",
    boxShadow: "8px 8px 8px gray",
  };
  const liStylePat = {
    backgroundColor: "#EBC6C9",
    listStyleType: "none",
    width: "60%",
    padding: "0.5rem",
    margin: "0.6rem",
    borderRadius:"20px",
  };
  const liStyleDoc = {
    backgroundColor: "#EBC6C9",
    listStyleType: "none",
    width: "60%",
    padding: "0.5rem",
    margin: "0.6rem",
    position: "relative",
    left: "7rem",
    borderRadius:"20px",
  };
  //   "#F8E3E5"
  const l = [
    { msg: "helloasmlfak alsnlfajks falsknfalskflas lkanslfknalsfk", id: 1 },
    { msg: "helloasmlfak alsnlfajks falsknfalskflas lkanslfknalsfk", id: 2 },
    { msg: "helloasmlfak alsnlfajks falsknfalskflas lkanslfknalsfk", id: 2 },
    { msg: "helloasmlfak alsnlfajks falsknfalskflas lkanslfknalsfk", id: 1 },
    { msg: "helloasmlfak alsnlfajks falsknfalskflas lkanslfknalsfk", id: 1 },
    { msg: "helloasmlfak alsnlfajks falsknfalskflas lkanslfknalsfk", id: 2 },
    { msg: "helloasmlfak alsnlfajks falsknfalskflas lkanslfknalsfk", id: 1 },
    { msg: "helloasmlfak alsnlfajks falsknfalskflas lkanslfknalsfk", id: 2 },
    { msg: "helloasmlfak alsnlfajks falsknfalskflas lkanslfknalsfk", id: 1 },
  ];
  return (
    <div
      className="col-12 col-md-4 doc-sidebar-main"
      style={{ margin: "1rem auto" }}
    >
      <div style={sideBarStyle}>
        <hr />
        <h2
          className="blue-heading"
          style={{ textAlign: "center", margin: "0" }}
        >
          Chat
        </h2>
        <hr />
        <div className="chat-box" style={{ height: "400px", overflow: "auto" }}>
          <ul>
            {l.map((ele, index) => {
              if (ele.id === 1) {
                return <li style={liStylePat}>{ele.msg}</li>;
              } else {
                return <li style={liStyleDoc}>{ele.msg}</li>;
              }
            })}
          </ul>
        </div>
        <form>
            <div className="form-group" style={{ marginBottom: "1rem" }}>
              <input
                type="text"
                className="form-control"
                id="password2"
                placeholder="Type Message"
                style={{ borderRadius: "20px" }}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                required
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                style={{ borderRadius: "20px" }}
              >
                <i class="fa-sharp fa-solid fa-paper-plane"></i> Send
              </button>
            </div>
          </form>
      </div>
    </div>
  );
}
