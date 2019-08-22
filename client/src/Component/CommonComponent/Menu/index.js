import React, { Component } from "react";
import ReactNotification from "react-notifications-component";

import notification from "../../helpers/notification";
import "react-notifications-component/dist/theme.css";

import "./style.css";

class Menu extends Component {
  notificationDOMRef = React.createRef();
  menuRef = React.createRef();

  handleClick = value => e => {
    if (value === "/logout") {
      fetch("/api/v1/logout")
        .then(res => res.json())
        .then(({ error, data }) => {
          if (error) {
            notification(this.notificationDOMRef, "warning", error, "Warning");
          } else {
            return new Promise(async (resolve, reject) => {
              await this.props.setIsLogged({ auth: false, username: '' });
              this.props.history.push("/");
              resolve();
            })
          }
        })
        .catch(() => {
          notification(
            this.notificationDOMRef,
            "danger",
            "Server Error Can't Logout",
            "Error"
          );
        });
    } else {
      this.props.history.push(value);
    }
  };
  render() {
    const { isLogged: {auth} } = this.props;
    if (auth)
      return (
        <div className="menu" ref={this.menuRef}>
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
          <ReactNotification ref={this.notificationDOMRef} />
        </div>
      );

    return (
      <div className="menu" ref={this.menuRef}>
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
    );
  }
}

export default Menu;
