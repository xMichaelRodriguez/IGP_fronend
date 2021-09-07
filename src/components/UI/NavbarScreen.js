import React, { useEffect, useRef } from 'react';
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
import logo from '../UVS-APP.svg';

export const NavbarScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { name } = useSelector((state) => state.auth);
  const { sidebarOpen } = useSelector((state) => state.UI);

  return (
    <nav id='sidebar' className={`${sidebarOpen ? 'active' : ''}`}>
      <div className='sidebar-header'>
        <h3>
         Una Vida Segura
        </h3>
        <strong>UVS</strong>
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
        <li className='active'>
          <a href='/#'>
            <BiHomeAlt size='1.3rem' />
            &nbsp; <span>Inicio</span>
          </a>
        </li>
        <li className=''>
          <a href='/#'>
            <BiUserVoice size='1.3rem' />
            &nbsp;<span>Historias de vida</span>
          </a>
        </li>

        <li>
          <a href='/#'>
            <BiNews size='1.3rem' />
            &nbsp;<span>Noticias</span>
          </a>
        </li>
        <li className='text-break'>
          <a href='/#'>
            <BiGroup size='1.3rem' />
            &nbsp;<span>Organizaciones</span>
          </a>
        </li>
        <li>
          <a href='/#'>
            <BiBook size='1.3rem' />
            &nbsp;<span>Aprendizaje</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
