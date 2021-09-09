import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import './styles.css';

// import { startLogout } from '../../actions/authActios';

import logo from '../../UVS-APP.svg';

export const NavbarScreen = ({ routes }) => {
  // const dispatch = useDispatch();

  // const { name } = useSelector((state) => state.auth);
  const { sidebarOpen } = useSelector((state) => state.UI);
  const [isActiveClass, setIsActiveClass] = useState(null);

  const handleIsActive = (num) => {
    setIsActiveClass(num);
  };

  return (
    <nav id='sidebar' className={`${sidebarOpen ? 'active' : ''}`}>
      <div className='sidebar-header'>
        <h3>
          <img src={logo} className=' mx-auto d-block' alt='logo' />
        </h3>
        <strong>
          <img src={logo} width='56rem' alt='logo' />
        </strong>
      </div>

      <ul className='list-unstyled components'>
        {routes.map((r) => (
          <li className={isActiveClass === r.id ? 'active' : ''} key={r.id}>
            <NavLink to={`${r.route}`} onClick={() => handleIsActive(r.id)}>
              {r.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavbarScreen.propTypes = {
  routes: PropTypes.array.isRequired,
};
