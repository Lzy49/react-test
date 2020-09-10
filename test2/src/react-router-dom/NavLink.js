import React from 'react';
import { Route, Link } from './index'
export default (props) => {
  const { to, children, activeStyle = {}, activeName = '', exact = false } = props

  return (
    <Route path={typeof to === 'object' ? to.pathname : to} children={childrenprops => {
      // console.log(childrenprops.match, exact, childrenprops.match.isExact)
      let isActive = (childrenprops.match && (exact && childrenprops.match.isExact)) || (!exact && childrenprops.match)
      return < Link to={to} style={isActive ? activeStyle : {}} className={isActive ? activeName : ''} > {children}</ Link>
    }} />
  )
}