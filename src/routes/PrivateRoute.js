import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router-dom';

const PrivateRoutes = ({ isAuthenticated, render: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      // render here!
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/home' />
      }
    />
  );
};

PrivateRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};
export default PrivateRoutes;
