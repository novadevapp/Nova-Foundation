import React from "react";
import "./style.css";
import DropdownMenu from "../../CommonComponent/DropdownMenu";

const information = () => {
  return (
    <div className="info-container">
      <h1 className="info-title">Nova Information</h1>
      <DropdownMenu />
      <section className="info-content">
        <div>
          <p>
            Grief is the flipside of love, which is why it is so painful.
            Babyloss is against the natural order of things, resulting in an
            intense grief for the loss of your child and the loss of the life
            you had planned. We are so sorry that this happened to you. Please
            know that you are not alone.
          </p>
          <p>
            This app was designed by babyloss parents to provide comfort to
            other babyloss parents. It is a safe space to connect with and
            remember your baby, whilst helping you track your own wellbeing.
          </p>
        </div>
      </section>
    </div>
  );
};

export default information;
