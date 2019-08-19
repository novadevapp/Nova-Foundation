import {
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
  Suggestion,
  AboutUs
} from "./Component/Pages";

//if logged in
export default [
  { path: "/home", component: Home },
  //{ path: "/about-us", component: AboutUs },
  // { path: "/status", component: Status },
  // { path: "/exercises", component: Exercises },
  { path: "/personal-space", component: PersonalSpace },
  { path: "/add-pic", component: AddPic },
  // { path: "/add-poem", component: AddPoem },
  // { path: "/add-story", component: AddStory },
  { path: "/pictures", component: PicturesPage },
  { path: "/poems", component: Poems }
  // { path: "/stories", component: Stories },
  // { path: "/suggestion", component: Suggestion },
  // { path: "/single-story", component: SingleStory },
  // { path: "/single-poem", component: SinglePoem },
  // { path: "/single-exercise", component: SingleExercises }
];
