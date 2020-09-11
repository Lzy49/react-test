import React, { useContext } from 'react';
import RouterContext from './RouterContext'
export default (props) => {
  console.log(props)
  let RouterContextValue = useContext(RouterContext)
  console.log(RouterContextValue)
  RouterContextValue.history.block(
    props.when ? props.message : null
  )
  return (<></>)
}