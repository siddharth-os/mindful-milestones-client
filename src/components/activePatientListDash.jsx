import { Avatar } from "@mui/material";
import React from "react";

export default function ActivePatientListDash() {
  const l = [1, 2, 3, 4, 5, 6, 7, 78, 8, 9, 9, 1, 1, 2];
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
          <th scope="col">More Info</th>
        </tr>
      </thead>
      <tbody>
        {l.map(() => {
            return(
                <tr>
                <td>
                  <Avatar style={{height:"24px",width:"24px",margin:"1px auto"}}>P</Avatar>
                </td>
                <td>
                  LABrador
                </td>
                <td>
                  <a href="#">View</a>
                </td>
              </tr>
            )
        })}
      </tbody>
    </table>
    </div>
  );
}
