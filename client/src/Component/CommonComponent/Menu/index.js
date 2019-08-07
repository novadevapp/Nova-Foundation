import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./style.css";

class Menu extends Component {
  state = {};
  handleClick = value => e => {
    this.props.history.push(value);
  };
  render() {
    const { isLogged } = this.props;
    if (isLogged)
      return (
        <div className="menu">
          <li onClick={this.handleClick("/home")} className="menu__item">
            NOVA HOME
          </li>
          <li onClick={this.handleClick("/information")} className="menu__item">
            NOVA INFORMATION
          </li>
          <li onClick={this.handleClick("/stories")} className="menu__item">
            NOVA STORIES
          </li>
          <li
            onClick={this.handleClick("/personal-space")}
            className="menu__item"
          >
            MY PERSONAL CORNAER
          </li>
          <li onClick={this.handleClick("/logout")} className="menu__item">
            LOGOUT
          </li>
        </div>
      );

      return <div className="menu">
      <li onClick={this.handleClick("/")} className="menu__item">
        NOVA HOME
      </li>
      <li onClick={this.handleClick("/login")} className="menu__item">
        LOGIN
      </li>
      <li onClick={this.handleClick("/register")} className="menu__item">
        SIGN UP
      </li>
    </div>
  }
}

export default withRouter(Menu);
