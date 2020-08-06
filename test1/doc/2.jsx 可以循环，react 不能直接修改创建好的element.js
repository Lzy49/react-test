
import React from 'react'
import ReactDOM from 'react-dom'
/**
 * jsx 可以循环但是必须要有唯一key
 */
let list = [ 
  <div key='1'>1</div>,
  <div key='2'>2</div>,
  <div key='3'>3</div>
]
let title = <h1>你猜猜</h1>
let list2 = React.Children.map(list,(item,index)=>(<li key={index}>{item}</li>)) // 循环修改li
//title.props.Children = '吃了吗' // 报错 ，react 不能修改 element 只能重新创建新的 element (冻结一个对象使用Object.freeze())
ReactDOM.render(
  <>
    {title}
    <ul>{list2}</ul>
  </>
,document.getElementById('root'))