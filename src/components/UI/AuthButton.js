import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startLogout } from '../../actions/authActios';

const AuthButton = () => {
  const { name } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(startLogout());
  };
  if (name) {
    return (
      <li className='nav-item dropdown'>
        <span
          className='nav-link dropdown-toggle'
          style={{ cursor: 'pointer' }}
          role='button'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
        >
          Administrador
        </span>
        <div className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
          <Link className='dropdown-item' to='/profile/home'>
            Perfil
          </Link>
          <Link className='dropdown-item' to='/'>
            volver al inicio
          </Link>

          <Link
            className=' btn btn-sm primary d-flex justify-content-center m-2'
            to='/'
            onClick={handleLogout}
          >
            cerrar Sesion
          </Link>
        </div>
      </li>
    );
  }
  return '';
};
export default AuthButton;
