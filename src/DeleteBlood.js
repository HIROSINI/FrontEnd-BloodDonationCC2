import React from 'react'
import axios from "axios";
import react ,{useState} from "react";
import { Link } from 'react-router-dom';
import './DeleteBlood.css'
function DeleteBlood() {
    const [search,setSearch]=useState("");
    //const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.delete('http://127.0.0.1:8080/delete/'+search)
            .then( document.getElementById("dels").innerHTML = "Details are Deleted")
            .catch(err=>console.log(err))
        }
    }
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
        <div className='form4'>
            <h2>Delete Your Details</h2>
            <form>
            <p id="pp4">Please Enter your Aadhar Number [ Last 4 Digits ] to Delete your details:</p>
            <label className="sign-label">Aadhar Number: [ Last 4 Digits ]</label>
            <input type="text" placeholder="Enter your Aadhar Number" value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyPress={searchBook}></input>
            <p id="pp4">Press Enter to Delete the Details</p>
            {/* <input type="submit" id="submit"></input> */}
            </form>
        </div>
        </body>
        </>
  
  )
}

export default DeleteBlood

// import React, { Component } from 'react'
// //import axios from 'axios'
// import './DeleteBlood.css'
// import { Link } from 'react-router-dom'


// class DeleteBlood extends Component 
// {
  
//   render() {
//     return (
//   );
// }
// }
// export default DeleteBlood;
