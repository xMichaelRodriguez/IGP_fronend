import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export const ListRoutes = ({ title, id, route }) => {
  const [isActiveClass, setIsActiveClass] = useState(null)

  const handleIsActive = (num) => {
    setIsActiveClass(num)
  }
  return (
    <li
      className={
        'nav-item ' + isActiveClass === route
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
ListRoutes.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  route: PropTypes.string.isRequired,
}
