import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Link, Redirect } from './react-router-dom'
import Home from './component/Home'
import Page1 from './component/Page1'
import Page2 from './component/Page2'
ReactDOM.render(
  <Router>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/page1">page1</Link></li>
      <li><Link to="/page2">page2</Link></li>
    </ul>
    <div>
      <Switch >
        <Route exact path="/" component={Home} />
        <Route path="/page1" component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page2" component={Page2} />
        <Redirect from='/home' to="/" />
      </Switch>
    </div>
  </Router>
  , document.getElementById('root'))