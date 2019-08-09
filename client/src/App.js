import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecureRoutes from "./secureRoutes";
import navLinksForUsers from "./navLinksForUsers";
import { Landing, Login, Signup } from "./Component/Pages";

import "./App.css";

//if not logged in
const navLinksForVisitors = [
  { path: "/", component: Landing }
  // { path: "/login", component: Login },
  // { path: "/signup", component: Signup }
];

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {navLinksForVisitors.map((route, index) => (
            <Route
              exact
              path={route.path}
              key={index}
              component={route.component}
            />
          ))}

          {navLinksForUsers.map((route, index) => (
            <SecureRoutes
              exact
              path={route.path}
              key={index}
              component={route.component}
            />
          ))}

          <Route render={() => <div>Not Found</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
