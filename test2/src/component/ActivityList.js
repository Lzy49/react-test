import React, { useEffect, useState } from 'react'
import { Link } from '../react-router-dom'
export default () => {
  const [list, setList] = useState([])
  useEffect(() => {
    setList(
      JSON.parse(
        localStorage.getItem('activitys') != null ? localStorage.getItem('activitys') : '[]'
      )
    )
  }, [])
  return (
    <>
      <div>ActivityList</div>
      <ul className="activity-list">
        {
          list.map(item => (<li key={item.id}><Link to={{ pathname: `/activity/detail/${item.id}`, state: { user: item } }} >{item.name}</Link></li>))
        }
      </ul>
    </>
  )
}