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
