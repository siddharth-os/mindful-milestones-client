import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getConfig, initUrl } from "../auth/auth";
import ClonePatientDashboardCard from "./clonePatientDashboardCard";
import { convertDate } from "./dateConverter";
import TaskList from "./taskList";

export default function Chat(props) {
  const {pid}=props;
  const [newMessage, setNewMessage] = useState("");
  const [chats,setNewChats] = useState([]);
  useEffect(()=>{
    const fetchChat = async ()=>{
        try {
            const config =  getConfig();
            const did = localStorage.getItem('id');
            const res = await axios.post(initUrl+"/get/chats",{did,pid},config);
            setNewChats(res.data);
            // console.log(res.data);
        } catch (error) {
          
            console.log(error);
        }
    }
    fetchChat();
  },[chats])
  const sideBarStyle = {
    backgroundColor: "#FDF4F5",
    padding: "0.5rem",
    borderRadius: "20px",
    boxShadow: "8px 8px 8px gray",
    position:"relative",
    left:"0.8rem"
  };
  const liStylePat = {
    backgroundColor: "#EBC6C9",
    listStyleType: "none",
    width: "60%",
    padding: "0.7rem",
    margin: "0.6rem",
    borderRadius:"20px",
    borderBottomLeftRadius:"0"
  };
  const liStyleDoc = {
    backgroundColor: "#EBC6C9",
    listStyleType: "none",
    width: "60%",
    padding: "0.7rem",
    margin: "0.6rem",
    position: "relative",
    left: "7rem",
    borderRadius:"20px",
    borderBottomRightRadius:"0",
    borderBottomLeftRadius:"20px"
  };
  //   "#F8E3E5"
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const config =  getConfig();
        const did = localStorage.getItem('id');
        const res = await axios.post(initUrl+"/send/msg",{did,pid,msg:newMessage,sentfrom:1},config);
        // console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(res.data[0].whensent));
        setNewMessage("");
    } catch (error) {
        console.log(error);
    }
  };
  return (
    
    <div
      className="col-12 col-md-4 doc-sidebar-main"
      style={{ margin: "0.1rem auto", }}
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
        <div className="chat-box scrollable-container" style={{ height: "400px", overflow: "auto" }}>
          <ul>
            {chats.map((ele, index) => {
              if (ele.sentfrom === 1) {
                return <li style={liStyleDoc}>{ele.msg} <small style={{display:"block",color:"gray",textAlign:"right",marginTop:"1rem"}}>{convertDate(ele.sentwhen)} <i class="fa-solid fa-check-double"></i></small></li>;
              } else {
                return <li style={liStylePat}>{ele.msg} <small style={{display:"block",color:"gray",textAlign:"left",marginTop:"1rem"}}>{convertDate(ele.sentwhen)} <i class="fa-solid fa-check-double"></i></small></li>;
              }
            })}
          </ul>
        </div>
        <form onSubmit={handleSubmit}>
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
                className="btn btn-dark btn-block"
                style={{ borderRadius: "20px",width:"100%"}}
              >
                <i class="fa-sharp fa-solid fa-paper-plane"></i> Send
              </button>
            </div>
          </form>
      </div>
    </div>
  );
}
