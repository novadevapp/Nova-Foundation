import React from "react";
import "./style.css";
import Button from "../../CommonComponent/Button";

const Trauma = () => {
  return (
    <div>
      <section className="trauma-section">
        <h3 className="sub-info-title">Trauma </h3>
        <div className="info-content">
          <p>
            Trauma – trauma is your normal bodies reaction to an abnormal event.
            There are many crossovers between trauma and grief. The main
            symptoms of trauma include anxiety, replaying images or moments in
            your mind/flashbacks, being triggered, nightmares, unexplained
            pains, feeling fearful, tinglings or numbness in your body (arm
            pain/ache is very common for babyloss mums), feeling
            disconnected/detached, being on edge all the time/jumpy and unable
            to relax, having persistent haunting and unwanted thoughts, feeling
            overwhelmed/overstimulated in public spaces, hypersensitivity to
            sound.
          </p>
          <p>
            Have you experienced any of the above symptoms and if so, what are
            they?
          </p>
          <p>
            If you feel you are traumatised you should seek professional support
            from a trauma therapist. Trauma can be flushed out the system very
            quickly (3-4 sessions) leaving you free to focus on grieving. If you
            feel you have ptsd, use the app to track your feelings. If traumatic
            symptoms persist for four weeks please go to your GP if you find the
            wait for an appointment is too long you can go privately by googling
            trauma therapists in your area. There is additional information
            about trauma and different therapies available on our website.
          </p>
          <a
            href=" https://www.nhs.uk/conditions/post-traumatic-stress-disorder-ptsd/treatment/"
            target="_blank"
          >
            For information on treatements for PTSD click here
          </a>
        </div>
        <Button name="Back" className="large-back__button" />
      </section>
    </div>
  );
};

export default Trauma;
