
const REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for ? Symbol.for('react.element') : 'REACT_ELEMENT_TYPE'
const createElement = function(type,config,children){
  let props = {}
  if(config != null){
    props = {
      ...config
    }
  }
  let childrenLength = arguments.length - 2 
  if(childrenLength === 1){
    props.children = children
  }else{
    console.log(Array.prototype.slice.call(arguments,2))
    props.children = Array.prototype.slice.call(arguments,2)
  }
  return {
    $$typeof:REACT_ELEMENT_TYPE,
    type,
    props,
  }
}
export default {
  createElement
}