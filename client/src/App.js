import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactNotification from "react-notifications-component";

import SecureRoutes from "./Component/HOC/secureRoutes";
import CheckRoute from './Component/HOC/checkRoute';
import { Landing, AboutUs, Login, Signup, FourOFour } from "./Component/Pages";
import navLinksForUsers from "./navLinksForUsers";
import notification from './Component/helpers/notification'
import "./App.css";

//if not logged in
const navLinksForVisitors = [
  { path: "/", component: Landing },
  { path: "/login", component: Login },
  { path: "/register", component: Signup }
];

function App() {
  const [isLogged, setIsLogged] = React.useState("");
  const [username, setUserName] = React.useState('');
  const notificationDOMRef = React.createRef();

  React.useEffect(() => {
    fetch("/api/v1/login-status")
      .then(res => res.json())
      .then(data => {
        if (data.auth === "ok") {
          setIsLogged(true);
          setUserName(data.username);
        }
        else setIsLogged(false);
      })
      .catch(err => {
        notification(
          this.notificationDOMRef,
          'warning',
          'Sorry, something went wrong. Please try again!',
          'ERROR',
        );
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="/about-us"
            component={AboutUs}
          />
          {navLinksForVisitors.map((route, index) => (
            <CheckRoute
              exact
              path={route.path}
              isLogged={isLogged}
              component={route.component}
              setIsLogged={setIsLogged}
              setUserName={setUserName}
              key={index}
            >
            </CheckRoute>

          ))}
          {isLogged ?
            navLinksForUsers.map((route, index) => (
              <SecureRoutes
                exact
                path={route.path}
                isLogged={isLogged}
                setIsLogged={setIsLogged}
                username={username}
                key={index}
                component={route.component}
              />
            ))
            : null}

          <Route component={FourOFour} />
        </Switch>
      </Router>
      <ReactNotification ref={notificationDOMRef} />
    </div>
  );
}

export default App;
