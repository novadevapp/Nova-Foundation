import React from "react";
import { Route, Redirect } from "react-router-dom";

function CheckRoute({ component: Component, isLogged, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (isLogged === true) {
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
          return <Component {...rest} {...props} {...isLogged} />
        }
      }}
    />
  );
}

export default CheckRoute;
