import React from "react";
import { Route, Switch } from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { HomeScreen } from "../components/home/HomeScreen";
import { NoticeScreen } from "../components/noticies/NoticeScreen";
import { OrganizationScreen } from "../components/organizations/OrganizationScreen";
import { StoryScreen } from "../components/stories/StoryScreen";
import { NavbarScreen } from "../components/UI/NavbarScreen";
import { ViolenceScreen } from "../components/violence/ViolenceScreen";

export const DashBoard = () => {
  return (
    <>
      <NavbarScreen />
      <div>
        <Switch>
          <Route path="/noticies" component={NoticeScreen} />

          <Route path="/stories" component={StoryScreen} />

          <Route path="/organizations" component={OrganizationScreen} />
          <Route path="/learning-about-violence" component={ViolenceScreen} />

          <Route path="/" component={HomeScreen} />
        </Switch>
      </div>
    </>
  );
};
