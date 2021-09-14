import React from "react";
import PropTypes from "prop-types";

import { Route } from "react-router-dom";

export const PublicRoutes = ({
  isAuthenticated,
  render: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      // render here!
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Component {...props} />
      }
    />
  );
};

PublicRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  render: PropTypes.func.isRequired,
};
