import React from 'react'
import ReactDOM from 'react-dom'
/** 
 * 生命周期 - 旧的生命周期 
 */


class ChildContent extends React.Component{
  componentWillReceiveProps(){
    console.log('7.componentWillReceiveProps props值被改变时促发')
  }
  render() {
    return (
      <>
        <div>{this.props.number}</div>
      </>
    )
  }
  componentWillUnmount(){
    console.log('8.componentWillUnmount 组件被销毁执行')
  }
}


class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {number:0,number2:0 }
    console.log('0.constructor 初始化阶段')
  }
  componentWillMount(){
    console.log('1.在组件即将被挂载到页面的时刻执行')
  }
  shouldComponentUpdate(){
    console.log('4.shouldComponentUpdate 执行 在 render 执行之前执行')
    return true
  }
  componentWillUpdate(){
    console.log('5.componentWillUpdate 在组件更新之前，但shouldComponenUpdate之后被执行。但是如果shouldComponentUpdate返回false，这个函数就不会被执行了。')
  }
  add = ()=>{
    this.setState({
      number:this.state.number+1
    })
  }
  add2 = ()=>{
    this.setState({
      number2:this.state.number2+1
    })
  }
  render() { 
    console.log('2.挂载的代码生成')
    return (
      <>
        <div>{this.state.number}</div>
        <button onClick={this.add}>+</button>
        <button onClick={this.add2}>+</button>
        {this.state.number < 5 ? <ChildContent number={this.state.number2} /> : undefined }
      </>
    )
  }
  componentDidMount(){
    console.log('3.组件挂载完成时被执行。')
  }
  componentDidUpdate(){
    console.log('6.componentDidUpdate state 更新结束后执行')
  }
}
ReactDOM.render(<Content />,document.getElementById('root'))