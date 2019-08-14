import React from "react";
import "./style.css";

const Gallery = ({imgUrl}) => {
  return (
    <section className="collage-container">
      <h1 className="all-pictures__title"> All Pictures </h1>

      {imgUrl.map((src, index) => (
        <img key={index} src={src} className="img__single" alt="" />
      ))}
    </section>
  );
};

export default Gallery;
