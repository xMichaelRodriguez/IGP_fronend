import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomeScreen } from '../components/home/HomeScreen';
import { NoticeList } from '../components/UI/noticeNav/NoticeList';
import { NoticeCard } from '../components/UI/noticeNav/NoticeCard';
import { OrganizationScreen } from '../components/organizations/OrganizationScreen';
import { NavbarScreen } from '../components/UI/NavbarScreen';
import { ViolenceScreen } from '../components/violence/ViolenceScreen';
import { StoryNav } from '../components/UI/storyNav/StoryNav';
import { StoryCard } from '../components/UI/storyNav/StoryCard';
import { FooterScreen } from '../components/footer/FooterScreen';

//chatbot
import Chatbot from 'react-chatbot-kit';
import config from '../chat/config';
import MessageParser from '../chat/MessageParser';
import ActionProvider from '../chat/ActionProvider';

//icons
import { BsFillChatSquareFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseChat, uiOpenChat } from '../actions/uiActions';
import { OrganizationCard } from '../components/organizations/OrganizationCard';
import { NavbarContentScreen } from '../components/UI/NavbarContentScreen';
import { NoticeScreen } from '../components/noticies/NoticeScreen';

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
            <Route exact path='/noticias/:noticeId' component={NoticeCard} />
            <Route path='/noticias' component={NoticeScreen} />

            <Route exact path='/historias/:storyId' component={StoryCard} />
            <Route path='/historias' component={StoryNav} />

            <Route
              exact
              path='/organizaciones/:organization_acronym'
              component={OrganizationCard}
            />
            <Route path='/organizaciones' component={OrganizationScreen} />

            <Route path='/aprendizaje' component={ViolenceScreen} />

            <Route path='/' component={HomeScreen} />
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
