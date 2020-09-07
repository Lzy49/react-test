import React from 'react'
import RouterContent from './RouterContent'
export default class Route extends React.Component {
  static contextType = RouterContent
  render() {
    const {path,exact,component:ReactComponent} = this.props
    console.log(path,this.context.location.pathname)
    if((exact && path === this.context.location.pathname)){
      return (
        <ReactComponent />
      )
    }else{
      return null
    }
  }
}