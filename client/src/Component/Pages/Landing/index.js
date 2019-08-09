import React, { Component } from "react";
import ReactNotification from "react-notifications-component";

import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import background from "../../../assets/background.png";
import Button from "../../CommonComponent/Button";
import Victor from "./victor";

import "./style.css";

export default class Land extends Component {
  notificationDOMRef = React.createRef();
  notificationContent = React.createRef();

  componentDidMount() {
    const visited = localStorage.getItem("visit");
    if (visited !== "true") {
      this.notificationDOMRef.current.addNotification({
        content: (
          <div className="content" ref={this.notificationContent}>
            <h2>
              <span className="content__icon">
                <Victor />
              </span>{" "}
              Disclaimer
            </h2>
            <p className="content__paragraph">
              This prototype has been design to support parents who have
              suffered babby loss any stage of pregnancy and loss of a child up
              to 12 months old. This content may be triggering for some, if it
              is triggering for you please do not continue. We would appreciate
              any feedback you can give us.
            </p>
            <Button
              className="proceed__button"
              name="Proceed"
              onClick={this.handleClick}
            />
          </div>
        ),
        insert: "top",
        container: "top-center",
        dismissable: { click: true }
      });
      localStorage.setItem("visit", "true");
    } 
  }
  handleClick = () => {
    this.notificationContent.current.classList.add("hidden");
  };
  handleLinks = value => e => {
    this.props.history.push(value);
  };

  render() {
    return (
      <>
        <Header />
        <main className="land">
          <div className="land__home">
            <h3 className="land__header"> YOU'RE NOT ALONE</h3>
            <img src={background} alt="landing" />
            <div className="land__links">
              <Button
                className="register__button"
                name="About Us"
                onClick={this.handleLinks("/about-us")}
              />
              <Button
                className="register__button"
                name="Register"
                onClick={this.handleLinks("register")}
              />
              <Button
                className="register__button"
                name="Login"
                onClick={this.handleLinks("/login")}
              />
            </div>
          </div>
          <ReactNotification ref={this.notificationDOMRef} />
        </main>
        <Footer />
      </>
    );
  }
}
