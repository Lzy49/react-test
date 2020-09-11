import React, { useState, useEffect } from 'react';
import RouterContext from './RouterContext'
export default (props) => {
  let [initState, setInitState] = useState({
    location: {
      hash: "",
      pathname: window.location.hash.slice(1),
      search: "",
      state: window.history.state
    }
  })
  useEffect(() => {
    window.onpopstate = function (e) {
      setInitState(
        {
          ...initState,
          location: {
            ...initState.location,
            pathname: window.location.pathname,
            state: e.state
          }
        }
      )
    }
    window.onpushstate = function (state, title, url) {
      setInitState(
        {
          ...initState,
          location: {
            ...initState.location,
            pathname: url,
            state: state
          }
        }
      )
    }
    push(window.location.pathname)
  }, [])
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
      window.history.pushState(
        to.state,
        null,
        createHref(to)
      )
    } else {
      window.history.pushState(
        null,
        null,
        to
      )
    }
  }
  const block = (prompt) => {
    initPrompt = prompt
  }
  let value = {
    location: initState.location,
    history: {
      prompt: initPrompt,
      createHref,
      push,
      block
    }
  }
  return (
    <RouterContext.Provider value={value} >
      {props.children}
    </RouterContext.Provider>
  )
}