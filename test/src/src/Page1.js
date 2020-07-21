import React,{Component} from 'react';
const MyContext = React.createContext();
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
    return (
      <MyContext.Provider value = {{color:this.state.color,setColor:this.setColor}}>
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
  render(){
    return (
      <div style={{borderColor:this.context.color,borderWidth:2,borderStyle:'solid'}}>
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