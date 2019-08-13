import React, { Component } from 'react';
import ReactNotification from "react-notifications-component";


import Footer from '../../CommonComponent/Footer';
import Header from '../../CommonComponent/Header';
import Input from '../../CommonComponent/Input';
import Button from '../../CommonComponent/Button';
import validateField from './validation';
import notification from '../../helpers/notification';
import Error from './error';

import "react-notifications-component/dist/theme.css";
import './style.css';

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: {
        value: '',
        error: '',
      },

      email: {
        value: '',
        error: '',
      },

      password: {
        value: '',
        error: '',
      },

      confirmPassword: {
        value: '',
        error: '',
      },

      nickName: {
        value: '',
        error: '',
      },

      babyName: {
        value: '',
        error: '',
      },
    }

    this.validateField = validateField.bind(this);
    this.notificationDOMRef = React.createRef();
  }


  validateInput = ({ target: { value, name } }) => {
    let errorMessage;
    let passwordsError;

    // Check passwords: value1 is pas2, value2 is pas1 from the state

    const value2 = name === 'confirmPassword' && this.state.password.value;

    errorMessage = this.validateField(name, value, value2);

    // each change to pas1, compare both passwords

    name === 'password' && value === this.state.confirmPassword.value
      ?
      passwordsError = false
      :
      passwordsError = 'Passwords dont\' match'

    // Update State & Error Messages if Exists

    name === 'password'
      ?
      this.setState((prevState) => {
        const confirmValue = prevState.confirmPassword.value;
        return {
          [name]: {
            value, error: errorMessage
          }, confirmPassword: {
            value: confirmValue, error: passwordsError
          }
        }
      })
      :
      this.setState({ [name]: { value, error: errorMessage } });
  }

  submitForm = (e) => {
    e.preventDefault();
    const {
      name,
      babyName,
      nickName,
      email,
      password,
    } = this.state;

    // check if the user has not fill any inputs

    Object.keys(this.state).some(element => !(element.value))
      ?
      notification(
        this.notificationDOMRef,
        'warning',
        'Please check all fields',
        'Validation Error',
      )
      :

      // check if there is any error

      Object.keys(this.state).some(element => element.error)
        ?
        notification(
          this.notificationDOMRef,
          'warning',
          'Please check all fields',
          'Validation Error',
        )
        :

        // submit form

        fetch('/api/v1/register', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            data: {
              name: name.value,
              babyName: babyName.value,
              nickName: nickName.value,
              email: email.value,
              password: password.value,
            }
          }),
        }).then(response => response.json())
          .then((error, data) => {

            // Errors
            if (error) return notification(
              this.notificationDOMRef,
              'warning',
              error,
              'ERROR',
            );

            // Success
            this.props.history.push('/home');
          })
          .catch(error => {
            notification(
              this.notificationDOMRef,
              'warning',
              'Sorry, something went wrong. Please try again!',
              'ERROR',
            );
          });
  }

  render() {
    const {
      name,
      babyName,
      email,
      password,
      confirmPassword,
      nickName,
    } = this.state;

    return (
      <>
        <Header className='register minimal' />
        <main className='register-page'>
          <form className='register-page__form'>
            <Input
              id='name'
              label='Your name'
              type='text'
              action={this.validateInput}
            ></Input>
            <Error message={name.error && name.error} />
            <Input
              id='babyName'
              label='Your baby name'
              type='text'
              action={this.validateInput}
            ></Input>
            <Error message={babyName.error && babyName.error} />
            <Input
              id='nickName'
              label='How should we refer to you?'
              type='text'
              action={this.validateInput}
            ></Input>
            <Error message={nickName.error && nickName.error} />
            <Input
              id='email'
              label='Your email'
              type='email'
              action={this.validateInput}
            ></Input>
            <Error message={email.error && email.error} />
            <Input
              id='password'
              label='Your password'
              type='password'
              action={this.validateInput}
            ></Input>
            <Error message={password.error && password.error} />
            <Input
              id='confirmPassword'
              label='Confirm password'
              type='password'
              action={this.validateInput}
            ></Input>
            <Error message={confirmPassword.error && confirmPassword.error} />
            <Button
              name='Register'
              className='register__button'
              onClick={this.submitForm} />
            <p className='register-page__login-message'>
              Have an account?
            <span className='register-page__login-anchor' onClick={() => { this.props.history.push('/login') }}> Log in</span>
            </p>
          </form>
        </main>
        <ReactNotification ref={this.notificationDOMRef} />
        <Footer />
      </>
    );
  }
}

