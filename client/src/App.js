import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecureRoutes from "./secureRoutes";
import navLinksForUsers from "./navLinksForUsers";
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
  const [isAuth, setIsAuth] = React.useState("");

  React.useEffect(() => {
    const loggedInStatus = cookies.get("cookienvf");
    if (loggedInStatus === null) {
      setIsAuth(false);
    } else {
      fetch("/api/v1/login-status", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ jwt: loggedInStatus })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.status === "ok") {
            setIsAuth(loggedInStatus);
          } else {
            setIsAuth(false);
          }
        });
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <SecureRoutes />
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
