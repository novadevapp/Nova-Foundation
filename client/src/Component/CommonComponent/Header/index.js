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
     {className === "register" ? <React.Fragment><h1> Create Account</h1> <h3>
        Complete your account <br /> to get our support <br /> services
      </h3></React.Fragment> : null} 
      {className === "register" ?  <Cloud /> : null } 
      {className === "home" ?  <h3 className="home-h3" >
       Discover our resources. We hope <br /> they make you feel better!
      </h3>: null } 
     
    </div>
  );
};

export default Header;
