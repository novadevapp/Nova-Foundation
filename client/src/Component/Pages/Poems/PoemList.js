import React from "react";
import "./style.css";

const PoemList = ({poems}) => {
  return (
    <div className="poems-container">
      <h1 className="poems-page__title">All Poems</h1>
      {poems.map((poem, index) => (
        <div className="poems-box" key={index}>
          <h4 className="poems-header">{poem.title}</h4>
          <p className="poems-body">{poem.content}</p>
        </div>
      ))}
    </div>
  );
};

export default PoemList;
