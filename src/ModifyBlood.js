import React from 'react'
import './ModifyBlood.css'
import { Link } from 'react-router-dom'
export default function ModifyBlood() {
  return (
    <body className='modona'>
    <div className='nav'>
        <img src="https://sbtcup.org/ImageNew/WeNeedYou1.png" className='img' alt='WeNeedYou'/>
        <h1 className='head'>Blood Donation Management</h1>
        <h3 className='why'><a><Link to="/Why">Why Donate Blood?</Link></a></h3>
        <h3 className='do'><a><Link to="/Donation">Donate Blood!</Link></a></h3>
        <h3 className='mo'><a><Link to="/Modify">Modify Details</Link></a></h3>
    </div>
    <div className='don'>Modify the Details</div><br></br>
    <div><a><Link to="/Get"><button className='get'>Get the details</button></Link></a>
    <a><Link to="/Update"><button className='up'>Update the details</button></Link></a>
    <a><Link to="/Delete"><button className='del'>Delete the details</button></Link></a></div>
    <img src="https://slideplayer.com/slide/12312433/73/images/5/BENEFITS+OF+BLOOD+DONATION.jpg" id="bloin"></img>
    </body>
  )
}
