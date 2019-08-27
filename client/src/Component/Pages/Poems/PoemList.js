import React from "react";

import AddIcon from '../../CommonComponent/AddIcon';
import "./style.css";

const PoemList = ({ poems, ...rest }) => (
  <div className="poems-container">
    <div className='poems__header'>
      <h1 className="poems-page__title">All Poems</h1>
      <AddIcon onClick={() => rest.history.push('/add-poem')} />
    </div>
    {poems.length ? poems.map(({ id, content = "", title = "" }, index) => (
      <div
        className="poems-box"
        key={index}
        onClick={() => rest.history.push(`/poems/${id}`)}
      >
        <h4 className="poem-title">{title}</h4>
        <p className="poems-body">{content.length > 50 ? content.substr(50) : content}</p>
      </div>
    )) : <p>You don't have any poems</p>}
  </div>
);


export default PoemList;
