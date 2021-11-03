import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CommicsScreen from '../components/commics/CommicsScreen.jsx';
import CreateCommic from '../components/commics/CreateCommic.jsx';

import FooterScreen from '../components/footer/FooterScreen';
import ManageScreen from '../components/manage/ManageScreen';
import NoticeScreen from '../components/noticies/NoticeScreen';
import HomeProfile from '../components/profile/HomeProfile';
import StoryScreen from '../components/stories/StoryScreen';
import NavbarScreen from '../components/UI/navbar/NavbarScreen';

const ProfileRoute = () => {
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
    {
      route: '/profile/commics',
      title: 'Commics',
      id: 4,
    },
  ];
  return (
    <>
      <header>
        <NavbarScreen routes={routes} />
      </header>
      <div className='config'>
        <Switch>
          <Route
            exact
            path='/profile/mantenimiento/:token'
            component={ManageScreen}
          />
          <Route path='/profile/noticias' component={NoticeScreen} />
          <Route path='/profile/historias' component={StoryScreen} />
          <Route
            exact
            path='/profile/commics/crearCommic'
            component={CreateCommic}
          />
          <Route path='/profile/commics' component={CommicsScreen} />

          <Route path='/profile/home' component={HomeProfile} />

          <Redirect to='/profile/home' />
        </Switch>
      </div>
      <FooterScreen className=' fixed-bottom' />
    </>
  );
};
export default ProfileRoute;
