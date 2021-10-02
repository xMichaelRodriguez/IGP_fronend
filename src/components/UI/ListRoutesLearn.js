import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
export const ListRoutesLearn = ({ title, route }) => {
  return (
    route.includes('aprendizaje') && (
      <li className='nav-item dropdown px-2'>
        <span
          aria-expanded='false'
          id='navbarDropdownMenuLink'
          role='button'
          className='nav-link dropdown-toggle'
          style={{ cursor: 'pointer' }}
          data-toggle='dropdown'
          aria-haspopup='true'
        >
          {title}
        </span>
        <div
          className='dropdown-menu'
          aria-labelledby='navbarDropdownMenuLink'
        >
          <Link
            className='dropdown-item'
            to='/aprendizaje/derechos'
          >
            Derechos
          </Link>
          <Link
            className='dropdown-item'
            to='/aprendizaje/cuentos'
          >
            Cuentos
          </Link>

          <Link
            className='dropdown-item'
            to='/aprendizaje/historietas'
          >
            Historietas
          </Link>
        </div>
      </li>
    )
  )
}

ListRoutesLearn.propTypes = {
  title: PropTypes.string.isRequired,
}
