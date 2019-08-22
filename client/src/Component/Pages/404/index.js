import React from "react";

import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Button from "../../CommonComponent/Button";

import "./style.css";

export default props => {
  console.log(props)
  return (
    <>
      <Header {...props} setLogged={props.setLogged} />
      <main style={{ minHeight: '65vh', padding: '2em' }}>
        <h3>404 page not found</h3>
        <Button
          name="Back"
          className="large-skip__button"
          onClick={() => props.history.goBack()}
        />
      </main>
      <Footer />
    </>
  );
};
