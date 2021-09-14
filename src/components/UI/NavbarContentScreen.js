import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseSide, uiOpenSide } from '../../actions/uiActions';

import { AuthButton } from './AuthButton';
export const NavbarContentScreen = () => {
  const { sidebarOpen } = useSelector((state) => state.UI);

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

        <AuthButton />
      </div>
    </nav>
  );
};
