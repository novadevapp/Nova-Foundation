import React from "react";
import "./style.css";

const imgUrl = [
  "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F95%2FCatVibrissaeFullFace.JPG%2F1200px-CatVibrissaeFullFace.JPG&f=1",
  "https://source.unsplash.com/lVmR1YaBGG4/800x600",
  "https://source.unsplash.com/5KvPQc1Uklk/800x600",
  "https://source.unsplash.com/GtYFwFrFbMA/800x600"
];

const Gallery = () => {
  return (
    <section className="collage-container">
      <h1 className="all-pictures__title"> All Pictures </h1>

      {imgUrl.map((src, index) => (
        <img key={index} src={src} className="img__single" />
      ))}
    </section>
  );
};

export default Gallery;
