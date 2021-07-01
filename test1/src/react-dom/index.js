const render = function (node,parent){
  console.log(node)
  if(typeof node === 'string') {
    return parent.appendChild(document.createTextNode(node))
  }
  let props = node.props
  let type = node.type
  if(typeof node.type === 'function' && typeof node.type.isReactComponent){
    let element = new node.type(props).render()
    type = element.type
    props = element.props
  }else if(typeof node.type === 'function'){
    let element = node.type(props)
    type = element.type
    props = element.props
  }
  let domElement = document.createElement(type)
  for(let k in props){
    if(k === 'children'){ // 这是 子组件
      if(Array.isArray( props.children)){
        for(let item of props.children){
          render(item,domElement)
        }
      }else{
        render(props.children,domElement)
      }
    }else if(k === 'className'){ // 这是样式
      domElement.className = props[k]
    }else if(k === 'style'){ // 这是样式
      for(let k in props['style']){
        domElement.style[k] = props['style'][k]
      }
    }else{
      domElement.setAttribute(k,props[k])
    }
  }
  parent.appendChild(domElement)
}
export default {
  render
}