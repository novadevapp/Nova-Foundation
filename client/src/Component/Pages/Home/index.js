import React from "react";

import Card from '../../CommonComponent/ServiceCard';
import Header from '../../CommonComponent/Header';
import Footer from '../../CommonComponent/Footer'
import './style.css'

export default function (props) {

  function handleRedirection(path) {
    props.history.push(path);
  }

  return (
    <>
      <Header {...props} className='header' />
      <main className='home-page'>
        <section className='home-page__section'>
          <h2 className='home-page__title'>
            Discover our resources. We hope they make you feel more comforted.
          </h2>
          <div>
            <Card
              icon='book'
              title='Information'
              description='Understand how you feel and how to manage your feelings'
              action={() => handleRedirection("/information")}
            />
               <Card
              icon='home'
              title='Personal Space'
              description='Your own safe space to connect with your baby and how you feel'
              action={() => handleRedirection("/personal-space")}
            />
            <Card
              icon='story'
              title='Stories'
              description='Learn how you can share your story'
              action={() => handleRedirection("/stories")}
            />
         
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
