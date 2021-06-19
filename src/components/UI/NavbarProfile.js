import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/authActios';
import './styles.css';
import logo from '../UVS-APP.svg';
import { FaSignOutAlt } from 'react-icons/fa';
export const NavbarProfile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);
  return (
    <>
      <header>
        <nav
          className='uk-navbar uk-navbar-container primary '
          style={{ height: '100px' }}
          uk-navbar=''
        >
          <div className='uk-navbar-left'>
            <ul className='uk-navbar-nav'>
              <li className=''>
                <Link to='#' style={{ height: '100px' }}>
                  <img src={logo} className='uk-height-small ' alt='UVS' />
                </Link>
              </li>
            </ul>
          </div>
          <div className='uk-navbar-left'>
            <ul className='uk-navbar-nav uk-visible@s'>
              <li className='uk-text-large '>
                <NavLink
                  activeClassName='uk-active'
                  className=' uk-text-capitalize'
                  to='/'
                >
                  Home
                </NavLink>
              </li>
              <li className='uk-text-large'>
                <NavLink
                  activeClassName='uk-active'
                  className=' uk-text-capitalize'
                  to='/profile/noticies'
                >
                  Noticias
                </NavLink>
              </li>
              <li className='uk-text-large'>
                <NavLink
                  activeClassName='uk-active'
                  className=' uk-text-capitalize'
                  to='/profile/stories'
                >
                  Historias
                </NavLink>
              </li>
            </ul>
          </div>

          <div className='uk-nav uk-navbar-right'>
            <ul className='uk-navbar-nav uk-visible@s'>
              <li>
                <NavLink
                  activeClassName='uk-active'
                  to='#'
                  className='uk-text-large'
                >
                  {name}
                </NavLink>

                <div
                  className='uk-navbar-dropdown uk-shadow'
                  uk-drop='mode: click'
                >
                  <ul className='uk-nav uk-navbar-dropdown-nav'>
                    <li>
                      <NavLink
                        activeClassName='uk-active'
                        to='#'
                        onClick={() => dispatch(startLogout())}
                        className='uk-nav-header'
                      >
                        <FaSignOutAlt /> Cerrar Sesion
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            <div className='uk-navbar-right'>
              <NavLink
                activeClassName='uk-active'
                to='#'
                className='uk-navbar-toggle uk-hidden@s'
                uk-navbar-toggle-icon=''
                uk-toggle='target: #sidenav'
              ></NavLink>
            </div>
          </div>
        </nav>
      </header>

      <div id='sidenav' uk-offcanvas='flip: true' className='uk-offcanvas'>
        <div className='uk-offcanvas-bar'>
          <ul className='uk-nav'>
            <li className='uk-text-large'>
              <NavLink
                activeClassName='uk-active'
                className=' uk-text-capitalize'
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li className='uk-text-large'>
              <NavLink
                activeClassName='uk-active'
                className=' uk-text-capitalize'
                to='/noticies'
              >
                Noticias
              </NavLink>
            </li>
            <li className='uk-text-large'>
              <NavLink
                activeClassName='uk-active'
                className=' uk-text-capitalize'
                to='/stories'
              >
                Historias
              </NavLink>
            </li>
            <li className='uk-text-large'>
              <NavLink
                activeClassName='uk-active'
                className=' uk-text-capitalize'
                to='/organizations'
              >
                Organizaciones
              </NavLink>
            </li>
            <li className='uk-text-large'>
              <NavLink
                activeClassName='uk-active'
                className=' uk-text-capitalize'
                to='learning-about-violence'
              >
                Aprendizaje
              </NavLink>
            </li>
            <li className='uk-text-large'>
              <NavLink
                activeClassName='uk-active'
                className=' uk-text-capitalize'
                to='learning-about-violence'
              >
                Aprendizaje
              </NavLink>
            </li>

            <li className='uk-text-large '>
              <NavLink
                activeClassName='uk-active'
                to='/auth/login'
                onClick={() => history.push('/auth/login')}
                className=' uk-text-capitalize uk-text-large'
              >
                Iniciar Sesion
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
