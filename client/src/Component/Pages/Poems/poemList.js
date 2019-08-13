import React from "react";
import "./style.css";

const data = [
  {
    poemName: "Tiptoes Moments",
    poemBody:
      "I am a free spirit like a wind, I bend with the breeze, carefree with the bliss. I wander here and there, And finally found a love to share..."
  },
  {
    poemName: "Tata Loves Her Angel",
    poemBody:
      "A little pink plus sign on a tiny white stick, That's how your momma found out she wasn't just sick, She was scared but happy, nervous but excited, No one knew what to expect the day we met you..."
  },
  {
    poemName: "My First Child",
    poemBody:
      "Since the day I you were in my tummy, I knew I'd be a great mommy, I'd love to feel every kick you gave, How I wish I'd see you wave..."
  },
  {
    poemName: "An Angel Never Dies",
    poemBody:
      "Don't let them say, I wasn't born. That something stopped my heart. I felt each tender squeeze you gave. I've loved you from the start. Although my body you can't hold, It doesn't mean I'm gone..."
  },
  {
    poemName: "Heaven’s Rocking Chair",
    poemBody:
      "Are there rocking chairs in Heaven, where little babies go? Do the angels hold you closely, and rock you to and fro?"
  }
];

const PoemList = () => {
  return (
    <div className="poems-container">
      <h1 className="poems-page__title">All Poems</h1>
      {data.map((poems, index) => (
        <div className="poems-box">
          <h4 key={index} className="poems-header">
            {poems.poemName}
          </h4>
          <p key={index} className="poems-body">
            {poems.poemBody}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PoemList;
