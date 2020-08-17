import React,{Component} from './react'
import ReactDOM from './react-dom'
/*
  let element = React.createElement(
    'div',
    {id:'content'},
    React.createElement(
      'p',
      {
        style:{
          backgroundColor:'red'
        },
        className:'greenFont'
      },
      'How are you',
      React.createElement(
        'span',
        {
          style:{
            color:'yellow',
            fontSize:'30px'
          },  
        },
        '?'
      )
    ),
    React.createElement(
      'p',
      null,
      'I\'m fine,thanks'
    )
  )
*/
/* 
const Content2 = (props)=>{
  return <div className = {props.className}>你说你说</div>
}
const Content = (props)=>{
  return <div>
    {props.className}
    <Content2 className={props.className} />
  </div>
}
*/ 
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
       className={ this.props.className}
        <Content2  className={this.props.className} />
      </div>
    );
  }
}
class Content2 extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div className={this.props.className}>你说啥</div>
    );
  }
}
ReactDOM.render(<Content className="greenFont" />,document.getElementById('root'))