import React from 'react';
import './style.css';
import BookIcon from './bookIcon';
import StoriesIcon from './storiesIcon';
import HomeIcon from './homeIcon';

export default ({ icon, title, description, action }) => {

  return (
    <div className="serviceCard" onClick={action}>
      <div className='serviceCard__heading'>
        {icon === "story" ? <StoriesIcon /> : null}
        {icon === "home" ? <HomeIcon /> : null}
        {icon === "book" ? <BookIcon /> : null}
        <h3>{title}</h3>
      </div>
      <p>{description}</p>

    </div>
  );
};