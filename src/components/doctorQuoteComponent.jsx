import React, { useEffect } from "react";
import { useState } from "react";

export default function DoctorQuote(){
    const iconStyle={fontSize:"20px",cursor:"pointer",top:"10px",position:"absolute",top:"10px",right:"10px"};
    const divStyle={backgroundColor:"#FDF4F5",borderRadius:"20px",padding:"0.5rem 1rem",position:"relative",boxShadow:"8px 8px 8px gray",
    background: "rgb(238,174,202)",
    background: "linear-gradient(133deg, rgba(238,174,202,1) 0%, rgba(244,244,245,1) 100%)"
    };
    const[data,setData] = useState("");
    const Quote = ["Medicines cure diseases but only doctors can cure patients",
    "The best way to find yourself is to lose yourself in the service of others",
    "I am a doctor - it's a profession that may be considered a special mission, a devotion. It calls for involvement, respect and willingness to help all other people.",
    "Our profession is the only one which works unceasingly to annihilate itself."
    ]
    useEffect(()=>{
        var rand = Math.floor(Math.random()*4);
        setData(Quote[rand]);
    },[]);
    return(
        <div className="" style={divStyle}>
            <h3 className="blue-heading">Quote Of The Day</h3>
            <p>{data}</p>
        </div>
    );
}