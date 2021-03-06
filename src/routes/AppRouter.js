import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AuthRouter from './AuthRouter';
import DashBoard from './DashBoard';
import PrivateRoutes from './PrivateRoute';
import ProfileRoute from './ProfileRoute';
import PublicRoutes from './PublicRoutes';
import { startChecking } from '../actions/authActios';
import WaitScreen from '../components/wait/WaitScreen';
import { noticeStartLoading } from '../actions/noticesActions';
import { storyForCarouselLoading, storyStartLoading } from '../actions/events';
import orgStartLoading from '../actions/orgActions';
import { commicStartLoading } from '../actions/commicsActions';
import { startLoadingForumUser } from '../actions/forumsAction';

const AppRouter = () => {
  const { checking, uid } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startChecking());
    dispatch(orgStartLoading());
    dispatch(startLoadingForumUser());
    dispatch(noticeStartLoading({}));
    dispatch(storyStartLoading({}));
    dispatch(storyForCarouselLoading({}));
    dispatch(commicStartLoading({}));
  }, [dispatch]);

  if (checking) {
    return <WaitScreen />;
  }
  return (
    <Router>
      <div className='animate__animated animate__fadeIn '>
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
          <Route exact path='/.well-known/assetlinks.json' />
          <Route path='/' component={DashBoard} />
        </Switch>
      </div>
    </Router>
  );
};
export default AppRouter;
