import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, NavLink, Redirect } from './react-router-dom'
import Home from './component/Home'
import Activity from './component/Activity'
import Login from './component/Login'
import './style/main.css'
ReactDOM.render(
  <Router>
    <ul className="nav">
      <li><NavLink exact activeName="on" to="/">Home</NavLink></li>
      <li><NavLink activeName="on" to="/activity">activity</NavLink></li>
      <li><NavLink activeName="on" to="/login">login</NavLink></li>
    </ul>
    <div className="index">
      <Switch >
        <Route exact path="/" component={Home} />
        <Route path="/activity" render={renderProps => {
          if (localStorage.getItem('username')) {
            return <Activity />
          } else {
            return <Redirect to={{ pathname: "/login", state: { path: '/activity' } }} />
          }
        }} />
        <Route path="/login" component={Login} />
        <Redirect to="/" />
      </Switch>
    </div>
  </Router>
  , document.getElementById('root'))