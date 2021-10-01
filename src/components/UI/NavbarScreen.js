import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './styles.css'

import logo from '../../UVS-APP.svg'
import { ListRoutesLearn } from './ListRoutesLearn'
import { ListRoutes } from './ListRoutes'
import { AuthButton } from './AuthButton'

export const NavbarScreen = ({ routes }) => {
  const { name } = useSelector((state) => state.auth)

  return (
    <nav className='shadow-sm  navbar navbar-expand-lg navbar-dark primary '>
      <div className='container'>
        <Link
          className='navbar-brand border border-dark rounded bg-dark'
          to='/'
        >
          <img
            src={logo}
            width='80'
            height='70'
            alt='logo'
          />
        </Link>
        <button
          className='navbar-toggler btn'
          type='button'
          data-toggle='collapse'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div
          className='collapse navbar-collapse'
          id='navbarText'
        >
          <ul className='navbar-nav ml-auto'>
            {routes.map((r) => (
              <>
                {r.route.includes('aprendizaje') ? (
                  <ListRoutesLearn
                    key={r.id}
                    title={r.title}
                  />
                ) : (
                  <ListRoutes
                    key={r.id}
                    title={r.title}
                    id={r.id}
                    route={r.route}
                  />
                )}
              </>
            ))}
            {name !== undefined && (
              <AuthButton key='/administrator' />
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

NavbarScreen.propTypes = {
  routes: PropTypes.array.isRequired,
}
