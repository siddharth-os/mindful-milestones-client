import axios from "axios";
import React, { useEffect, useState } from "react";
import { getConfig, initUrl } from "../auth/auth";
import {Link} from "react-router-dom";
export default function DoctorsList() {
  const arr = [1, 2, 3, 4, 5, 6,7,8,9,10,11];
  const [docList,setDocList]=useState([]);
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async () =>{
    const config = getConfig();
    const result = await axios.get(initUrl+"/doc/getall",config);
    setDocList(result.data);
    console.log(docList);
    console.log(result.data);
  }
  console.log(docList);
  return (
    <table className="table doc-list-table" style={{}}>
      <thead style={{}}>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">More</th>
        </tr>
      </thead>
      <tbody>
        {docList.map((ele,index) => {
          return (
            <tr>
              <th scope="row">{index+1}</th>
              <td>{ele.name}</td>
              <td>{ele.email}</td>
              <td><Link to={`/admin/doctor/${docList[index].did}`}>Click Here</Link></td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
