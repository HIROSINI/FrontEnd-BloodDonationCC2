import React from 'react'
import './WhyDonate.css';
import { Link } from 'react-router-dom';
export default function WhyDonate() {
  return (
    <>
    <body className='whydona'>
    <div className='nav'>
        <img src="https://sbtcup.org/ImageNew/WeNeedYou1.png" className='img' alt='WeNeedYou'/>
        <h1 className='head'>Blood Donation Management</h1>
        <h3 className='why'><a><Link to="/Why">Why Donate Blood?</Link></a></h3>
        <h3 className='do'><a><Link to="/Donation">Donate Blood!</Link></a></h3>
        <h3 className='mo'><a><Link to="/Modify">Modify Details</Link></a></h3>
    </div>
    <div className='don'>Why Donate Blood?
    </div>
    <img src="https://stanfordbloodcenter.org/wp-content/uploads/2020/06/Blood-facts_10-illustration-graphics__canteen.png" alt="whydon" id="img"></img>
    <p className='para'>
    Safe blood saves lives. Blood is needed by women with complications during pregnancy and childbirth, children with severe anaemia, often resulting from malaria or malnutrition, accident victims and surgical and cancer patients.
    There is a constant need for a regular supply of blood because it can be stored only for a limited period of time before use. Regular blood donation by a sufficient number of healthy people is needed to ensure that blood will always be available whenever and wherever it is needed.
    </p><p className='para1'>
    Blood is the most precious gift that anyone can give to another person – the gift of life. A decision to donate your blood can save a life, or even several if your blood is separated into its components – red cells, platelets and plasma – which can be used individually for patients with specific conditions.
    </p>
    <img src='https://healthmatters.nyp.org/wp-content/uploads/2021/12/nybc-blood-donation-hero.jpg' alt="2sec" id="sec"></img>
    </body>
    </>
  )
}
