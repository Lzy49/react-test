import React from 'react';
import RouterContent from './RouterContent'
export default class HashRouter extends React.Component{
  static contextType = RouterContent
  state = {
    location:{
      hash: "",
      pathname: window.location.hash.slice(1),
      search: "",
      state: window.history.state
    }
  }
  componentDidMount(){
    window.addEventListener('hashchange',()=>{
      this.setState({
        ...this.state,
        location:{
          ...this.state.location,
          pathname: window.location.hash.slice(1),
          state: window.history.state
        }
      })
    })
    window.location.hash = window.location.hash || '/'
  }
  render(){
    let value = {
      location:this.state.location
    }
    return (
      <RouterContent.Provider value = {value} >
        {this.props.children}
      </RouterContent.Provider>
    )
  }
}
