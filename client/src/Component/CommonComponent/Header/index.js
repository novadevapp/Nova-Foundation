import React from "react";
import "./style.css";
import Star from "./star";
import Cloud from "./cloud";
import Logo from "./logo";
import Triangle from "./triangle";

const Header = ({ isLogged, className }) => {
  return (
    <div className={`header ${className.includes('minimal') ? 'minimal' : 'big'}`}>
      <Logo />
      <Star className="star-one" />
      <Star className="star-two" />
      <Star className="star-three" />
      <Star className="star-four" />
      <Star className="star-five" />
      <Star className="star-six" />
      <Star className="star-seven" />
      <Star className="star-eight" />
      {className.includes("register") ? (
        <React.Fragment>
          <h1> Create your Account</h1>{" "}
          <h3>
            Complete your account to get access to our support
          </h3>
        </React.Fragment>
      ) : null}
      {className.includes("register") ? <Cloud /> : null}
      {className.includes("triangle") ? <Triangle /> : null}
    </div>
  );
};

export default Header;
