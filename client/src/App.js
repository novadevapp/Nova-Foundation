import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecureRoutes from "./secureRoutes";
import { Landing, AboutUs, Login, Signup, FourOFour } from "./Component/Pages";
import cookies from "browser-cookies";
import "./App.css";

//if not logged in
const navLinksForVisitors = [
  { path: "/", component: Landing },
  { path: "/login", component: Login },
  { path: "/about-us", component: AboutUs },
  // { path: "/signup", component: Signup }
  { path: "/register", component: Signup }
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState("");
  const [jwtRef, setJwtRef] = React.useState("");

  React.useEffect(() => {
    const cookieContent = cookies.get("cookienvf");

    if (cookieContent === null) {
      return;
    } else if (cookieContent === jwtRef) {
      setIsAuthenticated(true);
    } else {
      fetch("/api/v1/login-status", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ jwt: cookieContent })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.status === "ok") {
            setJwtRef(cookieContent);
          } else {
            return;
          }
        });
    }
  }, [jwtRef]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <SecureRoutes Auth={isAuthenticated} />
          {navLinksForVisitors.map((route, index) => (
            <Route
              exact
              path={route.path}
              key={index}
              component={route.component}
            />
          ))}
          <Route render={() => <FourOFour />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
