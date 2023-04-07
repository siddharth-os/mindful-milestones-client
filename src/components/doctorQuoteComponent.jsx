import React from "react";

export default function DoctorQuote(){
    const iconStyle={fontSize:"20px",cursor:"pointer",top:"10px",position:"absolute",top:"10px",right:"10px"};
    const handleClick = ()=>{
        alert("This is to remove this ")
    }
    return(
        <div className="" style={{backgroundColor:"#FDF4F5",borderRadius:"20px",padding:"0.5rem 1rem",position:"relative"}}>
            <h3>Quote Of The Day</h3>
            <p>Medicines cure diseases but only doctors can cure patients</p>
            <i className="fa-solid fa-circle-xmark" style={iconStyle} onClick={handleClick}></i>
        </div>
    );
}