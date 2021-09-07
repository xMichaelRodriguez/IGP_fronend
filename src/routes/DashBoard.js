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
        <Switch>
          <Route exact path='/noticies/:noticeId' component={NoticeCard} />
          <Route path='/noticies' component={NoticeList} />

          <Route exact path='/stories/:storyId' component={StoryCard} />
          <Route path='/stories' component={StoryNav} />

          <Route
            exact
            path='/organizations/:organization_acronym'
            component={OrganizationCard}
          />
          <Route path='/organizations' component={OrganizationScreen} />

          <Route path='/learning-about-violence' component={ViolenceScreen} />

          <Route path='/' component={HomeScreen} />
        </Switch>

        <div className='positions'>
          {ChatOpen && (
            <div
              className={`m-auto animate__animated ${
                !ChatOpen
                  ? 'animate__fadeInDown'
                  : ' animate__fadeInUp'
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
        className='uk-button primary cursor chat shadow animate__animated animate__rubberBand uk-margin-medium'
        style={{ borderRadius: '100%' }}
        onClick={handlerDisplayChat}
      >
        <BsFillChatSquareFill size='2rem' />
      </button>

      <FooterScreen />
    </>
  );
};
