import React, { useEffect, useState } from 'react'
export default () => {
  const [list, setList] = useState([])
  useEffect(() => {
    setList(JSON.parse(localStorage.getItem('activitys')))
  }, [])
  return (
    <>
      <div>ActivityList</div>
      <ul className="activity-list">
        {
          list.map(item => (<li key={item.id}>{item.name}</li>))
        }
      </ul>
    </>
  )
}