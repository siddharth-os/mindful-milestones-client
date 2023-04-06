import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
export default function Tryapi(){
    const [data,setData]=useState("before");
    const fetchData = async ()=>{
        const token = 'Bearer '+localStorage.getItem('jwtToken');
        console.log(token);
        console.log("hereh");
        let config = {
            headers: {
              'Authorization':token,
            },
          }
        const res= await axios.get("http://172.16.138.189:8080/try/something",config);
        // localStorage.setItem('test',res.data\\);
        console.log("here");
        console.log(res);
        setData(res.data);
    }
    useEffect(()=>{
        fetchData();
    },[]);

    return(
        <h1>{data}</h1>
    );
}