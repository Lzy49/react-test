import React from 'react'
import ReactDOM from 'react-dom'
let dom1 = (<div>吃了吗</div>)
let dom2 = React.createElement('div','','吃了吗？')
/**
 * webpack 会通过 babel 把  dom1 的 jsx 形式 转换成 dom2 的形式 
*/ 
/**
  dom1 和 dom2 打印内容
  let dom2 = {
    "type":"div",
    "key":null,
    "ref":null,
    "props":{"children":"吃了吗"}, // dom上的熟悉和内容都会渲染到props里 
    "_owner":null,
    "_store":{}
  }
 */
ReactDOM.render({dom2},document.getElementById('root'))