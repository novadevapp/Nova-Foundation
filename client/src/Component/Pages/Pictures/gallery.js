import React from "react";
import Image from "./image";
import "./style.css";

const Gallery = () => {
  return (
    <div className="collage-container">
      <h1 className="all-pictures__title"> All Pictures </h1>
      <Image className="image-grid" />
    </div>
  );
};

export default Gallery;
