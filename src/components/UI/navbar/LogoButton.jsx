import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../UVS-APP.svg';

const LogoButton = () => {
  return (
    <Link className='navbar-brand  rounded ' to='/'>
      <img src={logo} width='80' height='60' alt='logo' />
    </Link>
  );
};
export default LogoButton;
