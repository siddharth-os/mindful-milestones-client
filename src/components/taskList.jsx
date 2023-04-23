import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import TaskCheckComponent from "./taskCheckComponent";
import { getConfig, initUrl } from "../auth/auth";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function TaskList(props) {
  const {pid}=props;
  const l = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 2, 1, 1, 1, 1, 1];
  const [newTask, setNewTask] = useState("");
  const [taskList,setTaskList] = useState([]);
  const navigate = useNavigate();
  const fetchData = async (e)=>{
    try {
      const config = getConfig();
      const res = await axios.post(initUrl+"/getall/tesks/typeone",{},config);
      setTaskList(res.data);
    } catch (error) {
      console.log(error);
      alert("Error Encountered");
      // navigate("/");
    }
  }
  useEffect(()=>{
    fetchData();
  },[])
  const handleChangeActivity = (e) => {
    setNewTask(e.target.value);
  };
  const handleActivitySubmit = async (e) => {
    e.preventDefault();
    try {
      if(newTask.length>0){
        const config = getConfig();
        const res = await axios.post(initUrl+"/task/add",{tasktype:1,tasktext:newTask},config);
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
      <div className="task-list" style={{ height: "300px", overflow: "auto" }}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Assigned</th>
              <th scope="col">Activity</th>
            </tr>
          </thead>
          <tbody>
            {taskList.map((ele,index) => {
              return (
                <tr>
                  <td>
                    
                    <TaskCheckComponent tid={ele.tid} pid={pid}/>
                  </td>
                  <td>{ele.tasktext}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <hr />
      <form style={{ textAlign: "center" }} onSubmit={handleActivitySubmit}>
        <TextField
          id="standard-basic"
          label="Add New Task"
          variant="standard"
          value={newTask}
          onChange={handleChangeActivity}
          fullWidth
          required
        />
        <button
          className="btn btn-primary btn-sm"
          type="submit"
          style={{ margin: "1rem" }}
        >
          <i class="fa-solid fa-plus">Add New Task</i>
        </button>
      </form>
    </div>
  );
}
