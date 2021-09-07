import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link, useHistory } from 'react-router-dom';
import './styles.css';
import {
  BiNews,
  BiUserVoice,
  BiHomeAlt,
  BiGroup,
  BiBook,
} from 'react-icons/bi';
import { startLogout } from '../../actions/authActios';

import logo from '../../UVS-APP.svg';

export const NavbarScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { name } = useSelector((state) => state.auth);
  const { sidebarOpen } = useSelector((state) => state.UI);
  const [isActiveClass, setIsActiveClass] = useState(null);

  const handleIsActive = (num) => {
    console.log(num);
    setIsActiveClass(num);
  };

  return (
    <nav id='sidebar' className={`${sidebarOpen ? 'active' : ''}`}>
      <div className='sidebar-header'>
        <h3>
          <img src={logo} className=' mx-auto d-block' />
        </h3>
        <strong>
          <img src={logo} width='56rem' />
        </strong>
      </div>

      <ul className='list-unstyled components'>
        {/* <li className='active'>
          <a
            href='#homeSubmenu'
            data-toggle='collapse'
            aria-expanded='false'
            className='dropdown-toggle'
          >
            <i className='fas fa-home'></i>
            Inicio
          </a>
          <ul className='collapse list-unstyled' id='homeSubmenu'>
            <li>
              <a href='/#'>Home 1</a>
            </li>
            <li>
              <a href='/#'>Home 2</a>
            </li>
            <li>
              <a href='/#'>Home 3</a>
            </li>
          </ul>
        </li> */}
        <li className={isActiveClass === 0 ? 'active' : ''}>
          <NavLink to='/' onClick={() => handleIsActive(0)}>
            <BiHomeAlt size='1.3rem' />
            &nbsp; <span>Inicio</span>
          </NavLink>
        </li>
        <li className={isActiveClass === 1 ? 'active' : ''}>
          <NavLink onClick={() => handleIsActive(1)} to='/historias'>
            <BiUserVoice size='1.3rem' />
            &nbsp;<span>Historias de vida</span>
          </NavLink>
        </li>

        <li className={isActiveClass === 2 ? 'active' : ''}>
          <NavLink onClick={() => handleIsActive(2)} to='/noticias'>
            <BiNews size='1.3rem' />
            &nbsp;<span>Noticias</span>
          </NavLink>
        </li>
        <li className={isActiveClass === 3 ? 'active' : ''}>
          <NavLink onClick={() => handleIsActive(3)} to='/organizaciones'>
            <BiGroup size='1.3rem' />
            &nbsp;<span>Organizaciones</span>
          </NavLink>
        </li>
        <li className={isActiveClass === 4 ? 'active' : ''}>
          <NavLink
            onClick={(location) => handleIsActive(4, location)}
            to='/aprendizaje'
          >
            <BiBook size='1.3rem' />
            &nbsp;<span>Aprendizaje</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
