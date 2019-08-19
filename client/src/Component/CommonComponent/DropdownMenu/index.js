import React from "react";
import "./style.css";
import Grief from "../../Pages/Information/grief";
import Trauma from "../../Pages/Information/trauma";

export default () => {
  const [selection, setSelection] = React.useState("information");

  const redirectOnSelect = e => {
    setSelection(e.target.value);
  };

  return (
    <>
      <div className="select-container">
        <select onChange={redirectOnSelect}>
          <option value="information">Information</option>
          <option value="grief">Grief</option>
          <option value="trauma">Trauma</option>
        </select>
      </div>
      {selection === "information" ? <p /> : null}
      {selection === "grief" ? <Grief /> : null}
      {selection === "trauma" ? <Trauma /> : null}
    </>
  );
};
