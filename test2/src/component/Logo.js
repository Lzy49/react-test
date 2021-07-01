import React from 'react';
import { withRouter } from '../react-router-dom'
export default withRouter((props) => {
  return (
    <p onClick={() => {
      props.history.push('/')
    }}>
      {props.text}
    </p>
  )
})