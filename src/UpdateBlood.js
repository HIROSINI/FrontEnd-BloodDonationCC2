import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
import './UpdateBlood.css'
import axios from 'axios';
class  UpdateBlood extends Component
{
    constructor(props) {
      super(props);
      this.state = {
        doname:'',
        age:'',
        gender:'',
        bgrp:'',
        mobno:'',
        donid:'',
        units:'',
        disease:'',
        email: '',
        address:'',
      };
    }
    
   
  
    handleNameChange = (event) => {
      this.setState({ doname: event.target.value });
    };
    
    handleAgeChange = (event) => {
      this.setState({ age: event.target.value });
    };
    
    handleGenderChange = (event) => {
      this.setState({ gender: event.target.value });
    };
    
    handleBloodGroupChange = (event) => {
      this.setState({ bgrp: event.target.value });
    };
    
    handlePhoneChange = (event) => {
      this.setState({mobno: event.target.value });
    };
    
    handleAadharChange = (event) => {
      this.setState({ donid: event.target.value });
    };
    
    handleUnitsChange = (event) => {
      this.setState({ units: event.target.value });
    };
    
    handleDiseaseChange = (event) => {
      this.setState({ disease: event.target.value });
    };
    
    handleEmailChange = (event) => {
      this.setState({ email: event.target.value });
    };
    
    handleAddressChange = (event) => {
      this.setState({ address: event.target.value });
    };
    
    handleSubmit = (event) => {
      event.preventDefault();
      const data = {
        doname: this.state.doname,
        age: this.state.age,
        gender: this.state.gender,
        bgrp: this.state.bgrp,
        mobno: this.state.mobno,
        donid: this.state.donid,
        units: this.state.units,
        disease: this.state.disease,
        email: this.state.email,
        address: this.state.address,
        
      };
    
      
      axios.put('http://127.0.0.1:8080/put', data)
    };
    
    render() {
      return (
        <>
        <body className='dona'>
        <div className='nav'>
           <img src="https://sbtcup.org/ImageNew/WeNeedYou1.png" className='img' alt='WeNeedYou'/>
          <h1 className='head'>Blood Donation Management</h1>
         <h3 className='why'><a><Link to="/Why">Why Donate Blood?</Link></a></h3>
         <h3 className='do'><a><Link to="/Donation">Donate Blood!</Link></a></h3>
           <h3 className='mo'><a><Link to="/Modify">Modify Details</Link></a></h3>
       </div>
        <form onSubmit={this.handleSubmit} className="form7">
         <h2>Update Your Details</h2>
          <label className="sign-label">Full Name</label>
          <input
            className="sign-input"
            type="text"
            placeholder='Enter your Name'
            value={this.state.doname}
            onChange={this.handleNameChange}
            required/><br></br><br></br>
  
          <label className="sign-label">Age</label>
          <input
            className="sign-input"
            placeholder='Enter your Age'
            type="number"
            min="18"
            max="65"
            value={this.state.age}
            onChange={this.handleAgeChange}
            required/><br></br><br></br>
  
          <label className="sign-label">Gender</label>
          <dropdown value={this.state.gender}
              onChange={this.handleGenderChange}>
            <select name="gender" id="size" required>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
              </select>
              </dropdown>
            <br></br><br></br>
  
          <label className="login-label">Blood Group</label>
          <dropdown value={this.state.bgrp}
            onChange={this.handleBloodGroupChange}>
                     <select name="bgrp" id="size" required>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="A1+">A1+</option>
                        <option value="A1-">A1-</option>
                        <option value="A2+">A2+</option>
                        <option value="A2-">A2-</option>
                        <option value="A1B+">A1B+</option>
                        <option value="A1B-">A1B-</option>
                        <option value="A2B+">A2B+</option>
                        <option value="A2B-">A2B-</option>
          </select>
          </dropdown><br></br><br></br>
  
          <label className="sign-label">Mobile Number</label>
          <input
            className="sign-input"
            placeholder='Enter your Mobile Number'
            type="tel"
            value={this.state.mobno}
            onChange={this.handlePhoneChange}
            required/><br></br><br></br>
          
          <label className="sign-label">Aadhar Number</label>
          <input
            className="sign-input"
            placeholder='Enter your Aadhar Number'
            type="number"
            value={this.state.donid}
            onChange={this.handleAadharChange}
            required/><br></br>
           <p id="pnote">[ <span>Note</span> : Your Aadhar Number [ Last 4 Digits ] will be used as your Donor-ID ]</p>
          
          <label className="sign-label">Units [ in ML ]</label>
          <input
            className="sign-input"
            placeholder='Enter the Units'
            type="number"
            min="200"
            max="500"
            value={this.state.units}
            onChange={this.handleUnitsChange}
            required/><br></br><br></br>
  
          <label className="sign-label">Diseases [ If Any ]</label>
          <input
            className="sign-input"
            placeholder='Mention'
            type="text"
            value={this.state.disease}
            onChange={this.handleDiseaseChange}
            required/><br></br><br></br>
  
          <label className="sign-label">Email-ID</label>
          <input
            className="sign-input"
            placeholder='Enter your Email-ID'
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
            required/><br></br><br></br>
  
          <label className="sign-labels">Address</label>
          <textarea
          placeholder='Enter your Address'
          id="address"
          type="text"
          rows="5"
          cols='25'
          value={this.state.address}
          onChange={this.handleAddressChange}
          required/>
          <br></br><br></br><br></br><br></br><br></br>
          <button id="submit" type="submit">
            Update
          </button>
        </form>
        </body>
        </>
      );
    }
  }
  
  export default UpdateBlood;

//   return (
//     <>
//     <body className='dona'>
//     <div className='nav'>
//         <img src="https://sbtcup.org/ImageNew/WeNeedYou1.png" className='img' alt='WeNeedYou'/>
//         <h1 className='head'>Blood Donation Management</h1>
//         <h3 className='why'><a><Link to="/Why">Why Donate Blood?</Link></a></h3>
//         <h3 className='do'><a><Link to="/Donation">Donate Blood!</Link></a></h3>
//         <h3 className='mo'><a><Link to="/Modify">Modify Details</Link></a></h3>
//     </div>
//     <div className='form1'>
//         <h2>Update Your Details</h2>
//         <form>
//         <label>Full Name: </label>
//         <input type="text" placeholder='Enter your name' required></input><br/><br/>
//         <label>Age: </label>
//         <input type="number" min="18" max="65" placeholder='Enter your Age' required></input><br/><br/>
//         <label>Gender: </label>
//         <select name="gender" id="size" required>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//             <option value="Other">Other</option>
//             </select><br/><br/>
//         <label>Blood Group: </label>
//         <select name="bgrp" id="size" required>
//             <option value="O+">O+</option>
//             <option value="O-">O-</option>
//             <option value="A+">A+</option>
//             <option value="A-">A-</option>
//             <option value="B+">B+</option>
//             <option value="B-">B-</option>
//             <option value="AB+">AB+</option>
//             <option value="AB-">AB-</option>
//             <option value="A1+">A1+</option>
//             <option value="A1-">A1-</option>
//             <option value="A2+">A2+</option>
//             <option value="A2-">A2-</option>
//             <option value="A1B+">A1B+</option>
//             <option value="A1B-">A1B-</option>
//             <option value="A2B+">A2B+</option>
//             <option value="A2B-">A2B-</option>
//             </select><br/><br/>
//         <label>Mobile Number: </label>
//         <input type="tel" placeholder='Enter Your Mobile Number' required></input><br/><br/>
//         <label>Aadhar Number: </label>
//         <input type="tel" placeholder='Enter Your Aadhar Number' required></input>
//         <p id="pnote">[ <span>Note</span> : Your Aadhar Number will be used as your Donor-ID ]</p>
//         <label>Units [ in ML ]: </label>
//         <input type="number" min="200" max="500" placeholder='Enter the number of Units' required></input><br/><br/>
//         <label>Diseases [ If Any ]: </label>
//         <input type="text" placeholder='Mention' required></input><br/><br/>
//         <label>Email ID: </label>
//         <input type="email" placeholder='Enter Your Email-ID' required></input><br/><br/>
//         <label>Address: </label>
//         <textarea  rows="5" cols="30" placeholder='Enter your Address' id="address" required></textarea><br></br><br></br><br></br><br></br><br></br>
//         <input type="submit" id="submit"></input>
//         </form>
//     </div>
//     </body>
//     </>
//   )
// }
