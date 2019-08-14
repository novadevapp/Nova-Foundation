import React, { Component } from "react";
import "./style.css";
import Header from "../../CommonComponent/Header/index";
import Gallery from "./gallery";
import Button from "../../CommonComponent/Button/index";
import Footer from "../../CommonComponent/Footer";
import Loading from "../../CommonComponent/Loading";

export default class Pictures extends Component {
  state = {
    imageURL: [],
    loading: true
  };
  componentDidMount() {
    fetch("/api/v1/pictures")
      .then(res => res.json())
      .then(({ images, error }) => {
        if (error) console.log(error);
        else this.setState({ imageURL: images, loading: false });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    const { imageURL, loading } = this.state;
    return (
      <div>
        <Header />
        <section className="collage-container">
          <h1 className="all-pictures__title"> All Pictures </h1>
          {loading && <Loading />}
          <Gallery className="img__single" imgUrl={imageURL} />
        </section>
        <div className="pic__buttons">
          <Button className="large-back__button" name="Back" />
          <Button className="register__button" name="More Pictures" />
        </div>
        <Footer />
      </div>
    );
  }
}
