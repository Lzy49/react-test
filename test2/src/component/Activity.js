import React from 'react'
import { Link, Route } from '../react-router-dom'
import ActivityAdd from './ActivityAdd'
import ActivityList from './ActivityList'
import ActivityDetail from './ActivityDetail'
export default () => (
  <>
    <ul className="left-nav">
      <li><Link to="/activity/list">List</Link></li>
      <li><Link to="/activity/add">Add</Link></li>
    </ul>
    <div className="right-index">
      <Route path="/activity/add" component={ActivityAdd} />
      <Route path="/activity/list" component={ActivityList} />
      <Route path="/activity/detail/:id" component={ActivityDetail} />
    </div>
  </>
)