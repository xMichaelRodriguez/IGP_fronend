import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';

const AuthRouter = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div className=''>
        <div className=''>
          <Switch>
            <Route path='/auth/login' component={LoginScreen} />

            <Redirect to='/auth/login' />
          </Switch>
        </div>
      </div>
    </div>
  );
};
export default AuthRouter;
