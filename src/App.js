import React from 'react'
import ModifyBlood from './ModifyBlood'
import LoginBlood from './LoginBlood'
import SignUpBlood from './SignUpBlood'
import WhyDonate from './WhyDonate'
import Donation from './Donation'
import UpdateBlood from './UpdateBlood'
import DeleteBlood from './DeleteBlood'
import GetDonation from './GetDonation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/" component={LoginBlood}/>
        <Route exact path="/SignUp" component={SignUpBlood}/>
        <Route exact path="/Why" component={WhyDonate}/>
        <Route exact path="/Donation" component={Donation}/>
        <Route exact path="/Modify" component={ModifyBlood}/>
        <Route exact path="/Update" component={UpdateBlood}/>
        <Route exact path="/Delete" component={DeleteBlood}/>
        <Route exact path="/Get" component={GetDonation}/>
      </Switch>
    </Router>
  )
}

export default App 