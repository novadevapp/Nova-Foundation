import React from "react";
import "./style.css";
import Button from "../../CommonComponent/Button";

const Grief = () => {
  return (
    <div>
      <section className="grief-section">
        <h3 className="sub-info-title">Grief</h3>
        <div className="info-content">
          <p>
            Grief can feel like drowning in a freezing sea at midnight. It can
            be overwhelming and frightening, but is always changing, along with
            the feelings that go with it. Grief has no time limit.
          </p>
          <p>
            You may have heard of the five stages of grief – denial, anger,
            bargaining, depression and acceptance. These are not linear stages
            that you will neatly go though, you may experience some but not
            others, feel some again and again or feel them all at once. Grief is
            more like an upwards spiral than a staircase, you will often feel
            the same emotion, with different intensities. You will not always
            feel like this.
          </p>
          <p>
            Have you experienced any of these feelings and how do you feel right
            now?
          </p>
        </div>
      </section>
      <section className="symptoms-section">
        <h3 className="symptoms-title">Symptoms of Grief</h3>
        <div className="info-content">
          <p>
            Body pains - Grief can manifest itself in many ways including
            through your body. What happened to you is traumatic. You could have
            numbness (arm numbness/aching is very common with babyloss mothers).
            You may have migraines and headaches, or pain or tingling
            sensations.
          </p>

          <p>Have you had any body pains and aches and if so what are they?</p>
          <p>
            Exhaustion - In the first six weeks it is likely you will experience
            physical exhaustion, with emotional exhaustion lifting a bit by
            month three. At times you may feel like you are going mad, but
            memory loss is very common, often made worse by headaches, and,
            although it can be frightening, is nothing to be alarmed about.
          </p>
          <p>
            You may feel numb, have difficulty concentrating, have a loss of
            appetite, poor sleep etc. At points you may feel pure despair and an
            intense sadness. This is natural.
          </p>
          <p>
            Guilt is a common reaction to babyloss. Guilt can feel like a
            prison. Please know that nothing you said, did, ate, read caused you
            to lose your baby. You are not to blame, it was not your fault.
            Please let people look after you treat yourself kindly as you would
            treat a friend.
          </p>
          <p>What nice things are you going to do to look after yourself?</p>
          <p>
            Anger – this could be at the hospital, at the world, at other people
            for saying well meaning but silly things, at yourself. Feeling life
            is meaningless, that life is unjust and good people have bad things
            happen to them, at wanting answers and having none. It is perfectly
            natural to feel angry about what happened, it is a feeling and will
            pass. Talk to someone about how you feel. Take time to breathe and
            respond to people that may upset you, calmly. Journal your feelings.
            Get your anger out in a way that feels good for you but that does
            not impact other people.
          </p>
          <p>
            What symptoms of grief have you experienced and how do you think you
            could let the anger out?
          </p>
          <p>
            Depression – Grief and depression are two very different things.
            They can have similar symptoms such as poor sleep, lack of appetite
            and feeling intensely sad. The sting of grief lessens over time,
            whereas depression does not. Depression is an illness that can be
            treated, whereas grief subsides over time. If your feelings do not
            change in the first few months, or if you are unsure if what you are
            feeling is grief or depression, please go to your GP.
          </p>
        </div>
      </section>
      <Button name="Back" className="large-back__button" />
    </div>
  );
};

export default Grief;
