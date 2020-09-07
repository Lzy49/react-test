import React from 'react'
import RouterContext from './RouterContext'
import { pathToRegexp } from 'path-to-regexp'
export default class Route extends React.Component {
  static contextType = RouterContext
  render() {
    const { path, exact = false, component: ReactComponent } = this.props
    if (pathToRegexp(path, [], { end: exact }).test(this.context.location.pathname)) {
      return (
        <ReactComponent />
      )
    }
    return null
  }
}