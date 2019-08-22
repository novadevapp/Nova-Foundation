import React from "react";
import {
  Sad,
  Laugh,
  Meh,
  MehRolling,
  Cry,
  Grimace,
  Smile,
  Frown,
  Tired
} from "../Status/Emogi";

import "./style.css";

const Thoughts = ({ thoughts }) => {
  console.log(thoughts);
  const Emoji = ({ type }) => {
    switch (type) {
      case "sad":
        return <Sad />;
        break;
      case "laugh":
        return <Laugh />;
        break;
      case "meh":
        return <Meh />;
        break;
      case "mehRolling":
        return <MehRolling />;
        break;
      case "cry":
        return <Cry />;
        break;
      case "grimace":
        return <Grimace />;
        break;
      case "smile":
        return <Smile />;
        break;
      case "frown":
        return <Frown />;
        break;
      case "tired":
        return <Tired />;
        break;
      default:
        return null;
    }
  };

  return (
    <>
      {thoughts.map((item, index) => (
        <div className='Thought-content' key={index}>
          <h2>{item.dateString}</h2>
          <Emoji type={item.emoji} />
          <p>{item.emoji}</p>
          <p>{item.thought}</p>
        </div>
      ))}
    </>
  );
};

export default Thoughts;
