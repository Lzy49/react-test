import React from 'react';
import RouterContext from './RouterContext'
export default class HashRouter extends React.Component {
  static contextType = RouterContext
  state = {
    location: {
      hash: "",
      pathname: window.location.hash.slice(1),
      search: "",
      state: window.history.state
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        ...this.state,
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1),
          state: window.history.state
        }
      })
    })
    window.location.hash = window.location.hash || '/'
  }

  render() {
    let value = {
      location: this.state.location,
      history: {
        push: (path) => {
          window.location.hash = path
        }
      }
    }
    return (
      <RouterContext.Provider value={value} >
        {this.props.children}
      </RouterContext.Provider>
    )
  }
}
