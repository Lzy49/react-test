import React, { useRef } from 'react'
export default (props) => {
  const usernameRef = useRef()
  const login = () => {
    localStorage.setItem('username', usernameRef.current.value)
    if (props.location.state && props.location.state.path) {
      props.history.push(props.location.state.path)
    } else {
      props.history.push('/')
    }
  }
  return (
    <>
      <input ref={usernameRef} />
      <button onClick={() => login()}>登录</button>
    </>
  )
}