import React from "react";
import "./style.css";

const Gallery = ({ imgUrl }) => {
  return imgUrl.map((src, index) => (
    <img key={index} src={src} className="img__single" alt="personal" />
  ));
};

export default Gallery;
