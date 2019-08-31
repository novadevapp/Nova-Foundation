import React from "react";

import DeleteIcon from "./DeleteIcon";
import "./style.css";

const Gallery = ({ imgUrl, onClick }) => {
  console.log();
  return imgUrl.length ? (
    imgUrl.map((src, index) => (
      <div className='image-content' key={index}>
        <img src={src.content} className='img__single' alt={src.title} />
        <div className='hover'>
          <div className='hover__icon'>
            <DeleteIcon onClick={onClick} id={index} />
          </div>
        </div>
      </div>
    ))
  ) : (
    <p>You don't have any pictures</p>
  );
};

export default Gallery;
