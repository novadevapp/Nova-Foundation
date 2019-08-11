import React, { Component } from 'react';
import ReactNotification from "react-notifications-component";

import "react-notifications-component/dist/theme.css";

import Footer from '../../CommonComponent/Footer';
import Header from '../../CommonComponent/Header';
import Input from '../../CommonComponent/Input';
import Button from '../../CommonComponent/Button';
import validateField from './validation';
import Error from './error';

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

  notification = (type, message) => {
    this.notificationDOMRef.current.addNotification({
      message,
      type,
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: { duration: 5000 },
      dismissable: { click: true },
    });
  }

  validateInput = ({ target: { value, name } }) => {
    let errorMessage;
    let passwordsError;
    
    // Check if inputs are valid

    const value2 = name === 'confirmPassword' && this.state.password.value;
    
    errorMessage = this.validateField(name, value, value2);

    // Check passwords: if they match or not...

    name === 'password' && value !== this.state.confirmPassword.value
      ?
      passwordsError = 'Passwords dont\' match'
      :
      passwordsError = false;

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

  submitForm = async (e) => {
    e.preventDefault();
    const {
      name,
      babyName,
      nickName,
      email,
      password,
    } = this.state;

    Object.keys(this.state).some(element => !(element.value))
      ?
      this.notification('warning', 'Please check all fields')
      :
      Object.keys(this.state).some(element => element.error)
        ?
        this.notification('warning', 'Please check all fields')
        :
        // submit form
        console.log({
          data: {
            name: name.value,
            babyName: babyName.value,
            nickName: nickName.value,
            email: email.value,
            password: password.value,
          }
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
            <span className='register-page__login-anchor' onClick={()=>{this.props.history.push('/login')}}> Log in</span>
            </p>
          </form>
        </main>
        <ReactNotification ref={this.notificationDOMRef} />
        <Footer />
      </>
    );
  }
}

