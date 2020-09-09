import React from 'react';
export default (props) => {
  console.log('缓缓', props)
  let activityInfo = undefined
  if (props.location.state) {
    activityInfo = props.location.state.user
  }
  if (!activityInfo) {
    let activitys = JSON.parse(localStorage.getItem('activitys') != null ? localStorage.getItem('activitys') : '[]')
    activityInfo = activitys.find(user => (user.id == props.match.params.id))
  }
  return (
    <>
      <p>{activityInfo.id}:{activityInfo.name}</p>
    </>
  )
}