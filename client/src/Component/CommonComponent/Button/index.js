import React from "react";
import "./style.css";

const Button = ({ className, onClick, name }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};

export default Button;
