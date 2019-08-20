import React from 'react';

import Header from '../../CommonComponent/Header';
import HomeIcon from '../../CommonComponent/ServiceCard/homeIcon';
import Button from '../../CommonComponent/Button';
import Footer from '../../CommonComponent/Footer';

import './style.css'

export default function (props) {

  function handleRedirection(path) {
    props.history.push(path);
  }
  return (
    <>
      <Header {...props} />
      <main className='personal-space'>
        <section className='personal-space__section'>
          <div className='personal-space__header'>
            <HomeIcon />
            <h3>Personal Space</h3>
          </div>
          <div className='personal-space__cards'>
            <div className='personal-space__row'>
              <Button
                name='Pictures'
                className='personal-space__button'
                onClick={() => handleRedirection('/pictures')}
              />
              <Button
                name='Poems'
                className='personal-space__button'
                onClick={() => handleRedirection('/poems')}
              />
            </div>
            <div className='personal-space__row'>
              <Button
                name='Exercises'
                className='personal-space__button'
                onClick={() => handleRedirection('/exercises')}
              />
              <Button
                name='Journal'
                className='personal-space__button'
                onClick={() => handleRedirection('/journal')}
              />
            </div>
          </div>
          <Button
            name='Back'
            className='large-skip__button'
            onClick={() => props.history.goBack()}
          />
        </section>
      </main>
      <Footer />
    </>

  )
}