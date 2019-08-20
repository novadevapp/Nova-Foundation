import React from "react";
import "./style.css";
import Button from "../../CommonComponent/Button";

const personalSpace = () => {
  return (
    <div>
      <section className="personalspace-section">
        <h3 className="sub-info-title">Personal Space</h3>
        <div>
          <p className="info-content">
            Mourning is the outward expression of grief, it is the way you
            express emotions, and also the way that you celebrate the love you
            have for your child. There is no right or wrong way to mourn, nor is
            it any one else’s business. Mourning helps us to remember and take
            control of your loss by expressing your love for your child. This
            area gives you a space to connect with and mourn your precious baby.
            It is a space just for you.
          </p>
        </div>
        <Button name="Back" className="large-back__button" />
      </section>
    </div>
  );
};

export default personalSpace;
