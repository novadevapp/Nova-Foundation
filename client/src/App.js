import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SecureRoutes from "./Component/HOC/secureRoutes";
import CheckRoute from "./Component/HOC/checkRoute";
import { Landing, AboutUs, Login, Signup, FourOFour } from "./Component/Pages";
import navLinksForUsers from "./navLinksForUsers";
import Loading from "./Component/CommonComponent/Loading";

import "./App.css";

//if not logged in
const navLinksForVisitors = [
  { path: "/", component: Landing },
  { path: "/login", component: Login },
  { path: "/register", component: Signup }
];

function App() {
  const [isLogged, setIsLogged] = React.useState({ auth: false, username: "" });
  const [isLoading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  React.useEffect(props => {
    fetch("/api/v1/login-status")
      .then(res => res.json())
      .then(data => {
        if (data.auth === "ok") {
          setIsLogged({ auth: true, username: data.username });
          setLoading(false);
        } else {
          setIsLogged({ auth: false, username: data.username });
          setLoading(false);
        }
      })
      .catch(err => {
        setError("Error Please reload the page");
        setLoading(false);
      });
    return () => undefined;
  }, []);
  return (
    <div className='App'>
      {error && <p className='error'>{error}</p>}
      {isLoading || error ? (
        isLoading && <Loading />
      ) : (
        <Router>
          <Switch>
            <Route
              exact
              path='/about-us'
              render={props => {
                return (
                  <AboutUs
                    {...props}
                    setIsLogged={setIsLogged}
                    isLogged={isLogged}
                  />
                );
              }}
            />
            {navLinksForVisitors.map((route, index) => (
              <CheckRoute
                exact
                path={route.path}
                isLogged={isLogged}
                component={route.component}
                setIsLogged={setIsLogged}
                key={index}
              />
            ))}
            {isLogged
              ? navLinksForUsers.map((route, index) => (
                  <SecureRoutes
                    exact
                    path={route.path}
                    isLogged={isLogged}
                    setIsLogged={setIsLogged}
                    key={index}
                    component={route.component}
                  />
                ))
              : null}

            <Route
              render={props => <FourOFour {...props} isLogged={isLogged} />}
            />
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
