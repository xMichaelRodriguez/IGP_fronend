import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { EditNotice } from "../components/profile/notice/EditNotice";
import { NewNotice } from "../components/profile/notice/NewNotice";
import { EditStory } from "../components/profile/story/EditStory";
import { NewStory } from "../components/profile/story/NewStory";
import { StoryScreen } from "../components/profile/story/StoryScreen";
import { NavbarProfile } from "../components/UI/NavbarProfile";

export const ProfileRoute = () => {
  return (
    <>
      <NavbarProfile />
      <div className="container ">
        <Switch>
          <Route exact path="/profile/noticies" component={NewNotice} />
          <Route exact path="/profile/new-notice" component={NewNotice} />
          <Route exact path="/profile/edit-notice" component={EditNotice} />

          <Route exact path="/profile/stories" component={StoryScreen} />
          <Route exact path="/profile/new-story" component={NewStory} />
          <Route exact path="/profile/edit-story" component={EditStory} />

          <Redirect exact to="/profile" />
        </Switch>
      </div>
    </>
  );
};
