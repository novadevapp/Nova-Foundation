import React from "react";
import "./style.css";

const imgUrl = [
  "https://source.unsplash.com/PC_lbSSxCZE/800x600",
  "https://source.unsplash.com/lVmR1YaBGG4/800x600",
  "https://source.unsplash.com/5KvPQc1Uklk/800x600",
  "https://source.unsplash.com/GtYFwFrFbMA/800x600",
  "https://source.unsplash.com/Igct8iZucFI/800x600",
  "https://source.unsplash.com/M01DfkOqz7I/800x600",
  "https://source.unsplash.com/MoI_cHNcSK8/800x600",
  "https://source.unsplash.com/M0WbGFRTXqU/800x600",
  "https://source.unsplash.com/s48nn4NtlZ4/800x600",
  "https://source.unsplash.com/E4944K_4SvI/800x600",
  "https://source.unsplash.com/F5Dxy9i8bxc/800x600",
  "https://source.unsplash.com/iPum7Ket2jo/800x600"
];

const Image = ({ className, alt }) => {
  return (
    <div className="image-container">
      <div className="image-grid">
        {imgUrl.map((src, index) => (
          <div key={index} className="box">
            <img className={className} src={src} alt={alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Image;
