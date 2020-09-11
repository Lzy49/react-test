import React, { useContext } from 'react';
import RouterContext from './RouterContext'
export default (props) => {
  let RouterContextValue = useContext(RouterContext)
  RouterContextValue.history.block(
    props.when ? props.message : null
  )
  return (<></>)
}