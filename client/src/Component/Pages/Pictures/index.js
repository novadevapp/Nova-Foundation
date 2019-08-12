import React from "react";
import "./style.css";
import Header from "../../CommonComponent/Header/index";
import Gallery from "./gallery";
import Button from "../../CommonComponent/Button/index";
import Footer from "../../CommonComponent/Footer";
const Pictures = () => {
  return (
    <div>
      <Header />
      <Gallery className="img__single" />
      <div className="pic__buttons">
        <Button className="large-back__button" name="Back" />
        <Button className="register__button" name="More Pictures" />
      </div>
      <Footer />
    </div>
  );
};

export default Pictures;
