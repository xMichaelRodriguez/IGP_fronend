import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import '../styles.css'

import { ListRoutesLearn } from '../ListRoutesLearn'
import { ListRoutes } from '../ListRoutes'
import { AuthButton } from '../AuthButton'
import { LogoButton } from './LogoButton'
import { ToggleButton } from './ToggleButton'

export const NavbarScreen = ({ routes }) => {
  const { name } = useSelector((state) => state.auth)

  return (
    <nav className='shadow-sm  navbar navbar-expand-lg navbar-dark primary '>
      <div className='container'>
        <LogoButton />
        <ToggleButton />

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
                    route={r.route}
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