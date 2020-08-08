import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
class List extends React.Component {
  constructor(props){
    super(props)
  }
  static defaultProps = {
    age:18
  }
  static propTypes = {
    age:(props,propsName,componentName)=>{
      if(props[propsName] - 18 < 0){return new Error('Validation failed!')}  
    },
    sex:PropTypes.oneOf(['男','女']).isRequired,
    name:PropTypes.string.isRequired,
  }
  render(){
    return (
      <>
        {this.props.name}是一个{this.props.age}岁的{this.props.sex}人
      </>
    )
  }
}
class Wrap extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <>
        <List age={11} name={'pig'} sex={'男'} /> 
      </>
    )
  }
}



ReactDOM.render(<Wrap />,document.getElementById('root'))