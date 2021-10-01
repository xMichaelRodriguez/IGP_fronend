import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'

import { FooterScreen } from '../components/footer/FooterScreen'
import { ManageScreen } from '../components/manage/ManageScreen'
import { NoticeScreen } from '../components/noticies/NoticeScreen'
import { HomeProfile } from '../components/profile/HomeProfile'
import { StoryScreen } from '../components/stories/StoryScreen'
import { NavbarScreen } from '../components/UI/NavbarScreen'

export const ProfileRoute = () => {
  const routes = [
    {
      route: '/profile/home',
      title: 'Inicio',
      id: 1,
    },
    {
      route: '/profile/noticias',
      title: 'Noticias',
      id: 2,
    },
    {
      route: '/profile/historias',
      title: 'Historias de vida',
      id: 3,
    },
  ]
  return (
    <>
      <header>
        {' '}
        <NavbarScreen routes={routes} />
      </header>
      <div className='config '>
        <Switch>
          <Route
            exact
            path='/profile/mantenimiento/:token'
            component={ManageScreen}
          />
          <Route
            path='/profile/noticias'
            component={NoticeScreen}
          />
          <Route
            path='/profile/historias'
            component={StoryScreen}
          />

          <Route
            path='/profile/home'
            component={HomeProfile}
          />

          <Redirect to='/profile/home' />
        </Switch>
      </div>
      <FooterScreen className=' fixed-bottom' />
    </>
  )
}
