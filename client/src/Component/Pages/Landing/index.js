import React, { Component } from "react";
import ReactNotification from "react-notifications-component";

import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Victor from "./victor";

import "./style.css";

export default class Land extends Component {
  notificationDOMRef = React.createRef();

  componentDidMount() {
    this.notificationDOMRef.current.addNotification({
      // other properties have been omitted for brevity
      container: "top-right",
      content: (
        <div className="content">
          <h2>
            <Victor /> Disclaimer
          </h2>
          <p>
            This prototype has been design to support parents who have suffered
            babby loss any stage of pregnancy and loss of a child up to 12
            months old. This content may be triggering for some, if it is
            triggering for you please do not continue. We would appreciate any
            feedback you can give us.
          </p>
        </div>
      )
    });
  }

  render() {
    return (
      <>
        <Header />
        <main className="land">
          <ReactNotification ref={this.notificationDOMRef} />
        </main>
        <Footer />
      </>
    );
  }
}
