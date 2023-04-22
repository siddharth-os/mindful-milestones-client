import axios from "axios";
import React, { useEffect, useState } from "react";
import { getConfig, initUrl } from "../auth/auth";

export default function VideoCheckComponent(props){
  const {tid,pid}=props;
  const did = localStorage.getItem('id');
  const [isChecked,setIsChecked]=useState(false);
  useEffect(()=>{
      const fetchData = async()=>{
          try {
              const config=getConfig();
              const res2 = await axios.post(initUrl+"/get/assigned/taskids/"+pid,{},config);
              setIsChecked(res2.data.includes(tid));
          } catch (error) {
              console.log(error);
          }
      }
      fetchData();
  },[])
  const handleCheckboxChange = async (e)=>{
    setIsChecked(e.target.checked);
    if (e.target.checked===true) {
      try {
          const config = getConfig();
          const res = await axios.post(initUrl+"/task/assign",{did,pid,tid,complete:false,assigneddate:"2022-05-08T23:13:45.733+00:00"},config);
      } catch (error) {
          console.log(error);
      }
    } else {
      try {
          const config = getConfig();
          const res = await axios.post(initUrl+"/remove/task",{did,pid,tid},config);
          console.log(res.data);
      } catch (error) {
          console.log(error);
      }
    }
  }
    return(
      <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        id="flexSwitchCheckChecked"
      />
    </div>
    );
}