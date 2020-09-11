import React from 'react'
import RouterContext from './RouterContext'
import { pathToRegexp } from 'path-to-regexp'
export default class Route extends React.Component {
  static contextType = RouterContext
  render() {
    const location = this.context.location
    const { path = '/', exact = false, component: ReactComponent, render, children } = this.props
    let paramsName = []
    const regexp = pathToRegexp(path, paramsName, { end: exact })
    const matched = location.pathname.match(regexp)
    let componentProps = {
      history: this.context.history,
      location
    }
    if (matched) {
      const [url, ...value] = matched
      let params = value.reduce((params, item, index) => {
        params[paramsName[index].name] = item
        return params
      }, {})
      componentProps.match = {
        params, // 动态路由参数 
        isExact: path === location.pathname, //  是否精确匹配
        path,// 要匹配的链接（path)
        url: location.pathname//当前路由
      }
      if (ReactComponent) {
        return <ReactComponent {...componentProps} />
      } else if (render) {
        return render(componentProps)
      } else if (children) {
        return children(componentProps)
      } else {
        return null
      }
    } else {
      if (children) {
        return children(componentProps)
      } else {
        return null
      }
    }
  }
}