import React from 'react';
import { Link } from "react-router-dom";

function Second() {
  return (
    <div id="align">
    <h2 className="he">Based on Road Problems</h2>
    <textarea id="box" rows="20" cols="100" placeholder="Add Your Complaints/Description About The Problem Here"></textarea><br></br><br></br>
    <p id='pa'>Upload an image for Proof:</p>
    <input type="file" className="btn"></input><br></br><br></br> 
    <button class="btn1"><a><Link to="/Submit">Submit</Link></a></button>
    </div>
  )
}
export default Second