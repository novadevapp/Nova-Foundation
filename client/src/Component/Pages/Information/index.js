import React from "react";
import "./style.css";
import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Information from "./information";

const Infomation = (props) => {
  return (
    <div>
      <Header {...props} />
      <Information {...props} />

      <Footer />
    </div>
  );
};

export default Infomation;
