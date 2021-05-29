import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { FooterScreen } from "../components/footer/FooterScreen";
import { HomeProfile } from "../components/profile/HomeProfile";

import { NewNotice } from "../components/profile/notice/NewNotice";
import { NoticeSchreen } from "../components/profile/notice/NoticeSchreen";
import { NewStory } from "../components/profile/story/NewStory";
import { StoryScreen } from "../components/profile/story/StoryScreen";
import { NavbarProfile } from "../components/UI/NavbarProfile";

export const ProfileRoute = () => {
  return (
    <>
      <NavbarProfile />
      <div className="container ">
        <Switch>
          <Route exact path="/profile" component={HomeProfile} />
          <Route exact path="/profile/noticies" component={NoticeSchreen} />
          <Route exact path="/profile/manage-notice" component={NewNotice} />

          <Route exact path="/profile/stories" component={StoryScreen} />
          <Route exact path="/profile/manage-story" component={NewStory} />

          <Redirect exact to="/profile" />
        </Switch>
      </div>
      <FooterScreen />
    </>
  );
};
