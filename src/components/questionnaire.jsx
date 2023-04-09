import React from "react";

export default function Questionnaire() {
    const l= [1,2,3,4,5,6,7,8];
  return (
    <div className="container">
        <h2 style={{color:"#19376D",background:"#FDF4F5",padding:"0.5rem",textAlign:"center",marginLeft:"1rem",width:"100%",borderRadius:"20px",boxShadow:"8px 8px 8px gray"}}>Questionnaire Filled By Patient</h2>
      <div className="question">
        <h4>How are you feeling today?</h4>
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="25"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width:"25%"}}
          >25%</div>
        </div>
      </div>
    </div>
  );
}
