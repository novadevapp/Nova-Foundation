import React from "react";
import "./style.css";
import Header from "../../CommonComponent/Header";
import Footer from "../../CommonComponent/Footer";
import Button from "../../CommonComponent/Button";
import IconF from "./icon-f";

const Stories = props => {
  return (
    <>
      <Header {...props} />
      <h3 className='stories-title'>Sharing Your Story</h3>
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
