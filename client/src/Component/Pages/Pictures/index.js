import React, { Component } from "react";
import ReactNotification from "react-notifications-component";

import notification from "../../helpers/notification";
import Header from "../../CommonComponent/Header/index";
import Gallery from "./gallery";
import Button from "../../CommonComponent/Button/index";
import Footer from "../../CommonComponent/Footer";
import Loading from "../../CommonComponent/Loading";
import AddIcon from "./AddIcon";

import "react-notifications-component/dist/theme.css";
import "./style.css";

export default class Pictures extends Component {
  state = {
    imageURL: [],
    loading: true
  };
  notificationDOMRef = React.createRef();

  componentDidMount() {
    fetch("/api/v1/pictures")
      .then(res => res.json())
      .then(({ images, error }) => {
        if (error)
          notification(this.notificationDOMRef, "warning", error, "Warning");
        else this.setState({ imageURL: images, loading: false });
      })
      .catch(() => {
        notification(
          this.notificationDOMRef,
          "danger",
          "Can't Load The Images please try again",
          "Error"
        );
      });
  }
  handleClick = () => {
    this.props.history.push("/add-pic");
  };
  render() {
    const { imageURL, loading } = this.state;
    return (
      <div>
        <Header />
        <AddIcon onClick={this.handleClick} />
        <section className="collage-container">
          <h1 className="all-pictures__title"> All Pictures </h1>
          {loading && <Loading />}
          <Gallery className="img__single" imgUrl={imageURL} />
        </section>
        <div className="pic__buttons">
          <Button
            className="large-back__button"
            name="Back"
            onClick={() => this.props.history.goBack()}
          />
          <Button className="register__button" name="More Pictures" />
        </div>
        <Footer />
        <ReactNotification ref={this.notificationDOMRef} />
      </div>
    );
  }
}
