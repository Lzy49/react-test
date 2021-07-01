import React from 'react'
import ReactDOM from 'react-dom'
/* 
  ref 应用 
  1. ref = 字符串 （因为不好维护被废弃） <Content1 />
  2. ref = fun （不推荐） < Content2 />
  3. React.createRef() (推荐，因为后面和 hooks联动)
*/
class Content1 extends React.Component {
  getInputValue = ()=>{
    console.log(this.refs.inputRef.value)
  }
  render() { 
    return ( 
      <>
        <input ref = "inputRef" />
        <button onClick = {this.getInputValue}>+</button>
      </>
    );
  }
}
class Content2 extends React.Component {
  getInputValue = ()=>{
    console.log(this.inputRef.value)
  }
  inputRef
  render() { 
    return ( 
      <>
        <input ref = {(e)=>(this.inputRef = e)} />
        <button onClick = {this.getInputValue}>+</button>
      </>
    );
  }
}
class Content3 extends React.Component {
  constructor(){
    super()
    this.inputRef =  React.createRef()
  }
  getInputValue = ()=>{
    console.log(this.inputRef.current.value)
  }
  render() { 
    return ( 
      <>
        <input ref = {this.inputRef} />
        <button onClick = {this.getInputValue}>+</button>
      </>
    );
  }
}
/** 
 * ref 获取子组件中的dom 
 * 1. class 组件获取
 * - 在运行过程中 this.inputRef.current 指向的是 ChildContent1 类的实例 然后通过实例获取 其下面的 ref
 * 2. fun  组件获取
 * - 1. 直接使用 ref 回调实现
 * - 2. 使用React.forwardRef 方法转换
 */

class ChildContent1 extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef()
  }
  render() { 
    return (
      <input ref = {this.inputRef } />
    );
  }
}
const  ChildContent2 = (props)=>{
  return <input ref={props.inputRef} />
}
let  ChildContent3 = (props,ref)=>{
  return <input ref={ref} />
}
ChildContent3 = React.forwardRef(ChildContent3)
class Content extends React.Component {
  constructor(){
    super()
    this.inputRef1 =  React.createRef()
    this.inputRef2 =  React.createRef()
    this.inputRef3 =  React.createRef()
  }
  getInputValue = ()=>{
    console.log(this.inputRef1.current.inputRef.current.value)
    console.log(this.inputRef2.value)
    console.log(this.inputRef3.current.value)
  }
  render() { 
    return ( 
      <>
        <ChildContent1 ref = {this.inputRef1} />
        <ChildContent2 inputRef={ el => this.inputRef2 = el} / >
        <ChildContent3 ref = {this.inputRef3} / >
        <button onClick = {this.getInputValue}>+</button>
      </>
    );
  }
}
ReactDOM.render(<Content />,document.getElementById('root'))