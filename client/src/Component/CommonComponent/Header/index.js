import React from "react";
import "./style.css";
import Star from "./star";
import Cloud from "./cloud";
import Logo from "./logo";

const Header = ({ isLogged, className }) => {
  return (
    <div className={`header ${className}`}>
        <Logo />
      <Star className="star-one" />
      <Star className="star-two" />
      <Star className="star-three" />
      <Star className="star-four" />
      <Star className="star-five" />
      <Star className="star-six" />
      <Star className="star-seven" />
      <Star className="star-eight" />
      <h1> Create Account</h1>
      <h3>
        Complete your account <br /> to get our support <br /> services
      </h3>
      <Cloud />
    </div>
  );
};

export default Header;
