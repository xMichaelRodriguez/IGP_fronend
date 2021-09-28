import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
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

          onClick={() => { history.push('/') }}
        >
          <img src={logo} className=' mx-auto d-block' alt='logo' />
        </h3>
      </div>

      <ul class="list-unstyled components">
        {
          routes.map(r => (
            <>
              {
                r.route.includes('aprendizaje')
                  ?
                  <li>
                    <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">{r.title}</a>
                    <ul class="collapse list-unstyled" id="pageSubmenu">
                      <li>
                        <Link to="/aprendizaje/derechos">Principal</Link>
                      </li>
                      <li>
                        <a href="#">Derechos</a>
                      </li>
                      <li>
                        <a href="#">Cuentos</a>
                      </li>
                      <li>
                        <a href="#">Historietas</a>
                      </li>
                    </ul>
                  </li>
                  :
                  <li className={isActiveClass === r.id ? 'active' : ''} key={r.id}>
                    <NavLink
                      className='animate__animated animate__slideInLeft'
                      to={`${r.route}`}
                      onClick={() => handleIsActive(r.id)}
                    >
                      {r.title}
                    </NavLink>
                  </li>
              }


            </>
          ))
        }

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
