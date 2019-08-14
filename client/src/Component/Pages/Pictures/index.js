import React, { Component } from "react";
import "./style.css";
import Header from "../../CommonComponent/Header/index";
import Gallery from "./gallery";
import Button from "../../CommonComponent/Button/index";
import Footer from "../../CommonComponent/Footer";

export default class Pictures extends Component {
  state = {
    imageURL: []
  };
  componentDidMount() {
    fetch("/api/v1/pictures")
      .then(res => res.json())
      .then(({ images }) => {
        this.setState({ imageURL: images });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { imageURL } = this.state;
    return (
      <div>
        <Header />

        <Gallery className="img__single" imgUrl={imageURL} />
        <div className="pic__buttons">
          <Button className="large-back__button" name="Back" />
          <Button className="register__button" name="More Pictures" />
        </div>
        <Footer />
      </div>
    );
  }
}
