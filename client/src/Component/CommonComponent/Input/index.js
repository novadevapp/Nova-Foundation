import React from "react";
import "./style.css";

export default ({ id, label, placeholder, type, action }) => {
  return (
    <>
      <label htmlFor={id}> {label} </label>
      <input
        id={id}
        name={id}
        placeholder={placeholder}
        type={type}
        onBlur={action}
      />
    </>
  );
};
