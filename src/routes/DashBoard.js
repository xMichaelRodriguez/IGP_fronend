import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// Screens
import { HomeScreen } from '../components/home/HomeScreen';
import { CardReadScreen } from '../components/UI/CardRead/CardReadScreen';
import { OrganizationScreen } from '../components/organizations/OrganizationScreen';
import { NavbarScreen } from '../components/UI/NavbarScreen';
import { ViolenceScreen } from '../components/violence/ViolenceScreen';
import { FooterScreen } from '../components/footer/FooterScreen';
import { OrganizationCard } from '../components/organizations/OrganizationCard';
import { NavbarContentScreen } from '../components/UI/NavbarContentScreen';
import { NoticeScreen } from '../components/noticies/NoticeScreen';
import { StoryScreen } from '../components/stories/StoryScreen';

//chatbot
import Chatbot from 'react-chatbot-kit';
import config from '../chat/config';
import MessageParser from '../chat/MessageParser';
import ActionProvider from '../chat/ActionProvider';

//icons
import { BsFillChatSquareFill } from 'react-icons/bs';
import { uiCloseChat, uiOpenChat } from '../actions/uiActions';

export const DashBoard = () => {
  const { ChatOpen, sidebarOpen } = useSelector((state) => state.UI);

  const dispatch = useDispatch();

  const handlerDisplayChat = () => {
    if (ChatOpen) {
      dispatch(uiCloseChat());
    } else {
      dispatch(uiOpenChat());
    }
  };

  const routes = [
    {
      route: '/home',
      title: 'Inicio',
      id: 1,
    },
    { route: '/noticias', title: 'Noticias', id: 2 },
    { route: '/historias', title: 'Historias de vida', id: 3 },
    {
      route: '/organizaciones',
      title: 'Organizaci ones',
      id: 4,
    },
    {
      route: '/aprendizaje',
      title: 'Aprendiza je',
      id: 5,
    },
  ];

  return (
    <>
      <div className='wrapper'>
        {/* SIDEBAR */}
        <NavbarScreen routes={routes} />

        {/* PAGE CONTENT */}
        <div id='content' className={`${sidebarOpen ? 'active' : ''}  container-config`}>
          <NavbarContentScreen />
          <Switch>
            <Route exact path='/noticias/:Id' component={CardReadScreen} />
            <Route path='/noticias' component={NoticeScreen} />

            <Route exact path='/historias/:Id' component={CardReadScreen} />
            <Route path='/historias' component={StoryScreen} />

            <Route
              exact
              path='/organizaciones/:organization_acronym'
              component={OrganizationCard}
            />
            <Route path='/organizaciones' component={OrganizationScreen} />

            <Route path='/aprendizaje' component={ViolenceScreen} />

            <Route path='/home' component={HomeScreen} />
            <Redirect to='/home' />
          </Switch>
          <div className="positiionn"><FooterScreen /></div>

          <button
            className='btn btn-primary cursor chat  rounded-circle animate__animated animate__rubberBand m-auto'
            onClick={handlerDisplayChat}
          >
            <BsFillChatSquareFill size='1em' />
          </button>
          
         {ChatOpen && (
         <div className="positions">
            <div
              className={` animate__animated ${!ChatOpen ? 'animate__fadeInDown' : ' animate__fadeInUp'
                }`}
            >
              <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
              />
            </div>
         </div>
          )}
        
        </div>
      </div>

    </>
  );
};
