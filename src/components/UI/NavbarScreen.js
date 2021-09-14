import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import './styles.css';

// import { startLogout } from '../../actions/authActios';

import logo from '../../UVS-APP.svg';

export const NavbarScreen = ({ routes }) => {
  const history = useHistory();

  const { sidebarOpen } = useSelector((state) => state.UI);
  const { name } = useSelector((state) => state.auth);
  const [isActiveClass, setIsActiveClass] = useState(null);

  const handleIsActive = (num) => {
    setIsActiveClass(num);
  };

  return (
    <nav id='sidebar' className={`${sidebarOpen ? 'active' : ''}`}>
      <div className='sidebar-header'>
        <h3
          className='animate__animated animate__zoomIn'
          
          onClick={()=>{history.push('/')}}
        >
          <img src={logo} className=' mx-auto d-block' alt='logo' />
        </h3>
        
        <strong onClick={()=>{history.push('/')}}>
          <img src={logo} width='56rem' alt='logo' />
        </strong>
      </div>

      <ul className='list-unstyled components'>
        {routes.map((r) => (
          <li className={isActiveClass === r.id ? 'active' : ''} key={r.id}>
            <NavLink
              className='animate__animated animate__slideInLeft'
              to={`${r.route}`}
              onClick={() => handleIsActive(r.id)}
            >
              {r.title}
            </NavLink>
          </li>
        ))}
      </ul>
      {!name && (
        <ul className='list-unstyled CTAs '>
          <li className=''>
            <NavLink
              className='animate__animated animate__slideInLeft'
              to='/auth'
            >
              Administrador
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

NavbarScreen.propTypes = {
  routes: PropTypes.array.isRequired,
};
