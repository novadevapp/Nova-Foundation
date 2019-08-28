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
      case "laugh":
        return (
          <>
            <Laugh />
            <p>Positive</p>
          </>
        );
      case "meh":
        return (
          <>
            <Meh />
            <p>Adjusting</p>
          </>
        );
      case "mehRolling":
        return (
          <>
            <MehRolling />
            <p>Despondent</p>
          </>
        );
      case "cry":
        return (
          <>
            <Cry />
            <p>Upset</p>
          </>
        );
      case "grimace":
        return (
          <>
            <Grimace />
            <p>Angry</p>
          </>
        );
      case "smile":
        return (
          <>
            <Smile />
            <p>Hopeful</p>
          </>
        );
      case "frown":
        return (
          <>
            <Frown />
            <p>Depressed</p>
          </>
        );
      case "tired":
        return (
          <>
            <Tired />
            <p>Anxious</p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      {thoughts.map((item, index) => (
        <div className='thought-content' key={index}>
          <h2 className='thought__title'>{item.dateString}</h2>
          <div className='thought__wrapper'>
            <Emoji type={item.emoji} />
          </div>
          <p>{item.thought}</p>
        </div>
      ))}
    </>
  );
};

export default Thoughts;
