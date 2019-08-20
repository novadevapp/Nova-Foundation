import React from "react";
import { Route, Redirect } from "react-router-dom";

function CheckRoute({ component: Component, isLogged, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (isLogged.auth === true) {
          return (
            <Redirect
              to={{
                pathname: "/home",
                state: {
                  from: props.location
                }
              }}
            />
          )
        } else {
          return <Component {...props} {...rest} isLogged={isLogged.auth} />
        }
      }}
    />
  );
}

export default CheckRoute;
