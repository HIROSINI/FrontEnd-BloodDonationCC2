import React from 'react'
import './SignUpBlood.css'
import { Link } from 'react-router-dom'
export default function SignUpBlood() {
  return (
    <>
    <body className='body2'>
    <div className='login2'>
        <div className='login3'>Welcome!
        <br></br>Sign Up<br></br><br></br></div>
        <div>
            <form>
                <label>First Name: </label>
                <input type="text" id="input1" placeholder="Enter your First Name" required></input><br></br><br></br>
                <label>Last Name: </label>
                <input type="text" id="input2" placeholder="Enter your Last Name" required></input><br></br><br></br>
                <label>Email: </label>
                <input type="email" id="input3" placeholder="Enter your Email-ID" required></input><br></br><br></br>
                <label>Password: </label>
                <input type="Password" id="input4" placeholder="Enter your Password" required></input><br></br><br></br>
                <label>Confirm Password: </label>
                <input type="Password" id="input5" placeholder="Re-Enter your Password" required></input><br></br><br></br>
                <a><Link to="/Why"><button id="Submit">Go</button></Link></a>
            </form>
        </div>
    </div>
    </body>
    </>
  )
}
