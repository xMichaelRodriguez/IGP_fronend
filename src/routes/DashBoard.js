import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { HomeScreen } from "../components/home/HomeScreen";
import { NoticeScreen } from "../components/noticies/NoticeScreen";
import { OrganizationScreen } from "../components/organizations/OrganizationScreen";
import { StoryScreen } from "../components/stories/StoryScreen";
import { NavbarScreen } from "../components/UI/NavbarScreen";
import { ViolenceScreen } from "../components/violence/ViolenceScreen";

//chatbot
import Chatbot from "react-chatbot-kit";
import config from "../chat/config";
import MessageParser from "../chat/MessageParser";
import ActionProvider from "../chat/ActionProvider";

//icons
import { BsFillChatSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { uiCloseChat, uiOpenChat } from "../actions/uiActions";
import { noticeStartLoading } from "../actions/noticesActions";
import { storyStartLoading } from "../actions/events";

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
      <div className="container">
        <Switch>
          <Route path="/noticies" component={NoticeScreen} />

          <Route path="/stories" component={StoryScreen} />

          <Route path="/organizations" component={OrganizationScreen} />
          <Route path="/learning-about-violence" component={ViolenceScreen} />

          <Route path="/" component={HomeScreen} />
        </Switch>

        <div className="positions">
          {ChatOpen && (
            <div
              className={`mb-3 animate__animated ${
                ChatOpen === false
                  ? "animate__fadeInDown"
                  : " animate__fadeInUp"
              }`}
            >
              <Chatbot
                config={config}
                actionProvider={ActionProvider}
                messageParser={MessageParser}
              />
            </div>
          )}

          <button
            className="btn primary mt-2 rounded-circle cursor chat shadow animate__animated animate__rubberBand"
            onClick={handlerDisplayChat}
          >
            <BsFillChatSquareFill size="2rem" />
          </button>
        </div>
      </div>
    </>
  );
};
