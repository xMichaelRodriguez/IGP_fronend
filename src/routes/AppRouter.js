import React from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { DashBoard } from "./DashBoard";
import { PrivateRoutes } from "./PrivateRoute";
import { ProfileRoute } from "./ProfileRoute";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
  const isLogged = "Michael Rodriguez";
  return (
    <Router>
      <div>
        <Switch>
          <PrivateRoutes
            isAuthenticated={!!isLogged}
            path="/profile"
            render={ProfileRoute}
          />
          <PublicRoutes
            isAuthenticated={!!isLogged}
            path="/auth"
            render={AuthRouter}
          />

          <PublicRoutes
            isAuthenticated={!!isLogged}
            path="/"
            render={DashBoard}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
