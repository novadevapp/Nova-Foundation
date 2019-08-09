// import React from "react";
// import "./style.css";
// import Star from "./star";
// import Cloud from "./cloud";
// import Logo from "./logo";
// import Toggle from "./toggle";
// import Triangle from "./triangle";
// import Menu from "../Menu";

// const Header = ({ isLogged, className }) => {
// <<<<<<< HEAD
//   const menuRef = React.createRef();

//   function handleClick() {
//     menuRef.current.menuRef.current.classList.toggle("menu--show");
//   }
//   if (className == null) {
//     return (
//       <>
//         <div className={`header minimal`}>
//           <Logo />
//           <Toggle onClick={handleClick} />
//           <Star className="star-two" />
//           <Star className="star-three" />
//           <Star className="star-nine" />
//           <Star className="star-ten" />
//           <Star className="star-eleven" />
//           <Star className="star-twelve" />
//         </div>
//         <Menu isLogged={isLogged} ref={menuRef} />
//       </>
//     );
//   }

// =======
//   if (className == null) {
//     return (
//       <div className={`header minimal`}>
//         <Logo />
//         <Star className="star-two" />
//         <Star className="star-three" />
//         <Star className="star-nine" />
//         <Star className="star-ten" />
//         <Star className="star-eleven" />
//         <Star className="star-twelve" />
//       </div>
//     );
//   }
// >>>>>>> 917e2910cf58887011b3535c1f14e57ad9c5b0a5
//   return (
//     <>
//       <div className={`header`}>
//         <Logo />
//         <Toggle onClick={handleClick} />
//         <Star className="star-one" />
//         <Star className="star-two" />
//         <Star className="star-three" />
//         <Star className="star-four" />
//         <Star className="star-five" />
//         <Star className="star-six" />
//         <Star className="star-seven" />
//         <Star className="star-eight" />
//         {className === "register" ? (
//           <React.Fragment>
//             <h1> Create your Account</h1>{" "}
//             <h3>Complete your account to get access to our support</h3>
//           </React.Fragment>
//         ) : null}
//         {className === "register" ? <Cloud /> : null}
//         {className === "home" ? (
//           <h3 className="home-h3">
//             Discover our resources. We hope they make you feel better!
//           </h3>
// <<<<<<< HEAD
//         ) : null}
//         {className === "triangle" ? <Triangle /> : null}
//       </div>
//       <Menu isLogged={isLogged} ref={menuRef} />
//     </>
// =======
//         </React.Fragment>
//       ) : null}
//       {className === "register" ? <Cloud /> : null}
//       {className === "triangle" ? <Triangle /> : null}
//     </div>
// >>>>>>> 917e2910cf58887011b3535c1f14e57ad9c5b0a5
//   );
// };

// export default Header;

import React from "react";

import Star from "./star";
import Cloud from "./cloud";
import Logo from "./logo";
import Triangle from "./triangle";
import Menu from "../Menu";
import Toggle from "./toggle";

import "./style.css";

const Header = ({ isLogged, className }) => {
  const menuRef = React.createRef();

  function handleClick() {
    menuRef.current.menuRef.current.classList.toggle("menu--show");
  }
  if (className == null) {
    return (
      <>
      <div className={`header minimal`}>
        <Logo />
        <Toggle onClick={handleClick} />
        <Star className="star-two" />
        <Star className="star-three" />
        <Star className="star-nine" />
        <Star className="star-ten" />
        <Star className="star-eleven" />
        <Star className="star-twelve" />
      </div>
      <Menu isLogged={isLogged} ref={menuRef} />
      </>
    );
  }
  return (
    <>
    <div className={`header`}>
      <Logo />
      <Toggle onClick={handleClick} />
      <Star className="star-one" />
      <Star className="star-two" />
      <Star className="star-three" />
      <Star className="star-four" />
      <Star className="star-five" />
      <Star className="star-six" />
      <Star className="star-seven" />
      <Star className="star-eight" />
      {className === "register" ? (
        <React.Fragment>
          <h1> Create your Account</h1>{" "}
          <h3>
            Complete your account to get access to our support
          </h3>
        </React.Fragment>
      ) : null}
      {className === "register" ? <Cloud /> : null}
      {className === "triangle" ? <Triangle /> : null}
    </div>
    <Menu isLogged={isLogged} ref={menuRef} />
    </>
  );
};

export default Header;
