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
  const Emoji = ({ type }) => {
    switch (type) {
      case "sad":
        return (
          <>
            <Sad />
            <p>Sad</p>
          </>
        );
        break;
      case "laugh":
        return (
          <>
            <Laugh />
            <p>Positive</p>
          </>
        );
        break;
      case "meh":
        return (
          <>
            <Meh />
            <p>Adjusting</p>
          </>
        );
        break;
      case "mehRolling":
        return (
          <>
            <MehRolling />
            <p>Despondent</p>
          </>
        );
        break;
      case "cry":
        return (
          <>
            <Cry />
            <p>Upset</p>
          </>
        );
        break;
      case "grimace":
        return (
          <>
            <Grimace />
            <p>Angry</p>
          </>
        );
        break;
      case "smile":
        return (
          <>
            <Smile />
            <p>Hopeful</p>
          </>
        );
        break;
      case "frown":
        return (
          <>
            <Frown />
            <p>Depressed</p>
          </>
        );
        break;
      case "tired":
        return (
          <>
            <Tired />
            <p>Anxious</p>
          </>
        );
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

          <p>{item.thought}</p>
        </div>
      ))}
    </>
  );
};

export default Thoughts;
