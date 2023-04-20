import React from "react";
// import Link from '@mui/material/Link';
import { Link } from "react-router-dom";
export default function PatientTopCard(props) {
  const {pid}=props;
  const iconStyle = {
    fontSize: "20px",
    cursor: "pointer",
    top: "10px",
    position: "absolute",
    top: "10px",
    right: "10px",
  };
  const divStyle = {
    backgroundColor: "#FDF4F5",
    borderRadius: "20px",
    padding: "0.5rem 1rem",
    position: "relative",
    boxShadow: "8px 8px 8px gray",
    background: "rgb(238,174,202)",
    background:
      "linear-gradient(133deg, rgba(238,174,202,1) 0%, rgba(244,244,245,1) 100%)",
    marginLeft: "1rem",
  };
  const handleClick = () => {
    alert("This is to remove this ");
  };
  return (
    <div className="row" style={divStyle}>
      <div className="col-md-8">
        <h3 className="blue-heading">Kindly select the option</h3>
        <p>
          Click on Chat to communicate and Tasks to manage task for
          patient.
        </p>
        <Link to={`/doctor/patient/${pid}/chat`}><button className="btn" style={{marginRight:"1rem",backgroundColor:"#576CBC",color:"white"}}>Chat <i class="fa-solid fa-message"></i></button></Link>
        <Link to={`/doctor/patient/${pid}/task`}><button className="btn" style={{backgroundColor:"#576CBC",color:"white"}}>Tasks <i class="fa-solid fa-list-check"></i></button></Link>
      </div>
      <div className="col-md-4">
        <img
          className="doctor-img"
          src={require("./images/h2.gif")}
          alt="logo"
          style={{margin:"1rem auto",height:"200px",width:"200px",position:"absolute",bottom:"0" }}
        />
      </div>
    </div>
  );
}
