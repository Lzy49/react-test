import { useContext } from 'react';
import RouterContext from './RouterContext'
import { pathToRegexp } from 'path-to-regexp'
export default (props) => {
  let contentValue = useContext(RouterContext)
  let children = Array.isArray(props.children) ? props.children : [props.children]
  for (let item of children) {
    let { exact = false, path = '/' } = item.props
    if (pathToRegexp(path, [], { end: exact }).test(contentValue.location.pathname)) {
      return item
    }
  }
  return null
}