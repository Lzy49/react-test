import React, { useRef } from 'react'
export default (props) => {
  console.log(props)
  let activitynameRef = useRef()
  const handleSubmit = (e) => {
    e.preventDefault();
    let activitys = localStorage.getItem('activitys') ? JSON.parse(localStorage.getItem('activitys')) : []
    activitys.push({
      id: new Date().getTime(),
      name: activitynameRef.current.value
    })
    localStorage.setItem('activitys', JSON.stringify(activitys))
    props.history.push('/activity/list')
  }
  return (
    <div className="activity-add">
      <p>ActivityAdd</p>
      <form onSubmit={handleSubmit} method="get">
        <input placeholder="活动名称" ref={activitynameRef} />
        <button type="submit">添加</button>
      </form>
    </div>
  )
}