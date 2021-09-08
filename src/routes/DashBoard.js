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
  const { ChatOpen } = useSelector((state) => state.UI);
  const dispatch = useDispatch();

  const handlerDisplayChat = () => {
    if (ChatOpen) {
      dispatch(uiCloseChat());
    } else {
      dispatch(uiOpenChat());
    }
  };
  return (
    <>
      <div className='wrapper'>
        <NavbarScreen />
        <div id='content'>
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
        </div>

        <div className='positions'>
          {ChatOpen && (
            <div
              className={`m-auto animate__animated ${
                !ChatOpen ? 'animate__fadeInDown' : ' animate__fadeInUp'
              }`}
            >
              <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
              />
            </div>
          )}
        </div>
      </div>
      <button
        className='btn btn-primary cursor chat  rounded-circle animate__animated animate__rubberBand m-auto'
        onClick={handlerDisplayChat}
      >
        <BsFillChatSquareFill size='1.8rem' />
      </button>

      <FooterScreen />
    </>
  );
};
