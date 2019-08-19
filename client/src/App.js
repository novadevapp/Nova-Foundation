import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SecureRoutes from "./secureRoutes";
import { Landing, AboutUs, Login, Signup, FourOFour } from "./Component/Pages";
import "./App.css";
import navLinksForUsers from "./navLinksForUsers";

//if not logged in
const navLinksForVisitors = [
  { path: "/", component: Landing },
  { path: "/login", component: Login },
  { path: "/about-us", component: AboutUs },
  { path: "/register", component: Signup }
];

function App() {
  const [isLogged, setIsLogged] = React.useState("");
  const [username, setUserName] = React.useState('');

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
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          {isLogged === true ? (
            <Route
              exact
              path={"/"}
              // navLinksForUsers is an array with home as the first item
              component={navLinksForUsers[0].component}
            />
          ) : null}
          {navLinksForVisitors.map((route, index) => (
            <Route
              exact
              path={route.path}
              key={index}
              render={props => (
                <route.component setIsLogged={setIsLogged} {...props} />
              )}
            />
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
    </div>
  );
}

export default App;
