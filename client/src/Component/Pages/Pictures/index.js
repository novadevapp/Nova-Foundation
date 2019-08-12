import React from "react";
import "./style.css";
import Header from "../../CommonComponent/Header/index";
import Gallery from "./gallery";
import Button from "../../CommonComponent/Button/index";

const Pictures = () => {
  return (
    <div>
      <Header />
      <Gallery />
      <Button className="large-back__button" name="Back" />
      <Button className="register__button" name="More Pictures" />
    </div>
  );
};

export default Pictures;
