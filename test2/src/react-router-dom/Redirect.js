import { useContext } from 'react'
import RouterContext from './RouterContext'
export default (props) => {
  let contentValue = useContext(RouterContext)
  let { from = contentValue.location.pathname } = props
  if (from == contentValue.location.pathname) {
    contentValue.history.push(props.to)
  }
  return null
}