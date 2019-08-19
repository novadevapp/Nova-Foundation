import React from "react";
import { Route, Redirect } from "react-router-dom";

function SecureRoutes({ component: Component, isLogged, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (isLogged.auth === true) {
          return <Component {...props} isLogged={isLogged.auth} {...rest} />;
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
