import React,{Component} from 'react';
const createContext = ()=>{
  class Provider extends Component {
    static value;
    constructor(props) {
      super(props)
    }
    static getDerivedStateFromProps(nextPropos,prevState){
      Provider.value = nextPropos.value
      return {
        value:nextPropos.value
      }
    }
    render(){
      return this.props.children
    }
  }
  class Consumer extends Component {
    
    render(){
      return this.props.children(Provider.value)
    }
  }
  return {
    Provider,Consumer
  }
}
const MyContext = createContext();
class Page1 extends Component {
  constructor() {
    super();
    this.state = {
      color:'green'
    }
  }
  setColor = (color)=>{
    this.setState({
      color
    })
  }
  render() { 
    const value = {color:this.state.color,setColor:this.setColor}
    return (
      <MyContext.Provider value = {value}>
        <div style={{borderColor:this.state.color,borderWidth:2,borderStyle:'solid'}}>
        Page1
          <Main />
        </div>
      </MyContext.Provider>
    )
  }
}
class Main extends Component {
  static contextType = MyContext;
  constructor(props) {
    super(props);
  }
  render(){
    const color = Main.contextType.Provider.value.color
    return (
      <div style={{borderColor:color,borderWidth:2,borderStyle:'solid'}}>
        Main
        <Content />
      </div>
    )
  }
}
const Content = ()=>{
  return (
    <MyContext.Consumer>
      {
        value => (
          <div style={{borderColor:value.color,borderWidth:2,borderStyle:'solid'}}>
            Content
            <button onClick = {()=>{
              value.setColor('green')
            }}>改成绿色</button>
            <button onClick = {()=>{
              value.setColor('red')
            }}>改成红色</button>
          </div>
        )
      }
    </MyContext.Consumer>
  )
}
export default Page1;