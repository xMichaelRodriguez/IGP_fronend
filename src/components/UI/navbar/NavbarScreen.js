import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import '../styles.css';

import ListRoutes from '../ListRoutes';
import AuthButton from '../AuthButton';
import LogoButton from './LogoButton.jsx';
import ToggleButton from './ToggleButton.jsx';

const NavbarScreen = ({ routes }) => {
  const { name } = useSelector((state) => state.auth);

  return (
    <nav className='shadow  navbar navbar-expand-lg navbar-dark primary '>
      <div className='container-fluid'>
        <LogoButton />
        <ToggleButton />

        <div className='collapse navbar-collapse' id='navbarText'>
          <ul className='navbar-nav ml-auto mr-auto'>
            {routes.map((r) => (
              <ListRoutes
                key={r.id}
                title={r.title}
                id={r.id}
                route={r.route}
              />
            ))}
            {name !== undefined && <AuthButton key='/administrator' />}
          </ul>
        </div>
      </div>
    </nav>
  );
};

NavbarScreen.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default NavbarScreen;
