import React from "react";
import AudioLinkList from "./AudioLinkList";
import TaskList from "./taskList";
import VideoLinkList from "./VideoLinkList";

export default function TaskManagement() {
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
          <h2 className="dark-blue-heading">Manage Task and Activities for Pankaj Udaas</h2>
      </div>
      <div className="container row" style={{ margin: "1rem auto" }}>
        <div className="col-12 col-md-4 doc-sidebar-main">
          <div style={sideBarStyle}>
            <h2 className="blue-heading" style={headingStyle}>
              Activity Assign
            </h2>
            <hr />
            <TaskList />
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
