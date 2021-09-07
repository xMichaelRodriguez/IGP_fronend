import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseSide, uiOpenSide } from '../../actions/uiActions';

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
  );
};
