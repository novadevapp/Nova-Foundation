import React from "react";
import "./style.css";

export const button = ({ className, onClick, name }) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {name}
      </button>
    </div>
  );
};
