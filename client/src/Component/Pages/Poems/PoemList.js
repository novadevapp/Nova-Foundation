import React from "react";

import AddIcon from '../../CommonComponent/AddIcon';
import "./style.css";

const PoemList = ({ poems, ...rest }) => {
  return (
    <div className="poems-container">
      <div className='poems__header'>
        <h1 className="poems-page__title">All Poems</h1>
        <AddIcon onClick={() => rest.history.push('/add-poem')} />
      </div>
      {poems.length ? poems.map((poem, index) => (
        <div className="poems-box" key={index}>
          <h4 className="poem-title">{poem.title}</h4>
          <p className="poems-body">{poem.content}</p>
        </div>
      )) : <p>You don't have any poems</p>}
    </div>
  );
};

export default PoemList;
