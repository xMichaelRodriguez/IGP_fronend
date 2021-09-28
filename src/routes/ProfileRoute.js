import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FooterScreen } from '../components/footer/FooterScreen';
import { ManageScreen } from '../components/manage/ManageScreen';
import { NoticeScreen } from '../components/noticies/NoticeScreen';
import { HomeProfile } from '../components/profile/HomeProfile';
import { StoryScreen } from '../components/stories/StoryScreen';

import { NavbarContentScreen } from '../components/UI/NavbarContentScreen';
import { NavbarScreen } from '../components/UI/NavbarScreen';

export const ProfileRoute = () => {
  const {sidebarOpen } = useSelector((state) => state.UI);
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
  ];
  return (
    <>
      <div className='wrapper'>
        <NavbarScreen routes={routes} />
        <div id='content' className={`${sidebarOpen ? 'active' : ''}  container-config`}>
          <NavbarContentScreen />
          <Switch>
            <Route
              exact
              path='/profile/mantenimiento/:token'
              component={ManageScreen}
            />
            <Route path='/profile/noticias' component={NoticeScreen} />
            <Route path='/profile/historias' component={StoryScreen} />

            <Route path='/profile/home' component={HomeProfile} />

            <Redirect to='/profile/home' />
          </Switch>
      <FooterScreen />
        </div>
      </div>
    </>
  );
};
