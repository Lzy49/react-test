import React from './react'
import ReactDOM from './react-dom'
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
console.log(element)
ReactDOM.render(element,document.getElementById('root'))