import React from 'react';
import RouterContext from './RouterContext'
export default (props) => {
  return (
    <RouterContext.Consumer>
      {
        ContentValue => {
          return (
            <a {...props} onClick={
              function () {
                ContentValue.history.push(props.to)
              }
            }>{props.children}</a>
          )
        }
      }
    </RouterContext.Consumer >
  )
}