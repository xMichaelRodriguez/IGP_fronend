import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/authActios';
import { Link } from 'react-router-dom';
import { FaAlignJustify, FaAngleDown } from 'react-icons/fa';

export const AuthButton = () => {
  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  if (name) {
    return (
      <>
        <button
          className='btn btn-secondary d-inline-block d-lg-none ml-auto'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <FaAlignJustify />
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <div className='btn-group ml-auto mt-3'>
            <button
              type='button'
              className='btn btn-light '
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Administrador <FaAngleDown size='1rem' />
            </button>
            <div className='dropdown-menu dropdown-menu-right'>
              <Link className='dropdown-item' to='/profile/'>
                Profile
              </Link>
              <button className='dropdown-item' onClick={handleLogout}>
                Cerrar Sesion
              </button>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return '';
  }
};
