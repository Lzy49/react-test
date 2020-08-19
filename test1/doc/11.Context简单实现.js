import React,{Component} from 'react'
import ReactDOM from 'react-dom'
/**
 * Context react上下文
 * Q: 什么时候使用 Context ？
 * A: Context 设计目的是为了共享那些对于一个组件树而言是“全局”的数据 大多数应用在以下几个场景
 *  - 1. 数据要传递的层级太多 比如 当 爷->父->子->孙  想要解决成 爷->孙
 *  - 2. 数据想要在兄弟层级之间传递。比如 a> b1 + b2  ; b1 -> b2 只能将数据升级到a中才能实现 b1 + b2 公用一个属性
 *  - 3. 数据想要在很多地方使用，切层级混乱 ( 结合 1，2 场景)
 * Q: Context 怎么使用？
 * A: Content 使用分为以下几个步骤
 *  - 1. 创建Context
 *  - 2. 在顶层创建 Provider
 *  - 3. 在需要调用的组件中使用 Content的 Consumer 分为以下两种不同的使用方法
 *      - 1. class组件
 *      - 2. fun 组件
 */

function createContext (initState) {
  class Provider extends Component {
    static contentState = initState
    render(){
      Provider.contentState = this.props.value
      return this.props.children
    } 
  }
  class Consumer extends Component {
    render() {
      return this.props.children(Provider.contentState)
    }
  }
  return {
    Provider,
    Consumer
  }
}
// 1. 创建 Context
const TreeContext = createContext();
// 2. 在最顶层要往下传递的层级写提供者
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color:'#000'
    }
  }
  setColor = (color)=>{
    this.setState({
      color
    })
  }
  render() { 
    return (
      <TreeContext.Provider value={{...this.state,setColor:this.setColor}}> {/**Provider 需要提供一个 value 值 */} 
        <Wrap />
      </TreeContext.Provider>
    )
  }
}
function Wrap(){
  return (
    <>
      <Header />
      <Index />
    </>
  )
}
// 3-1. class 组件调用 Consumer
class Header extends Component {
  static contextType = TreeContext // 指定调用那个 Context
  render(){
    this.context2 = TreeContext.Provider.contentState
    return (
      <div style={{'color':this.context2.color}}>
        Header
        <button onClick={()=>this.context2.setColor('green')}>改绿色</button>
      </div>
    )

  }
}
// 3-2. fun 组件调用消 Consumer
function Index(){
  return (
    <TreeContext.Consumer>
      {
        value=>{
          console.log('Index',value)
          return (
            <div style={{'color':value.color}}>
              index
              <button onClick={()=>value.setColor('red')}>改红色</button>
            </div>
          )
        }
      }
    </TreeContext.Consumer>
  )
}
ReactDOM.render(<Content />,document.getElementById('root'))