import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
export default function Tryapi(){
    return(
        <div>
            <h1>helo</h1>
            <div class="container mt-5">
          <a href="#" class="btn btn-primary hoverable-button">
            Hover me!
          </a>
          <div class="list-container">
            <ul class="list-group">
              <li class="list-group-item">List item 1</li>
              <li class="list-group-item">List item 2</li>
              <li class="list-group-item">List item 3</li>
            </ul>
          </div>
        </div>
        </div>
    );
}