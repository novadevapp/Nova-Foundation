import React from "react";
import { Route, Redirect } from "react-router-dom";

function SecureRoutes({ component: Component, auth, ...rest }) {
  console.log({ auth });
  return (
    <Route
      {...rest}
      render={props => {
        if (auth === true) {
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
