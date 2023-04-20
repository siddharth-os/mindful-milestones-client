import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getConfig, initUrl } from "../auth/auth";
import AudioLinkList from "./AudioLinkList";
import TaskList from "./taskList";
import VideoLinkList from "./VideoLinkList";

export default function TaskManagement() {
  const {id}=useParams();
  const [detail,setDetail]=useState({});
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        // const res = await axios.post(initUrl+"") 
        const config = getConfig();
        const res = await axios.post(initUrl+"/get/patient/"+id,{},config);
        // console.log(res.data);
        setDetail(res.data);
      } catch (error) {
        console.log(error);
      }
    }   

    fetchData();
  },[]);
  const sideBarStyle = {
    backgroundColor: "#FDF4F5",
    padding: "0.5rem",
    borderRadius: "20px",
    boxShadow: "8px 8px 8px gray",
  };
  const headingStyle = { textAlign: "center" };
  // style={sideBarStyle}
  return (
    <div className="container">
      <div style={{ backgroundColor: "#FDF4F5", padding: "0.5rem",textAlign:"center",borderRadius:"20px", boxShadow: "8px 8px 8px gray", }}>
          <h2 className="dark-blue-heading">Manage Task and Activities for {detail.name}</h2>
      </div>
      <div className="container row" style={{ margin: "1rem auto" }}>
        <div className="col-12 col-md-4 doc-sidebar-main">
          <div style={sideBarStyle}>
            <h2 className="blue-heading" style={headingStyle}>
              Activity Assign
            </h2>
            <hr />
            <TaskList pid={id}/>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div style={sideBarStyle}>
            <h2 className="blue-heading" style={headingStyle}>
              Video Links
            </h2>
            <hr />
            <VideoLinkList />
          </div>
        </div>
        <div className="col-12 col-md-4">
          <div style={sideBarStyle}>
            <h2 className="blue-heading" style={headingStyle}>
              Audio Links
            </h2>
            <hr />
            <AudioLinkList />
          </div>
        </div>
      </div>
    </div>
  );
}
