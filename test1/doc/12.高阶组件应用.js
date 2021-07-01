import React,{Component} from 'react'
import ReactDOM from 'react-dom'
/**
 * 高阶组件 HOC
 */
const getLocal = (Component,name)=>{
  return class extends Component {
    constructor(props){
      super(props)
      this.state =  {
        name:''
      }
    }
    componentDidMount(){
      let name2 = localStorage.getItem(name)
      this.setState({
        name:name2
      })
    }
    render(){
      return(
        <Component name={this.state.name} />
      )
    }
  }
} 
class Content extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <>
        {this.props.name}
      </>
    )
  }
}
Content = getLocal(Content,'zhangsan')
/**
 * reduer
 */
class GetLocal extends Component {
  constructor(props) {
    super(props);
    this.state = {name:''}
  }
  componentDidMount(){
    let name2 = localStorage.getItem(this.props.name)
    this.setState({
      name:name2
    })
  }
  render() { 
    return (
      this.props.reduer(this.state)
    );
  }
}
 
export default GetLocal;
ReactDOM.render(<GetLocal name="zhangsan" reduer={
  value=>(
    <>
      {value.name}
    </>
  )
} />,document.getElementById('root'))