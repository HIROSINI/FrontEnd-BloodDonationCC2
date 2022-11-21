import React from 'react';
import './App.css';
import First from './First.js'
import Second from './Second.js'
import Water from './Water.js'
import Street from './Street.js'
import Drain from './Drain.js'
import Submit from './Submit'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App()
{
   return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/" component={First}/>
        <Route exact path="/Second" component={Second}/>
        <Route exact path="/Submit" component={Submit}/>
        <Route exact path="/Water" component={Water}/>
        <Route exact path="/Submit" component={Submit}/>
        <Route exact path="/Street" component={Street}/>
        <Route exact path="/Submit" component={Submit}/>
        <Route exact path="/Drain" component={Drain}/>
        <Route exact path="/Submit" component={Submit}/>
        <Route exact path="/" component={First}/>
      </Switch>
    </div>
    </Router>
  );
}
export default App;