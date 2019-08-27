import React from "react";

import Star from "./star";
import Cloud from "./cloud";
import Logo from "./logo";
import Triangle from "./triangle";
import Menu from "../Menu";
import Toggle from "./toggle";

import "./style.css";

const Header = ({ className, ...rest }) => {
  const menuRef = React.createRef();

  function handleClick() {
    menuRef.current.menuRef.current.classList.toggle("menu--show");
  }
  return (
    <>
      <div
        className={`header 
        ${!className
            ?
            'minimal'
            :
            className.includes('minimal')
              ?
              'minimal'
              : 'big'
          }`}>
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
        {className && className.includes("register")
          ?
          (
            <React.Fragment>
              <h1> Create your Account</h1>{" "}
              <h3>
                Complete your account to get access to our support
          </h3>
              <Cloud />
            </React.Fragment>
          )
          :
          null}
        {className && className.includes("triangle") ? <Triangle /> : null}
      </div>
      <Menu {...rest} ref={menuRef} />
    </>
  );
};

export default Header;
