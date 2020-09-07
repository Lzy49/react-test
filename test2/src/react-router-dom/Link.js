import React from 'react';
import RouterContext from './RouterContext'
export default (props) => {
  return (
    <RouterContext.Consumer>
      {
        ContentValue => {
          return (
            <a href={`#${props.to}`} onClick={
              () => {
                ContentValue.history.push(props.to)
              }
            }>{props.children}</a>
          )
        }
      }
    </RouterContext.Consumer>
  )
}