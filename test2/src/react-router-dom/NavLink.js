import React from 'react';
import { Route, Link } from './index'
export default (props) => {
  const { to, children, activeStyle = {}, activeName = '', exact = false } = props

  return (
    <Route
      path={typeof to === 'object' ? to.pathname : to}
      exact={exact}
      children={childrenprops => {
        return < Link to={to} style={childrenprops.match ? activeStyle : {}} className={childrenprops.match ? activeName : ''} > {children}</ Link>
      }}
    />
  )
}