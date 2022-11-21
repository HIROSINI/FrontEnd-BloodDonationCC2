import React from "react";
import './c2.css';
import { Link } from "react-router-dom";
function First()
{
    return (
        <div className="all">
        <h2 className="head">Complaint Regarding:</h2>
        <p className="head1">Choose the Sector which you want to provide complaint about:</p>
        <div className="tot">
        <div className="road"></div>
        <div className="desc"><a><Link to="/Second">Road</Link></a></div>
        </div>
    <div className="tot">
    <div className="electricity"></div>
    <div className="desc"><a><Link to="/Street">Electricity</Link></a></div>
    </div>
    <div className="tot">
    <div className="drainage"></div>
    <div className="desc"><a><Link to="./Drain">Drainage</Link></a></div>
    </div>
    <div className="tot">
    <div className="water"></div>
    <div className="desc"><a><Link to="/Water">Water Supply</Link></a></div>
    </div>
    </div>
    );
}
export default First;