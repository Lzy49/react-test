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
          state: this.locationState
        }
      })
    })
    window.location.hash = window.location.hash || '/'
  }

  render() {
    const that = this
    let initPrompt = false
    const createHref = (location) => {
      if (typeof (location) === "object") {
        return location.pathname
      }
      return undefined
    }
    const push = (to) => {
      if (initPrompt) {
        const ok = window.confirm(typeof initPrompt === 'function' ? initPrompt(this.state.location) : initPrompt)
        if (!ok) return
      }
      if (createHref(to)) {
        window.location.hash = createHref(to)
        that.locationState = to.state
      } else {
        window.location.hash = to
      }
    }
    const block = (prompt) => {
      initPrompt = prompt
    }
    let value = {
      location: that.state.location,
      history: {
        prompt: initPrompt,
        createHref,
        push,
        block
      }
    }
    return (
      <RouterContext.Provider value={value} >
        {this.props.children}
      </RouterContext.Provider>
    )
  }
}
