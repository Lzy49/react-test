import React from 'react'
import ReactDOM from 'react-dom'
/**
 * 组件分为 函数组件 和 class组件
 */

// 函数组件
/**
 * 函数组件运行机制
 * 1. 把属性组合成一个对象
 * 2. 把属性对象作为参数传递给函数
 * 3. 函数组件返回一个react元素 （React.createElement）
 * 4. 使用react-dom render 方法渲染
 */
function Component1(props){
  return (
    <div>吃{props.lunch}吗</div>
  )
}
// ReactDOM.render(<Component1 /> , document.getElementById('root'))
let component1 = (React.createElement(Component1,{
  lunch:'123'
},''))
// ReactDOM.render(component1 , document.getElementById('root'))
// 

// class 组件
/** 
 * class 组件机制
 * 1. 把属性组合成一个对象
 * 2. 把属性对象传给class构造函数 获取 class的实例
 * 3. 调用实例的render 方法进行渲染，得到react 元素
 * 4. 使用 react-dom render 方法渲染
 */
class Component2 extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div>吃{this.props.lunch}吗</div>
    )
  }
}
ReactDOM.render(<Component2 lunch="wmj" /> , document.getElementById('root'))
const component2  = (React.createElement(Component2,{
  lunch:'123'
},''))
// ReactDOM.render(component2 , document.getElementById('root'))