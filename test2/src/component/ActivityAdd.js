import React, { useRef, useState, useEffect } from 'react'
import { Prompt } from '../react-router-dom'
export default (props) => {
  let activitynameRef = useRef()
  const [isPrompt, setIsPrompt] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsPrompt(false)
    setIsSubmit(true)
  }

  useEffect(() => {
    if (isSubmit) {
      let activitys = localStorage.getItem('activitys') ? JSON.parse(localStorage.getItem('activitys')) : []
      activitys.push({
        id: new Date().getTime(),
        name: activitynameRef.current.value
      })
      localStorage.setItem('activitys', JSON.stringify(activitys))
      props.history.push('/activity/list')
    }
  }, [isSubmit])
  return (
    <div className="activity-add">
      <p>ActivityAdd</p>
      <Prompt message={(location) => (`您真的要跳转到${location.pathname}吗？如果跳转，页面信息将被清楚`)} when={isPrompt} />
      <form onSubmit={handleSubmit} method="get">
        <input placeholder="活动名称" ref={activitynameRef} onChange={() => setIsPrompt(true)} />
        <button type="submit">添加</button>
      </form>
    </div>
  )
}