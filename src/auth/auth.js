import { useNavigate } from "react-router-dom";
import React from "react";
export function isTokenExist(){
    if (localStorage.getItem("jwtToken") === null) {
        return false;
    }
    return true;
}
export function logout(){
    if(localStorage.getItem("jwtToken"))
        localStorage.removeItem('jwtToken');
}
export const initUrl="http://localhost:8080";

export function checkForTokenExist(){
    return localStorage.getItem('jwtToken');
}
export function getConfig(){
    if(checkForTokenExist()===null)
        return null;
    const token = 'Bearer '+localStorage.getItem('jwtToken');
    console.log(token);
    let config = {
        headers: {
          'Authorization':token,
        },
    }
    return config;
}