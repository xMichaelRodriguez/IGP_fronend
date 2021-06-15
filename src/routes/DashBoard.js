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
      <NavbarScreen />
      <div className='container-fluid px-3 mb-3 '>
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

          <Route exact path='/' component={HomeScreen} />
        </Switch>

        <div className='positions'>
          {ChatOpen && (
            <div
              className={`mb-5 animate__animated ${
                ChatOpen === false
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
        className='btn primary mt-2 rounded-circle cursor chat shadow animate__animated animate__rubberBand mb-3'
        onClick={handlerDisplayChat}
      >
        <BsFillChatSquareFill size='2rem' />
      </button>

      <FooterScreen />
    </>
  );
};
