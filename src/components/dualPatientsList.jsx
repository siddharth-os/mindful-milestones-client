import { padding } from "@mui/system";
import React from "react";
import ActivePatientListDash from "./activePatientListDash";
import WaitlistedPatientsDash from "./waitlistedPatientsDash";

export default function DualPatientsList(){
    const headStyle={
        textAlign:"center",
        backgroundColor:"#FDF4F5",
        marginLeft:"0",
        marginBottom:"1rem",
        padding:"0.5rem",
        boxShadow:"8px 8px 8px gray",
        borderTopLeftRadius:"20px",
        borderTopRightRadius:"20px",
    }
    const cardStyle={
        padding:"0",
        margin:"1rem",
    }
    return(
        <div className="row" style={{display:"flex",justifyContent:"center"}}>
            <div className="col" style={cardStyle}>
                <h4 className="blue-heading" style={headStyle}>Active Patients</h4>
                <ActivePatientListDash/>
            </div>
            <div className="col" style={cardStyle}>
                <h4 className="blue-heading" style={headStyle}>Waitlist</h4>
                <WaitlistedPatientsDash/>
            </div>
        </div>
    );
}