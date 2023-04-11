import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getConfig, initUrl } from "../auth/auth";

export default function AdminDoctorDetails(){
    const {did} = useParams();
    const [docDetail,setDocDetail]=useState("");
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData = async () =>{
        const config=getConfig();
        const result = await axios.get(initUrl+"/doc/get/"+did,config);
        console.log(result.data);
    }
    return(
        <h1>{did}</h1>
    );
}