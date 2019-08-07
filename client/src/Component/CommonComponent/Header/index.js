import React from "react";
import "./style.css";
import Star from "./star";
import Cloud from "./cloud";
import Logo from "./logo";
import Triangle from "./triangle";

const Header = ({ isLogged, className }) => {
if(className == null) {
    return (
        <div className={`header minimal`}>
          <Logo />
          <Star className="star-two" />
          <Star className="star-three" />
          <Star className="star-nine" />
          <Star className="star-ten" />
          <Star className="star-eleven" />
          <Star className="star-twelve" />
        </div>
      );
}

  return (
    <div className={`header`}>
      <Logo />
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
      {className === "home" ? (
        <h3 className="home-h3">
          Discover our resources. We hope they make you feel better!
        </h3>
      ) : null}
      {className === "triangle" ? <Triangle /> : null}
    </div>
  );
};

export default Header;
