import { useNavigate } from "react-router-dom";
import React from "react";
export function isTokenExist(){
    if (localStorage.getItem("jwtToken") === null) {
        return false;
    }
    return true;
}
export function logout(){
    localStorage.clear();
}
export const initUrl="http://localhost:8080";

export function checkForTokenExist(){
    return localStorage.getItem('jwtToken');
}
export function checkForAdminTokenExist(){
    return localStorage.getItem('isAdminAuthenticated');
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
export function getRole(){
    return localStorage.getItem('role');
}
export function getToken(){
    const token = localStorage.getItem("jwtToken");
    if(token!==null){
        return 'Bearer '+token;
    }
    return null;
}
export function isAdmin(){
    if(getToken() && getRole()==='0'){
        return true;
    }
    else
        return false;
}
export function isDoctor(){
    if(getToken() && getRole()==='1'){
        return true;
    }
    else
        return false;
}