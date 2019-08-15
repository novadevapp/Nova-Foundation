import React from "react";
import { Route, Redirect } from "react-router-dom";

function SecureRoutes({ component: Component, Auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (Auth === true) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
}

export default SecureRoutes;
