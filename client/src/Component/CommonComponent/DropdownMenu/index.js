import React from "react";
import "./style.css";
import Grief from "../../Pages/Information/grief";
import Trauma from "../../Pages/Information/trauma";
import PersonalSpace from "../../Pages/Information/personal";
import Button from "../../CommonComponent/Button";

export default (props) => {
  const [selection, setSelection] = React.useState("information");

  const redirectOnSelect = e => {
    setSelection(e.target.value);
  };

  return (
    <section className="dropdown">
      <div className="select-container">
        <select onChange={redirectOnSelect} value={selection}>
          <option value="information">Information</option>
          <option value="grief">Grief</option>
          <option value="trauma">Trauma</option>
          <option value="personal">Personal Space</option>
        </select>
      </div>
      {selection === "information" ? (
        <p className="info-content">
          Grief is the flipside of love, which is why it is so painful. Babyloss
          is against the natural order of things, resulting in an intense grief
          for the loss of your child and the loss of the life you had planned.
          <br /> <br />
          We are so sorry that this happened to you. Please know that you are
          not alone. <br /> <br />
          This app was designed by babyloss parents to provide comfort to other
          babyloss parents. It is a safe space to connect with and remember your
          baby, whilst helping you track your own wellbeing.
        </p>
      ) : null}
      {selection === "grief" ? <Grief setSelection={setSelection} /> : null}
      {selection === "trauma" ? <Trauma setSelection={setSelection} /> : null}
      {selection === "personal" ? <PersonalSpace {...props} setSelection={setSelection} /> : null}
      {selection === 'information' && <Button name="Next" className="register__button" onClick={() => setSelection('grief')} />}
    </section>
  );
};
