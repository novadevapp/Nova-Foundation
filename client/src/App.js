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
  { path: "/", component: Home }
  // { path: "/about-us", component: AboutUs },
  // { path: "/status", component: Status },
  // { path: "/exercises", component: Exercises },
  // { path: "/personal-space", component: PersonalSpace },
  //  { path: "/add-pic", component: AddPic },
  // { path: "/add-poem", component: AddPoem },
  // { path: "/add-story", component: AddStory },
  // { path: "/pictures", component: PicturesPage },
  // { path: "/poems", component: Poems },
  // { path: "/stories", component: Stories },
  // { path: "/suggestion", component: Suggestion },
  // { path: "/single-story", component: SingleStory },
  // { path: "/single-poem", component: SinglePoem },
  // { path: "/single-exercise", component: SingleExercises }
];

//if not logged in
const navLinksForVisitors = [
  { path: "/", component: Landing }
  // { path: "/login", component: Login },
  // { path: "/signup", component: Signup }
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
