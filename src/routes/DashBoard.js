import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Screens
import { HomeScreen } from '../components/home/HomeScreen';
import { CardReadScreen } from '../components/UI/CardRead/CardReadScreen';
import { OrganizationScreen } from '../components/organizations/OrganizationScreen';
import { OrganizationCard } from '../components/organizations/OrganizationCard';
import { NoticeScreen } from '../components/noticies/NoticeScreen';
import { StoryScreen } from '../components/stories/StoryScreen';
import { CuentosView } from '../components/library/CuentosView';
import { CommicsScreen } from '../components/commics/CommicsScreen';

import { NavbarScreen } from '../components/UI/navbar/NavbarScreen';
import { ButtonScrollToTop } from '../components/UI/ButtonScrollToTop';
import { ChatBotButton } from '../components/UI/ChatBotButton';
import { FooterScreen } from '../components/footer/FooterScreen';
import { CommicScreen } from '../components/commics/CommicScreen';
import { SearchScreen } from '../components/search/SearchScreen';


export const DashBoard = () => {
  const routes = [
    {
      route: '/',
      title: 'Inicio',
      id: 1,
    },
    { route: '/noticias', title: 'Noticias', id: 2 },
    {
      route: '/historias',
      title: 'Historias de vida',
      id: 3,
    },

    {
      route: '/organizaciones',
      title: 'Organizaciones',
      id: 4,
    },

    {
      route: '/biblioteca',
      title: 'Biblioteca',
      id: 5,
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
            path='/noticias/:Id'
            component={CardReadScreen}
          />
          <Route
            path='/noticias'
            component={NoticeScreen}
          />

          <Route
            exact
            path='/historias/:Id'
            component={CardReadScreen}
          />
          <Route
            path='/historias'
            component={StoryScreen}
          />

          <Route
            exact
            path='/organizaciones/:organization_acronym'
            component={OrganizationCard}
          />
          <Route
            path='/organizaciones'
            component={OrganizationScreen}
          />

          <Route
            path='/biblioteca/cuentos'
            component={CuentosView}
          />

          <Route
            exact
            path='/biblioteca/commics/:commicId'
            component={CommicScreen}
          />
          <Route
            path='/biblioteca/commics'
            component={CommicsScreen}
          />
          <Route
            path='/biblioteca'
            component={SearchScreen}
          />


          <Route path='/' component={HomeScreen} />
          <Redirect to='/' />
        </Switch>
      </div>
      <FooterScreen />
      <ButtonScrollToTop />
      <ChatBotButton />
    </>
  );
};
