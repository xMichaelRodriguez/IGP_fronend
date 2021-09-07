import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../UVS-APP.svg';

import { BiMenuAltLeft } from 'react-icons/bi';
import { StoryScreen } from '../stories/StoryScreen';
import { BsArrowRight } from 'react-icons/bs';
import { NoticeScreen } from '../noticies/NoticeScreen';
import { OrganizationScreen } from '../organizations/OrganizationScreen';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseSide, uiOpenSide } from '../../actions/uiActions';
export const HomeScreen = () => {
  const { sidebarOpen } = useSelector((state) => state.UI);
  const { noticies } = useSelector((state) => state.notice);
  const { stories } = useSelector((state) => state.story);

  const dispatch = useDispatch();

  const handleToggleSideBar = () => {
    if (sidebarOpen) {
      dispatch(uiCloseSide());
    } else {
      dispatch(uiOpenSide());
    }
  };

  const ToggleMenu = () => {
    return (
      <div>
        <BiMenuAltLeft size='1rem' /> Menu
      </div>
    );
  };

  return (
    <div id='content'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <button
            type='button'
            id='sidebarCollapse'
            className='btn primary--button'
            onClick={handleToggleSideBar}
          >
            <ToggleMenu />
          </button>

          {/* <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='nav navbar-nav ml-auto'>
              <li className='nav-item active'>
                <a className='nav-link' href='/#'>
                  Page
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/#'>
                  Page
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/#'>
                  Page
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='/#'>
                  Page
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </nav>

      <section className='row'>
        <div className='col-md-12 my-auto'>
          <h2>Una Vida Segura (UVS)</h2>
          <p className='text-justify text-dark'>
            Es una Web App y App Móvil educativa que surge, para dar respuesta
            de forma organizada a la realidad salvadoreña de violencia en los
            niños, niñas y adolescentes, y la necesidad de trabajar de la mano
            con MINEDUCYT, CONNA para llevar información sobre la violencia a la
            vida de los niños, niñas y adolescentes, buscando así poder ayudar
            en la vida de ellos con el acceso a la información importante de los
            casos de violencia que podrían vivir y como podrían salir de ello.
          </p>
          <p className='text-dark'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </section>

      <div className='line'></div>

      <h3 className='d-flex justify-content-center'>Ultimas Noticias</h3>
      <section className='row'>
        {Object.entries(noticies.noticeArr).length !== 0 &&
          noticies.noticeArr.map((n) => (
            <div className='col-md-4' key={n.id}>
              <div className='card mb-3'>
                {/* <img src='...' className='card-img-top' alt='...' /> */}
                <div className='card-body'>
                  <h5 className='card-title'>{n.title}</h5>
                  <p className='card-text'>{n.body.substr(0, 140)}...</p>
                  <Link to={`/noticies/${n.id}`} className='btn btn-link'>
                    Leer Ahora
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </section>

      <div className='line'></div>

      <h3 className='d-flex justify-content-center'>Ultimas Historias de vida</h3>
      <section className='row'>
        {Object.entries(stories.storyArr).length !== 0 &&
          noticies.noticeArr.map((s) => (
            <div className='col-md-4' key={s.id}>
              <div className='card mb-3'>
                {/* <img src='...' className='card-img-top' alt='...' /> */}
                <div className='card-body'>
                  <h5 className='card-title'>{s.title}</h5>
                  <p className='card-text'>{s.body.substr(0, 140)}...</p>
                  <Link to={`/noticies/${s.id}`} className='btn btn-link'>
                    Leer Ahora
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </section>


      <div className='line'></div>

      <h2>Lorem Ipsum Dolor</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div className='line'></div>

      <h3>Lorem Ipsum Dolor</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
};
