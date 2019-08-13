import React from "react";
import "./style.css";
import PoemList from "./poemList";
import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Button from "../../CommonComponent/Button";

const Poems = () => {
  return (
    <div>
      <Header />
      <PoemList />
      <Button className="register__button" name="More Poems" />
      <Button className="large-back__button" name="Back" />
      <Footer />
    </div>
  );
};

export default Poems;
