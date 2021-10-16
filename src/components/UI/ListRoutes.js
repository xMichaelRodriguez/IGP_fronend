import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useLocation } from 'react-use'

export const ListRoutes = ({ title, id, route }) => {
  const location = useLocation().pathname

  return (
    <li
      className={
        `nav-item ${location === route ? "active" : ""}`
      }
    >
      <NavLink
        className='nav-link px-2'
        to={`${route}`}

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
