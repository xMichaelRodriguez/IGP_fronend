import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
export const ListRoutesLearn = ({ title, id }) => {
  return (
    <li className='nav-item dropdown px-2' key={id}>
      <Link
        to='/#'
        data-toggle='collapse'
        aria-expanded='false'
        id='navbarDropdownMenuLink'
        role='button'
        className='nav-link dropdown-toggle'
        data-toggle='dropdown'
        aria-haspopup='true'
        aria-expanded='false'
      >
        {title}
      </Link>
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
}

ListRoutesLearn.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
