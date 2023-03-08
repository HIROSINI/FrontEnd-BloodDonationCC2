import React from 'react'
import './LoginDonation.css'
import { Link } from "react-router-dom"
export default function LoginBlood() {
  return (
    <>
    <body className='body1'>
    <div className='login'>
        <div className='login1'>Welcome!
        <br></br><br></br>Login<br></br><br></br></div>
        <div>
            <form>
                <label>Username: </label><br></br><br></br>
                <input type="text" id="uname" placeholder="Enter your Email-ID" required></input><br></br><br></br>
                <label>Password: </label><br></br><br></br>
                <input type="Password" id="upass" placeholder="Enter your Password" required></input><br></br><br></br>
                Or <a><Link to="/SignUp"><u>Sign up</u></Link></a><br></br><br></br>
                <a><Link to="/Why"><button id="Submit" required>Go</button></Link></a>
            </form>
        </div>
    </div>
    </body>
    </>
  )
}
