import React from "react";
import { BrowserRouter as Route } from "react-router-dom";
import Loading from "./Component/CommonComponent/Loading";

import {
  AboutUs,
  AddPic,
  AddPoem,
  AddStory,
  Exercises,
  Home,
  PersonalSpace,
  PicturesPage,
  Poems,
  SingleExercises,
  SinglePoem,
  SingleStory,
  Status,
  Stories,
  Suggestion
} from "./Component/Pages";

//if logged in
const navLinksForUsers = [
  { path: "/", component: Home }
  // { path: "/about-us", component: AboutUs },
  // { path: "/status", component: Status },
  // { path: "/exercises", component: Exercises },
  // { path: "/personal-space", component: PersonalSpace },
  // { path: "/add-pic", component: AddPic },
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

function SecureRoutes() {
  const [loggedIn, setLoggedIn] = React.useState("pending");

  React.useEffect(() => {
    fetch("/loggedin")
      .then(setLoggedIn(true))
      .catch(setLoggedIn(false));
  }, []);

  if (loggedIn === "pending") {
    return <route component={Loading} />;
  }
  if (loggedIn === true) {
    return (
      <>
        {navLinksForUsers.map((route, index) => (
          <Route
            exact
            path={route.path}
            key={index}
            component={route.component}
          />
        ))}
      </>
    );
  }
}

export default SecureRoutes;
