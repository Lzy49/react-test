import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Link, Redirect } from './react-router-dom'
import Home from './component/Home'
import Activity from './component/Activity'
import './style/main.css'
ReactDOM.render(
  <Router>
    <ul className="nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/activity">activity</Link></li>
    </ul>
    <div className="index">
      <Switch >
        <Route exact path="/" component={Home} />
        <Route path="/activity" component={Activity} />
        <Redirect from='/home' to="/" />
      </Switch>
    </div>
  </Router>
  , document.getElementById('root'))