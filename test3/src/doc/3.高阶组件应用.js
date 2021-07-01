import React, { useState } from 'react'
const Form = () => {
  const list = [
    {
      value: 'test',
      title: '名字',
      type: 'text'
    },
    {
      value: 'key',
      title: '密码',
      type: 'password'
    }
  ]
  return (
    <>
      {
        list.map((item) => {
          switch (item.type) {
            case 'text':
              return WillInput(Input, item)
            case 'password':
              return WillInput(PosswordInput, item)
          }
        })
      }
    </>
  )
}
const WillInput = (WrapComponent, item) => { // 高阶组件
  const [value, setValue] = useState(item.value)
  return <WrapComponent key={item.title} title={item.title} value={value} change={(event) => { setValue(event.target.value) }} />
}
const Input = (props) => {
  return (
    <div>
      {props.title} : <input value={props.value} onChange={(e) => props.change(e)} />
    </div>
  )
}
const PosswordInput = (props) => {
  return (
    <div>
      {props.title} : <input type="password" value={props.value} onChange={(e) => props.change(e)} />
    </div>
  )
}
export default Form