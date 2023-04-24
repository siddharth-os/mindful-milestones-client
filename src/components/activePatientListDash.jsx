import { Avatar, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getConfig, initUrl } from "../auth/auth";
import {Link} from "react-router-dom";
export default function ActivePatientListDash() {
  const l = [1, 2, 3, 4, 5, 6, 7, 78, 8, 9, 9, 1, 1, 2];
  const [activeList,setActiveList]=useState([]);
  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const config = getConfig();
        const did = localStorage.getItem('id');
        const res = await axios.post(initUrl+"/consult/activ/"+did,{},config);
        console.log(res.data);
        setActiveList(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  },[]);
  const divStyle={
    height:"300px",width:"100%",overflow:"auto",paddingBottom:"1rem",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",boxShadow:"8px 8px 8px gray",backgroundColor:"#FDF4F5"
  }
  return (
    <div style={divStyle}>
    <table className="table" style={{margin:"1rem auto",textAlign:"center"}}>
      <thead>
        <tr className="blue-heading">
          <th scope="col">Avatar</th>
          <th scope="col">Name</th>
          <th scope="col">Status</th>
          <th scope="col">More Info</th>
        </tr>
      </thead>
      <tbody>
        {activeList.map((ele,index) => {
            return(
                <tr>
                <td>
                  <Avatar className="" style={{height:"24px",width:"24px",margin:"1px auto",background:"#00d2ff"}}>{ele.uname[0].toUpperCase()}</Avatar>
                </td>
                <td>
                  {ele.uname.toUpperCase()}
                </td>
                <td>{Math.round( ele.completed*100/ele.assigned)}%</td>
                {/* <td><CircularProgress variant="determinate" value={Math.round( ele.completed*100/ele.assigned)} style={{}}>{10}</CircularProgress></td> */}
                <td>
                  <Link to={`/doctor/patient/${activeList[index].pid}`}>View</Link>
                </td>
              </tr>
            )
        })}
      </tbody>
    </table>
    </div>
  );
}
