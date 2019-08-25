import React from "react";
import "./style.css";
import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Button from "../../CommonComponent/Button";
import IconF from "./icon-f";
import IconM from "./icon-m";
const Stories = props => {
  return (
    <>
      <Header {...props} />
      <h3 className='stories-title'>Sharing stories</h3>
      <div className='stories-container'>
        <IconF />
        <p className='stories-content'>
          While your grief will always be with you, the first two years are
          particularly intense. As part of this app eventually we would like to
          add an audio section of stories, something we do not have capacity for
          at the moment. If your loss was more than two years ago, and you would
          be interested in sharing your story, please get in touch with
          info@novafoundation.org.uk
        </p>
        <p className='stories-content'>
          We encourage you to journal. It is a healthy way to heal as it gets
          your emotions on the inside out onto paper or screen. Some experiences
          are too painful for words, and drawing in a journal can be just as
          cathartic. Studies have shown that journaling can improve sleep, and
          reduce anxiety and stress. Journaling does not have to take long and
          take 5 minutes a few times a week, giving you space to connect with
          how you are feeling, and also connect with your baby.
        </p>
        <p className='stories-content'>
          If you are not sure where to start you could write about why you chose
          your baby's name, whether they have any symbols or animals, lessons or
          knowledge your baby has taught you, how you are feeling or anything
          else that is part of you or your baby's story. There is no right or
          wrong with journaling, it is a space for you and only you to get your
          inner thoughts out and connect with how you feel.
        </p>
        <IconM />
        <Button
          className='large-back__button'
          name='Back'
          onClick={() => props.history.goBack()}
        />
      </div>
      <Footer />
    </>
  );
};

export default Stories;
