import React from 'react';
import { Link } from 'react-router-dom';
import './Drain.css';

function Drain() {
  return (
    <div>
    <h2 className="he">Based on Drainage Problems</h2>
    <textarea id="box" rows="20" cols="100" placeholder="Add Your Complaints/Description About The Problem Here"></textarea><br></br><br></br>
    <p id='pa'>Upload an image for Proof:</p>
    <input type="file" className="btn"></input><br></br><br></br>
    <button class="btn1"><a><Link to="/Submit">Submit</Link></a></button>
    <div className='d'><a><Link to="/First"></Link></a>
    <img src='https://png.pngitem.com/pimgs/s/202-2022801_transparent-back-button-clipart-arrow-clip-art-hd.png' class="img"></img>
    </div>
    </div>
  )
}
export default Drain