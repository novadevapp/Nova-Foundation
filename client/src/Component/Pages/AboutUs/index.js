import React from 'react';

import Header from '../../CommonComponent/Header';
import Logo from '../../../assets/logo.png';
import Button from '../../CommonComponent/Button';

import './style.css'

export default function (props) {
  return (
    <>
      <Header {...props} className='triangle' />
      <main className='about-us'>
        <section className='about-us__section'>
          <img src={Logo} alt='nova-logo' />
          <p className='about-us__paragraph'>
            Nova means new star. A supernova is when two stars
            come together to create, for a short while, a light
            brighter than their own.
            Nova Foundation’s vision is a world without babyloss.
            Nova’s mission is to ensure that families at all stages
            of pregnancy and babyloss of a child up to 12 months
            old receive immediate, adaptive, long term and practical
            therapeutic trauma and bereavement support for 14 months,
            and in subsequent pregnancies.
        </p>
          <Button name='Back' className='large-skip__button' onClick={() => props.history.goBack()} />
        </section>
      </main>
    </>
  )


}