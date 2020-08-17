import React,{Component} from 'react'
import ReactDOM from 'react-dom'
/**
 * setState 
 * 1. setState 有时是异步的有时是同步的
 * 2. setState 会在事物合并执行完毕后合并执行
 * 3. setState 在异步方法中是同步执行的
 */
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {  number:0  }
  }
  add = ()=>{
    // 多条setState 会合并在一起执行不会逐条执行，所以this.state.number 是一样的值
    this.setState({
      number:this.state.number + 1
    })
    this.setState({
      number:this.state.number + 1
    })
    this.setState({
      number:this.state.number + 1
    })
    this.setState({
      number:this.state.number + 1
    })
    setTimeout(()=>{
      // 在 setTimeout里会被同步执行
      this.setState({
        number:this.state.number + 100
      })
      this.setState({
        number:this.state.number + 100
      })
    })
    console.log(this.state) // 不会是上述代码的返回值
  }
  render() { 
    return (
      <>
        {this.state.number}
        <button onClick={this.add}>+</button>
      </>
    );
  }
}
ReactDOM.render(<Content />,document.getElementById('root'))