import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const ListRoutes = ({ title, id, route }) => {
  const [isActiveClass, setIsActiveClass] = useState(null)

  const handleIsActive = (num) => {
    setIsActiveClass(num)
  }
  return (
    <li
      className={
        'nav-item ' + isActiveClass === id
          ? 'activeNav '
          : ''
      }
    >
      <NavLink
        className='nav-link px-2'
        to={`${route}`}
        onClick={() => handleIsActive(id)}
      >
        {title}
      </NavLink>
    </li>
  )
}
