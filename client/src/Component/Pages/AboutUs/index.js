import React from "react";

import Header from "../../CommonComponent/Header";
import Logo from "../../../assets/logo.png";
import Button from "../../CommonComponent/Button";
import Footer from "../../CommonComponent/Footer";
import "./style.css";

export default function(props) {
  return (
    <>
      <Header {...props} className='triangle' />
      <main className='about-us'>
        <section className='about-us__section'>
          <img src={Logo} alt='nova-logo' />
          <p className='about-us__paragraph'>
            Nova means new star. A supernova is when two stars come together to
            create, for a short while, a light brighter than their own. Nova
            Foundation’s vision is a world without babyloss. Nova Foundation is
            a recently created social enterprise that is designed to provide
            comfort and practical trauma support to parents who have experienced
            pregnancy loss and babyloss. We will do this by running PAL
            antenatal classes which will in time pay for therapists, to ensure
            that no parent walks the path of babyloss alone.
          </p>

          <p className='about-us__link'>
            For more information please visit at
            <a
              href='https://www.novafoundation.org.uk/'
              target='_blank'
              rel='noopener noreferrer'
            >
              novafoundation.org.uk
            </a>
          </p>
          <Button
            name='Back'
            className='large-skip__button'
            onClick={() => props.history.goBack()}
          />
        </section>
        <Footer />
      </main>
    </>
  );
}
