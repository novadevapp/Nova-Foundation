import React from "react";
import "./style.css";

export const Button = ({ className, onClick, name }) => {
  return (
      <button className={className} onClick={onClick}>
        {name}
      </button>
  );
};

export default Button;
