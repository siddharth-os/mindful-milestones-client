import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getConfig, initUrl } from "../auth/auth";

export default function Questionnaire(props) {
  const l = [1, 2, 3, 4, 5, 6, 7, 8];
  const [ques,setques]=useState([]);
  const {pid}=props;
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const config = getConfig();
        const res = await axios.post(initUrl+"/get/latestquestion/"+pid,{},config);
        setques(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  },[])
  const headingStyle = {
    color: "#19376D",
    background: "#FDF4F5",
    padding: "0.5rem",
    textAlign: "center",
    marginLeft: "1rem",
    marginBottom:"1rem",
    // width: "100%",
    borderRadius: "20px",
    boxShadow: "8px 8px 8px gray",
  };
  const questionStyle = {
    background: "#FDF4F5",
    marginLeft: "1rem",
    padding: "0.5rem",
    borderRadius: "20px",
    marginBottom:"1rem"
  };
  return (
    <div className="container" style={{marginLeft:"0.5rem"}}>
      <h2 style={headingStyle}>Questionnaire Filled By Patient</h2>
      <div
        className="main-question-div"
        style={{ height: "250px", overflow: "auto",margin:"1rem auto" }}
      >
        {ques.map((ele,index) => {
          return (
            <div className="question" style={questionStyle}>
              <h5>How are you feeling today?</h5>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: (ele*10).toString()+"%" }}
                >
                  {ele*10}%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
