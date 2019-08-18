import React, { Component } from "react";
import ReactNotification from "react-notifications-component";

import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import background from "../../../assets/Heart.png";
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
              This app has been designed to support parents experiencing
              babyloss. The content may be triggering or overwhelming for some,
              or at points. If you do feel triggered stop using the app for now,
              take some deep breaths, get up and walk around. Do whatever you
              need to do to feel more grounded.
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
    }
  }
  handleClick = () => {
    this.notificationContent.current.classList.add("hidden");
    localStorage.setItem("visit", "true");
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
            <h3 className="land__header"> Nova Foundation</h3>
            <img src={background} alt="landing" />
            <p className="land__paragraph">
              Babyloss is one of the most catastrophic things that can happen to
              a family. We are so sorry that it happened to you.
            </p>{" "}
            <p className="land__paragraph">
              Please know that you are not alone. This app is designed by
              babyloss parents to provide comfort to other babyloss parents. It
              is a safe space to connect with and remember your baby, whilst
              helping you feel more in control of your own wellbeing.
            </p>{" "}
            <p className="land__paragraph">
              By registering with the app you will have access to a more
              personalised service.
            </p>
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
