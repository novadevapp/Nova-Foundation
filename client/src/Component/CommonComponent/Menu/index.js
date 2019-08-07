import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import "./style.css";

class Menu extends Component {
  state = {};
  handleClick = value => e => {
    this.props.history.push(value);
  };
  render() {
    return (
      <div className="menu">
        <li onClick={this.handleClick("/home")} className="menu__item">NOVA HOME</li>
        <li onClick={this.handleClick("/information")} className="menu__item">NOVA INFORMATION</li>
        <li onClick={this.handleClick("/stories")} className="menu__item">NOVA STORIES</li>
        <li onClick={this.handleClick("/personal-space")} className="menu__item">
          MY PERSONAL CORNAER
        </li>
        <li onClick={this.handleClick("/logout")} className="menu__item">LOGOUT</li>
      </div>
    );
  }
}

export default withRouter(Menu);
