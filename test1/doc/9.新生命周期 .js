import React,{Component} from 'react'
import ReactDOM from 'react-dom'
/** 
 * 生命周期 - 新的生命周期 
 * 执行顺序图：
 * https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/  
 */
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {number:0}
    console.log('%c Mounting-constructor 初始化阶段','color:yellow')
  }
  static getDerivedStateFromProps(prevProps, prevState){
    /** 
     * - 会在调用 render 方法之前调用，并且在初始挂载及后续更新时都会被调用。
     * - 它应返回一个对象来更新 state，如果返回 null 则不更新任何内容。
     * - prevProps 是 props  prevState 是 state
     * - return 的是 State
     */
    prevState.number++
    console.log('%c getDerivedStateFromProps 在数据改变和初始化时被执行','color:green')
    return prevState
  }
  shouldComponentUpdate(){
    console.log('%c 在getDerivedStateFromProps 执行后 在 render 执行之前执行','color:green')
    return true
  }
  add = ()=>{
    this.setState({
      number:this.state.number+1
    })
  }
  render() { 
    console.log('%c 挂载的代码生成','color:green')
    return (
      <>
        {this.state.number}
        <button onClick={this.add}>+</button>
      </>
    );
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    /**
     * 在最近一次渲染输出（提交到 DOM 节点）之前调用。它使得组件能在发生更改之前从 DOM 中捕获一些信息（例如，滚动位置）。
     * 此生命周期的任何返回值将作为参数传递给 componentDidUpdate()。
     */
    console.log('%c getSnapshotBeforeUpdate','color:green')
    return {number:123}
  }
  componentDidUpdate(prevProps, prevState , prev){
    /** 
     * 会在更新之后执行。
     * 可以通过接收的第三个值来处理前后差距 （第三个值 prev是getSnapshotBeforeUpdate 方法返回的值）
     */
    console.log(`%c getSnapshotBeforeUpdate 后执行并且携带 getSnapshotBeforeUpdate的返回值${JSON.stringify(prev)}`,'color:green')
  }
  componentDidMount(){
    /** 全局只执行1次 */
    console.log('%c 组件挂载完成时被执行。','color:yellow')
  }
  componentWillUnmount(){
    /** 销毁执行 */
    console.log('componentWillUnmount 组件被销毁执行')
  }
}

ReactDOM.render(<Content />,document.getElementById('root'))