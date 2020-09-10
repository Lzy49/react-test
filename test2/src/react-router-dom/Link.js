import React from 'react';
import RouterContext from './RouterContext'
export default (props) => {
  return (
    <RouterContext.Consumer>
      {
        ContentValue => {
          return (
            <a {...props} href={`#${ContentValue.history.createHref(props.to) || props.to}`} onClick={
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