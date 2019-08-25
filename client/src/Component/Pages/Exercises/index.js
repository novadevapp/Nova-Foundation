import React from "react";

import Header from "../../CommonComponent/Header";
import Button from "../../CommonComponent/Button";

export default function(props) {
  const [selection, setSelection] = React.useState("default");

  const redirectOnSelect = e => {
    setSelection(e.target.value);
  };
  return (
    <>
      <Header {...props} />
      <main className='exercises'>
        <h3 className=''> Exercises</h3>
        <section className='exercises__section'>
          <p>
            Self soothing can be a physical process. A practice can be very
            helpful in the presence of fear, anxity. A lot af practices involve
            using your immagination to create a space in your mind where you can
            feel safe, calm and potentially content.
          </p>
          <p>choose a exercise</p>
          <section className='dropdown'>
            <div className='select-container'>
              <select onChange={redirectOnSelect} value={selection}>
                <option value='default'>Please Choose an exercise</option>
                <option value='ButterflyHug'>Butterfly Hug</option>
                <option value='4-7-8'>4-7-8 Breathing</option>
                <option value='f/s'>F or S Breathing</option>
                <option value='SelfHolding'>Self-Holding</option>
              </select>
            </div>
            {selection === "ButterflyHug" ? (
              <>
                <p> Self huging sometimes refered to as a butterfly hug</p>
                <p>
                  1 sit or stand in a comfortable position. cross both arms in
                  front of your chest and place each hand on your uppor arms
                </p>
                <p>
                  2 begin gently tapping one hand at a time on yor arms. take
                  slow breaths. Try and make them a little deeper.
                </p>
                <p>
                  3 You level of emotions may not change, give yourself some
                  time and see what happens.
                </p>
              </>
            ) : null}
            {selection === "4-7-8" ? (
              <>
                {" "}
                <p>4-7-8 Breathing</p>
                <p>
                  Initially do 4 breath: inhale, hold, exhale cycles, building
                  up to 8. Make sure you are in a space where you will not be
                  interupted. this technique can also help you fall asleep and
                  works best if you are sitting or lying down comfortably.
                </p>
              </>
            ) : null}
            {selection === "f/s" ? (
              <>
                <p>F or S Breathing</p>
                <p>
                  Breath in however you like, but on the out breath make an F or
                  S sound as you breath out. Make sure the out breath is a bit
                  longer than the in breath. Repeat this breathing for a few
                  minutes and as you do look around your surroundings and gently
                  move your head around, allowing your gaze to move with your
                  head. Just by moving your head and gaze you are sending the
                  message to your brain that you are in a safe environment. The
                  breathing and head movement soothe the nervous system.
                </p>
              </>
            ) : null}
            {selection === "SelfHolding" ? (
              <>
                <p>Self-Holding</p>
                <p>
                  1 place your hands on either side of your head. Think about
                  how your are creating a cantainer for your thoughts. Your
                  hands are the sides. Feel the sensation between your hands
                </p>
                <p>
                  ef") 2 move one of your hands to the front of your head and
                  one to the back. Imagine building the sides of a cointainer
                  for your thoughts and feelings
                </p>
                <p>
                  3 place one hand on your forehead and one on your heart. See
                  if you can sense some sensation in your hands. Then try and
                  sense and sensations beneath your hands in your body
                </p>
                <p>
                  4 Place one hand on your heart and one on your belly. Do the
                  same again. Try and sense any sensations in your hands or
                  beneath them.
                </p>
                <p>
                  5 place a heand just where your rib cage ends and your stomach
                  begings and the oter hand at the behind the base of your head
                  where your head becomes your neck. Focus your attention on
                  your sensations in your body.
                </p>
              </>
            ) : null}
          </section>

          <Button
            name='Back'
            onClick={() => props.history.push("/poems")}
            className='large-skip__button'
          />
        </section>
      </main>
    </>
  );
}
