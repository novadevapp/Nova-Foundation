import React from "react";

import DeleteIcon from "./DeleteIcon";
import "./style.css";

const Thoughts = ({ Array }) => {
  return Array.map((item, index) => (
    <div className='Thought-content' key={index}>
      <h2>{item.dateString}</h2>/>
    </div>
  ));
};

export default Thoughts;
