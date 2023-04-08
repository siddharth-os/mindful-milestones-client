import React from "react";

export default function DoctorQuote(){
    const iconStyle={fontSize:"20px",cursor:"pointer",top:"10px",position:"absolute",top:"10px",right:"10px"};
    const divStyle={backgroundColor:"#FDF4F5",borderRadius:"20px",padding:"0.5rem 1rem",position:"relative",boxShadow:"8px 8px 8px gray",
    background: "rgb(238,174,202)",
    background: "linear-gradient(133deg, rgba(238,174,202,1) 0%, rgba(244,244,245,1) 100%)"
    };
    const handleClick = ()=>{
        alert("This is to remove this ")
    }
    return(
        <div className="" style={divStyle}>
            <h3 className="blue-heading">Quote Of The Day</h3>
            <p>Medicines cure diseases but only doctors can cure patients</p>
            <i className="fa-solid fa-circle-xmark" style={iconStyle} onClick={handleClick}></i>
        </div>
    );
}