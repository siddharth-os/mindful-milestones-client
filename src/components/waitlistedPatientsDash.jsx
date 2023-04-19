import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { getConfig, initUrl } from "../auth/auth";

export default function WaitlistedPatientsDash(){
    const l = [1, 2, 3, 4, 5, 6, 7, 78, 8, 9, 9, 1, 1, 2];
    const [waitlistedList,setwaitlistedList]=useState([]);
    useEffect(()=>{
      const fetchData = async()=>{
        try {
          const config = getConfig();
          const did = localStorage.getItem('id');
          const res = await axios.post(initUrl+"/consult/blocked/"+did,{},config);
          // console.log(res.data);
          setwaitlistedList(res.data);
        } catch (error) {
          console.log(error);
        }
      }
      fetchData();
    },[]);
  return (
    <div style={{height:"300px",width:"100%",overflow:"auto",paddingBottom:"1rem",borderBottomLeftRadius:"20px",borderBottomRightRadius:"20px",boxShadow:"8px 8px 8px gray",backgroundColor:"#FDF4F5"}}>
    <table className="table" style={{margin:"1rem auto",textAlign:"center"}}>
      <thead>
        <tr className="blue-heading">
          <th scope="col">Avatar</th>
          <th scope="col">Name</th>
          <th scope="col">More Info</th>
        </tr>
      </thead>
      <tbody>
        {waitlistedList.map((ele,index) => {
            return(
                <tr>
                <td>
                  <Avatar style={{height:"24px",width:"24px",margin:"1px auto"}}>{ele.username[0].toUpperCase()}</Avatar>
                </td>
                <td>
                  {ele.username.toUpperCase()}
                </td>
                <td>
                  <a href="#">Consult</a>
                </td>
              </tr>
            )
        })}
      </tbody>
    </table>
    </div>
    );
}