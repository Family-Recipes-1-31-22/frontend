import React from "react";
import { Route, Redirect } from "react-router-dom";
function PrivateRoute(props) {
  const { component: Component, ...rest } = props;

  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          return <Component />;
        } else {
          return <Redirect to="/signup" />;
        }
      }}
    />
  );
}

export default PrivateRoute;
