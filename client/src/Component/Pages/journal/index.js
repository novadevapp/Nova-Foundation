import React from "react";

import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Button from "../../CommonComponent/Button";
import Thoughts from "./thoughts";
import AddIcon from "./AddIcon";
import "./style.css";

export default props => {
  handleClick = () => {
    props.history.push("/status");
  };
  return (
    <>
      <Header {...props} />
      <main className='journal'>
        <AddIcon onClick={handleClick} />
        <Thoughts />
        <Button
          name='Back'
          className='large-skip__button'
          onClick={() => props.history.goBack()}
        />
      </main>
      <Footer />
    </>
  );
};
