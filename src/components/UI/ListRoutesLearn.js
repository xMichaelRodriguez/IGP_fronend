import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
export const ListRoutesLearn = ({ title, route }) => {
  return (
    route.includes('biblioteca') && (
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
            to='/biblioteca/derechos'
          >
            Derechos
          </Link>
          <Link
            className='dropdown-item'
            to='/biblioteca/cuentos'
          >
            Cuentos
          </Link>


        </div>
      </li>
    )
  );
};

ListRoutesLearn.propTypes = {
  title: PropTypes.string.isRequired,
};
