import axios from "axios";
import './GetDonation.css';
import { Link } from "react-router-dom";
import React, { Component } from "react";

class GetDonation extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/get')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <>
        <div className='nav'>
           <img src="https://sbtcup.org/ImageNew/WeNeedYou1.png" className='img' alt='WeNeedYou'/>
          <h1 className='head'>Blood Donation Management</h1>
         <h3 className='why'><a><Link to="/Why">Why Donate Blood?</Link></a></h3>
         <h3 className='do'><a><Link to="/Donation">Donate Blood!</Link></a></h3>
        <h3 className='mo'><a><Link to="/Modify">Modify Details</Link></a></h3>
       </div>
       <h2 id="Det">Donor Details</h2>
      <table border={2}>
      <thead>
        <tr>
          <th>Donor-ID</th>
          <th>Donor Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Blood Group</th>
          <th>Units [ in ML ]</th>
          <th>Diseases [ If Any ]</th>
          <th>Mobile Number</th>
          <th>Email-ID</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.donid}>
            <td>{user.donid}</td>
            <td>{user.doname}</td>
            <td>{user.age}</td>
            <td>{user.gender}</td>
            <td>{user.bgrp}</td>
            <td>{user.units}</td>
            <td>{user.disease}</td>
            <td>{user.mobno}</td>
            <td>{user.email}</td>
            <td>{user.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <h2 id="Det1">Thank you for Donating!</h2>
    </>
    );
  }}
  
export default GetDonation;


