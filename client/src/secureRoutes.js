import React from "react";
import { Route, Redirect } from "react-router-dom";

function SecureRoutes({ component: Component, isLogged, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        // if (isLogged === true) {
        return <Component {...props} />;
        // } else {
        //   return (
        //     <Redirect
        //       to={{
        //         pathname: "/login",
        //         state: {
        //           from: props.location
        //         }
        //       }}
        //     />
        //   );
        // }
      }}
    />
  );
}

export default SecureRoutes;
