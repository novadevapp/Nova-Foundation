import React, { Component } from "react";
import ReactNotification from "react-notifications-component";

import notification from "../../helpers/notification";
import Header from "../../CommonComponent/Header/index";
import Gallery from "./gallery";
import Button from "../../CommonComponent/Button/index";
import Footer from "../../CommonComponent/Footer";
import Loading from "../../CommonComponent/Loading";
import AddIcon from "../../CommonComponent/AddIcon";
import DeletePopup from "./DeletePopup";

// import "react-notifications-component/dist/theme.css";
import "./style.css";

export default class Pictures extends Component {
  state = {
    imageURL: [],
    loading: true,
    DeleteId: ""
  };
  notificationDOMRef = React.createRef();
  ModelDelete = React.createRef();

  componentDidMount() {
    fetch("/api/v1/pictures")
      .then(res => res.json())
      .then(({ images, error }) => {
        if (error)
          notification(this.notificationDOMRef, "warning", error, "Warning");
        else this.setState({ imageURL: images, loading: false });
      })
      .catch((error) => {
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
  handleDeletePopup = e => {
    this.setState({ DeleteId: e.currentTarget.id });
    this.ModelDelete.current.classList.toggle("block");
  };

  handleDelete = () => {
    const { imageURL, DeleteId } = this.state;
    const { fileName } = imageURL[DeleteId];

    fetch("/api/v1/pictures", {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ data: { fileName } })
    })
      .then(res => res.json())
      .then(({ error }) => {
        if (error) {
          notification(this.notificationDOMRef, "warning", error, "Warning");
        } else {
          this.setState(prev => {
            const imageURL = prev.imageURL;
            imageURL.splice(DeleteId, 1);
            return { imageURL };
          });
          this.handleVisiabilty();
        }
      })
      .catch(err => {
        notification(
          this.notificationDOMRef,
          "danger",
          "Can't load images please try again",
          "Error"
        );
      });
  };
  handleVisiabilty = () => {
    this.ModelDelete.current.classList.toggle("block");
    this.setState({ DeleteId: "" });
  };
  render() {
    const { imageURL, loading } = this.state;
    return (
      <div>
        <Header {...this.props} />
        <AddIcon onClick={this.handleClick} />
        <section className="collage-container">
          <h1 className="all-pictures__title"> All Pictures </h1>
          {loading && <Loading />}
          <Gallery
            className="img__single"
            imgUrl={imageURL}
            onClick={this.handleDeletePopup}
          />
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
        <DeletePopup
          referance={this.ModelDelete}
          visiabilty={this.handleVisiabilty}
          submit={this.handleDelete}
        />
      </div>
    );
  }
}
