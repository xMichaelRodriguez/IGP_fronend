import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/authActios'
import { Link } from 'react-router-dom'

export const AuthButton = () => {
  const { name } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(startLogout())
  }
  if (name) {
    return (
      <>
        <li class='nav-item dropdown'>
          <spam
            class='nav-link dropdown-toggle'
            style={{ cursor: 'pointer' }}
            role='button'
            data-toggle='dropdown'
            aria-haspopup='true'
            aria-expanded='false'
          >
            Administrador
          </spam>
          <div
            class='dropdown-menu'
            aria-labelledby='navbarDropdownMenuLink'
          >
            <Link class='dropdown-item' to='/profile/home'>
              Perfil
            </Link>

            <Link
              class=' btn btn-sm btn-secondary d-flex justify-content-center m-2'
              to='/'
              onClick={handleLogout}
            >
              cerrar Sesion
            </Link>
          </div>
        </li>
      </>
    )
  } else {
    return ''
  }
}
