import React from 'react';
import './style.css';
import BookIcon from './bookIcon';
import StoriesIcon from './storiesIcon';
import HomeIcon from './homeIcon';

export default ({icon, title, description, action}) => {
    
    return (
      <div className="serviceCard" onClick={action}>
   { icon === "story" ? <StoriesIcon />: null}
   { icon === "home" ? <HomeIcon /> : null}
   { icon === "book" ? <BookIcon /> : null}
    <h3>{title}</h3>
    <p>{description}</p>
  
      </div>
    );
  };