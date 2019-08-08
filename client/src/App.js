import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  Landing,
  AboutUs,
  AddPic,
  AddPoem,
  AddStory,
  Exercises,
  Home,
  Login,
  PersonalSpace,
  PicturesPage,
  Poems,
  Signup,
  SingleExercises,
  SinglePoem,
  SingleStory,
  Status,
  Stories,
  Suggestion
} from "./Component/Pages";

import "./App.css";

//if logged in
const navLinksForUsers = [
  { path: "/", component: Home },
  { path: "/about-us", component: AboutUs }
];

//if not logged in
const navLinksForVisitors = [
  { path: "/", component: Landing },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup }
];

function App() {
  const loggedIn = true;
  return (
    <div className="App">
      <Router>
        <Switch>
          {loggedIn === true
            ? navLinksForUsers.map((route, index) => (
                <Route
                  exact
                  path={route.path}
                  key={index}
                  component={route.component}
                />
              ))
            : navLinksForVisitors.map((route, index) => (
                <Route
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
