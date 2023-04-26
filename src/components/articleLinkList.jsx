import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import VideoCheckComponent from "./videoCheckComponent";
import { getConfig, initUrl, isDoctor, logout } from "../auth/auth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { elementAcceptingRef } from "@mui/utils";

export default function ArticleLinkList(props) {
  const pid=props.pid;
  const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 1, 1, 1, 1, 1];
  const [newTask, setNewTask] = useState("");
  const [newTaskLink,setNewTaskLink]=useState("");
  const [taskList,setTaskList] = useState([]);
  const navigate = useNavigate();
  const fetchData = async (e)=>{
    try {
      const config = getConfig();
      const res = await axios.post(initUrl+"/getall/tesks/typethree",{},config);
      setTaskList(res.data);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
      alert("Error Encountered");
      // navigate("/");
    }
  }
  useEffect(()=>{
    if(!isDoctor ()){
      logout();
      navigate("/doctor/login");
    }
    else
      fetchData();
  },[])
  const handleChangeActivity = (e) => {
    setNewTask(e.target.value);
  };
  const handleActivitySubmit = async(e) => {
    e.preventDefault();
    try {
      if(newTask.length>0){
        const config = getConfig();
        const res = await axios.post(initUrl+"/task/add",{tasktype:3,tasktext:newTask,tasklink:newTaskLink},config);
        window.location.reload();
      }
      else{
        alert("Please enter task");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="task-list" style={{ height: "250px", overflow: "auto" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Assigned</th>
              <th scope="col">Links / Url</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((e,index) => {
              return (
                <tr>
                  <td>
                    {/* <input className="checkbox-activity" type="checkbox" name="isAssigned" /> */}
                    <VideoCheckComponent tid={e.tid} pid={pid}/>
                  </td>
                  <td>{e.tasktext}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <hr />
      <form style={{ textAlign: "center" }} onSubmit={handleActivitySubmit}>
        <div>
        <TextField
          id="standard-basic"
          label="Add Title Of Article"
          variant="standard"
          value={newTask}
          onChange={handleChangeActivity}
          fullWidth
          required
        />
        <TextField
          id="standard-basic"
          label="Add New Link"
          variant="standard"
          value={newTaskLink}
          onChange={(e)=>setNewTaskLink(e.target.value)}
          fullWidth
          required
        />
        </div>
        <button
          className="btn btn-primary btn-sm"
          type="submit"
          style={{ margin: "1rem" }}
        >
          <i class="fa-solid fa-plus">Add New Article</i>
        </button>
      </form>
    </div>
  );
}