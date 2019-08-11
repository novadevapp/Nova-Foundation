import React from "react";
import { withRouter } from "react-router-dom"

import Star from "./star";
import Cloud from "./cloud";
import Logo from "./logo";
import Triangle from "./triangle";
import Menu from "../Menu";
import Toggle from "./toggle";

import "./style.css";

const Header = (props) => {
  const menuRef = React.createRef();

  function handleClick() {
    menuRef.current.menuRef.current.classList.toggle("menu--show");
  }
  if (props.className == null) {
    return (
      <>
      <div className={`header minimal`} >
        <Logo />
        <Toggle onClick={handleClick} />
        <Star className="star-two" />
        <Star className="star-three" />
        <Star className="star-nine" />
        <Star className="star-ten" />
        <Star className="star-eleven" />
        <Star className="star-twelve" />
      </div>
      <Menu isLogged={props.isLogged} ref={menuRef} history = {props.history}/>
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
      {props.className === "register" ? (
        <React.Fragment>
          <h1> Create your Account</h1>{" "}
          <h3>
            Complete your account to get access to our support
          </h3>
        </React.Fragment>
      ) : null}
      {props.className === "register" ? <Cloud /> : null}
      {props.className === "triangle" ? <Triangle /> : null}
    </div>
    <Menu isLogged={props.isLogged} ref={menuRef} />
    </>
  );
};

export default withRouter(Header);
