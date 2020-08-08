const render = function (node,parent){
  if(typeof node === 'string') {
    return parent.appendChild(document.createTextNode(node))
  }
  let props = node.props
  let domElement = document.createElement(node.type)
  for(let k in props){
    if(k === 'children'){ // 这是 子组件
      for(let item of props.children){
        render(item,domElement)
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