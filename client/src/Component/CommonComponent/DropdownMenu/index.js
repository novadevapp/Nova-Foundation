import React from "react";
import "./style.css";
import Information from "../../Pages/Information";
import Stories from "../../Pages/Stories";
import Suggestions from "../../Pages/Suggestion";

export default () => {
  const [selection, setSelection] = React.useState("information");

  const redirectOnSelect = e => {
    setSelection(e.target.value);
  };

  return (
    <>
      <div className="select-container">
        <select onChange={redirectOnSelect}>
          <option value="information">Information & Suggestions</option>
          <option value="stories">Stories</option>
          <option value="suggestions">What people said</option>
        </select>
      </div>
      {selection === "information" ? <Information /> : null}
      {selection === "stories" ? <Stories /> : null}
      {selection === "suggestions" ? <Suggestions /> : null}
    </>
  );
};
