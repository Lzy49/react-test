import React from 'react';
import { Route } from '../react-router-dom'
export default (PropsComponent) => {
  return props => (
    <Route render={
      renderProps => {
        return (<PropsComponent {...props} {...renderProps} />)
      }
    } />
  )
}