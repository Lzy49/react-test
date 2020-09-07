import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter as Router , Route } from './react-router-dom'
import Home from './component/Home'
import Page1 from './component/Page1'
import Page2 from './component/Page2'
ReactDOM.render(
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
  </Router>
,document.getElementById('root'))