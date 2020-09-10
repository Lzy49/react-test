import React from 'react'
import { NavLink, Route } from '../react-router-dom'
import ActivityAdd from './ActivityAdd'
import ActivityList from './ActivityList'
import ActivityDetail from './ActivityDetail'
export default () => (
  <>
    <ul className="left-nav">
      <li><NavLink activeName="on" to="/activity/list">List</NavLink></li>
      <li><NavLink activeName="on" to="/activity/add">Add</NavLink></li>
    </ul>
    <div className="right-index">
      <Route path="/activity/add" component={ActivityAdd} />
      <Route path="/activity/list" component={ActivityList} />
      <Route path="/activity/detail/:id" component={ActivityDetail} />
    </div>
  </>
)