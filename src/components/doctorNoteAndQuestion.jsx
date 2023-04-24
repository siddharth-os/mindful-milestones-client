import React from "react";
import { CircularProgress } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { getConfig, initUrl } from "../auth/auth";
import axios from "axios";
import Questionnaire from "./questionnaire";
import Note from "./doctorNote";
export default function NoteAndQues(props) {
  const {pid}=props;
  const cardStyle = {
    backgroundColor: "#FDF4F5",
    margin: "1rem",
    padding: "0.5rem",
    borderRadius: "20px",
    boxShadow: "8px 8px 8px gray",
  };
  return (
    <div
      className="row "
      style={{ display: "flex", justifyContent: "center",marginLeft:"0.5rem" }}
    >
        <Questionnaire pid={pid}/>
        <Note pid={pid}/>
    </div>
  );
}
