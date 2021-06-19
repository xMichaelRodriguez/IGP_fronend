import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  BrowserRouter as HashRouter,
  Redirect,
  Switch,
} from 'react-router-dom';
import { AuthRouter } from './AuthRouter';
import { DashBoard } from './DashBoard';
import { PrivateRoutes } from './PrivateRoute';
import { ProfileRoute } from './ProfileRoute';
import { PublicRoutes } from './PublicRoutes';
import { startChecking } from '../actions/authActios';
import { WaitScreen } from '../components/wait/WaitScreen';

export const AppRouter = () => {
  const { checking, uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startChecking());
  }, [dispatch]);

  if (checking) {
    return <WaitScreen />;
  }
  return (
    <HashRouter>
      <div>
        <Switch>
          <PrivateRoutes
            isAuthenticated={!!uid}
            path='/profile'
            render={ProfileRoute}
          />
          <PublicRoutes
            isAuthenticated={!!uid}
            path='/auth'
            render={AuthRouter}
          />

          <PublicRoutes isAuthenticated={!!uid} path='/' render={DashBoard} />

          <Redirect to='/' />
        </Switch>
      </div>
    </HashRouter>
  );
};
