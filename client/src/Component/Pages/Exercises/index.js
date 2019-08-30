import React from "react";

import Header from "../../CommonComponent/Header";
import Button from "../../CommonComponent/Button";
import Footer from "../../CommonComponent/Footer";
import MedPic from "../../../assets/Medi.png";
import butterflyHug from "../../../assets/butterflyHug.jpeg";
import selfHolding from "../../../assets/selfH.jpg";
import selfHolding2 from "../../../assets/selfH2.jpg";
import "./style.css";

export default function(props) {
  const [selection, setSelection] = React.useState("default");

  const redirectOnSelect = e => {
    setSelection(e.target.value);
  };
  return (
    <>
      <Header {...props} />
      <main className='exercises'>
        <h3 className='exercises-title'>Exercises</h3>
        <section className='exercises-section'>
          <p className='exercises-content'>
            Self soothing can be a physical process. A practice can be very
            helpful in the presence of fear, anxiety. A lot af practices involve
            using your immagination to create a space in your mind where you can
            feel safe, calm and potentially content.
          </p>
          <p className='exercises-subtitle'>Dropdown list of exercises</p>
          <section className='dropdown'>
            <div className='select-container'>
              <select onChange={redirectOnSelect} value={selection}>
                <option value='default'>Choose an exercise</option>
                <option value='ButterflyHug'>Butterfly Hug</option>
                <option value='4-7-8'>4-7-8 Breathing</option>
                <option value='f/s'>F or S Breathing</option>
                <option value='SelfHolding'>Self-Holding</option>
              </select>
            </div>
            {selection === "ButterflyHug" ? (
              <>
                <h4 className='exercises-subtitle'> Butterfly hug</h4>

                <p className='exercises-content'>
                  1 sit or stand in a comfortable position. cross both arms in
                  front of your chest and place each hand on your uppor arms
                </p>
                <p className='exercises-content'>
                  2 begin gently tapping one hand at a time on yor arms. take
                  slow breaths. Try and breath a little deeper.
                </p>
                <img
                  className='bfh-img'
                  src={butterflyHug}
                  alt='Butterfly hug instructions'
                />
                <p className='exercises-content'>
                  3 You level of emotions may not change, give yourself some
                  time and see what happens.
                </p>
              </>
            ) : null}
            {selection === "4-7-8" ? (
              <>
                <h4 className='exercises-subtitle'>4-7-8 Breathing</h4>
                <img
                  className='exercises-img'
                  src={MedPic}
                  alt='Meditation instructions'
                />
                <p className='exercises-content'>
                  Make sure you are in a space where you will not be interupted.
                  this technique can also help you fall asleep and works best if
                  you are sitting or lying down comfortably.
                </p>
                <p className='exercises-content'>
                  Initially do 4 breath cycles: inhale, hold, exhale, building
                  up to 8.
                </p>
              </>
            ) : null}
            {selection === "f/s" ? (
              <>
                <h4 className='exercises-subtitle'>F or S Breathing</h4>
                <p className='exercises-content'>
                  Breath in however you like, but on the out breath make an F or
                  S sound as you breath out.
                </p>
                <p className='exercises-content'>
                  Make sure the out breath is a bit longer than the in breath.
                </p>
                <p className='exercises-content'>
                  Repeat this breathing for a few minutes and as you do look
                  around your surroundings and gently move your head around,
                  allowing your gaze to move with your head.
                </p>
                <p className='exercises-content'>
                  Just by moving your head and gaze you are sending the message
                  to your brain that you are in a safe environment. The
                  breathing and head movement soothe the nervous system.
                </p>
              </>
            ) : null}
            {selection === "SelfHolding" ? (
              <>
                <h4 className='exercises-subtitle'>Self-Holding</h4>
                <p className='exercises-content'>
                  1 You may have your eyes opened or closed, whatever feels most
                  comfortable for you.You may lie down or be seated. Get into a
                  comfortable position. Place one hand on your forehead. If you
                  are laying down, you may place 3 pillows to one side so you
                  can relax your arm onto the pillows as you rest your hand on
                  your forehead. Place the other hand on your heart. Leave your
                  hands in this position for 5-10 minutes. You can either leave
                  your hands here until you feel your body relaxing and a shift,
                  or try the method below.
                </p>
                <img
                  className='exercises-img'
                  src={selfHolding}
                  alt='self holding instructions'
                />
                <p className='exercises-content'>
                  2 Take the hand that is on your forehead and place it onto
                  your belly. Repeat as in STEP 1. Pay attention to inside your
                  body, to any feelings between the hands or sensations where
                  the hands are laying. Wait until there is a shift. Peter
                  Levine: “Then take the upper hand and put it on the belly. And
                  again just wait until there is some shift, until there is some
                  flow, and sometimes people, if they are unable to sleep or
                  they are afraid, they will have nightmares. If they do simple
                  things like that, they will fall into sleep much more easily.”
                </p>

                <img
                  className='exercises-img'
                  src={selfHolding2}
                  alt='self holding instructions'
                />
                <h4 className='exercises-subtitle'>
                  {" "}
                  Method - Feeling The Outside and Then The Inside
                </h4>

                <p className='exercises-content'>
                  When you place your attention on specific areas it deepens
                  perception of sensations in those areas. First, pay attention
                  to the hand that is on your forehead. Feel what the hand feels
                  like, inside and on the surface. For example, is it relaxed,
                  tense, warm, tin-gling? Feel what the hand feels when it’s
                  touching your forehead - does the hand feel that the forehead
                  feels hard? Warm? Tingling? What is it like for the hand to
                  feel the forehead? Simply be with the hand; gently rest your
                  focused attention on it for a little while. Now feel what the
                  second hand on the heart feels - how does that hand feel?
                  Heavy, tense, relaxed, cool on top? What does it sense when on
                  the heart? Does it feel warm, energized, tingly? Be with that
                  hand for a little bit.
                </p>
                <p className='exercises-content'>
                  Now we are going to switch and go inside the body. Feel the
                  forehead. What sensations are inside the forehead? How does
                  the fore-head sense the hand sitting on it? Does it feel some
                  weight, warmth, comfort? Sometimes there are no words for what
                  you sense. It’s OK. Just be with the sensations as they shift
                  and change for a while, even if you can’t describe them. Now
                  feel inside the heart/chest area. What sensations are in
                  there? Maybe a little tension or relaxation? You may even
                  sense some emotions or colors or shapes or qualities, like
                  slow wave motion or jagged textures or yellow or blue. Maybe a
                  fog or cloud. What does the chest feel with the hand sitting
                  on top of it? Does it feel a little pressure in that area,
                  some weight? Perhaps some warmth? Just sit with it for a
                  while. Be with the heart for a while. Was there any difference
                  sensing the part of the body doing the touching - the hands -
                  and the parts of body receiving the touch - the body? Did you
                  notice any difference between the two hands? Did you notice
                  any difference between the head and the heart? At first
                  pinpointing sensations in specific places that are near each
                  other can feel confusing, but it becomes clearer pretty fast
                  if you practice it a few times. You can do these in any order
                  that suits you, for example you may try: top hand, forehead,
                  bottom hand, heart.
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
      <Footer />
    </>
  );
}
