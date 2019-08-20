import React from "react";
import "./style.css";
import PoemList from "./poemList";
import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Button from "../../CommonComponent/Button";

const Poems = (props) => {
  return (
    <div>
      <Header {...props} />
      <PoemList />
      <div className="poem-buttons">
        <Button className="large-back__button" name="Back" />
        <Button className="register__button" name="More Poems" />
      </div>

      <Footer />
    </div>
  );
};

export default Poems;
