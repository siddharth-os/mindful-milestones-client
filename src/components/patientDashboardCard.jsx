import React from "react";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { getConfig, initUrl } from "../auth/auth";
import axios from "axios";
export default function PatientDashboardCard(props) {
  const {pid}=props;
  const [taskStatus,setTaskStatus]=useState([]);
  // const [tone,setTone]=useState(0);
  // const [ttwo,setTwo]=useState(0);
  // const [tthree,setThree]=useState(0);
  const types = ["Task","Video","Blog"];
  // const colorRound= ["#28328c","red","#0d6efd"];
  const colorRound= ["red","yellow","green"];
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const config = getConfig();
        const res = await axios.post(initUrl+"/patget/status/"+pid,{},config);
        setTaskStatus(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[])
  const conditionalColor=(compl,assig)=>{
    if(assig===0 || compl===0){
      return "white";
    }
    else{
      let score = Math.round(compl*100/assig);
      if(score<30){
        return "red";
      }
      else if(score<60){
        return "orange";
      }
      else{
        return "green";
      }
    }
  }
  const cardStyle = {
    backgroundColor: "#FDF4F5",
    margin: "1rem",
    padding: "0.5rem",
    borderRadius: "20px",
    boxShadow: "8px 8px 8px gray",
  };
  return (
    <div
      className="row"
      style={{ display: "flex", justifyContent: "center", marginLeft: "1rem" }}
    >
      {taskStatus.map((ele,index)=>{
        return(
          <div className="col" style={cardStyle}>
          <div className="row">
          <div className="col" style={{ marginTop: "0.5rem" }}>
              <h1 className="blue-heading" style={{textAlign:"center"}}>{types[index]}</h1>
              <small>{ele.compl}/{ele.assig} completed</small>
            </div>
            <div className="col" >
              {ele.assig===0?<i class="fa-sharp fa-regular fa-circle-xmark" style={{fontSize:"6rem",color:"hsl(0, 100%, 87%)"}}></i>:
                  <CircularProgress variant="determinate" value={ele.compl===0?100:Math.round((ele.compl/ele.assig)*100)} style={{height:"100px",width:"100px",color:conditionalColor(ele.compl,ele.assig)}}>{10}</CircularProgress>}
            </div>
          </div>
        </div>
        );
      })}
    </div>
  );
}
