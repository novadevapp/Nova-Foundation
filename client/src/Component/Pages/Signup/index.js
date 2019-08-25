import React, { Component } from 'react';
import ReactNotification from "react-notifications-component";

import Footer from '../../CommonComponent/Footer';
import Header from '../../CommonComponent/Header';
import Input from '../../CommonComponent/Input';
import Button from '../../CommonComponent/Button';
import validateField from './validation';
import notification from '../../helpers/notification';
import Error from './error';
import Loading from "../../CommonComponent/Loading";

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
      loading: false,
    }

    this.validateField = validateField.bind(this);
  }

  notificationDOMRef = React.createRef();

  validateInput = ({ target: { value, name } }) => {
    let errorMessage;
    let passwordsError;

    // Check passwords: value1 is pas2, value2 is pas1 from the state

    const value2 = name === 'confirmPassword' && this.state.password.value;

    errorMessage = this.validateField(name, value, value2);

    // each change to pas1, compare both passwords

    name === 'password' && value === this.state.confirmPassword.value
      ?
      passwordsError = ''
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

    // check if there are any errors, then don't submit
    // if Empty fields but no errors in state

    if ((Object.keys(this.state).some(key => this.state[key].error))) {
      return;
    }
    Object.keys(this.state).some(key => !(this.state[key].value))
      ?
      notification(
        this.notificationDOMRef,
        'warning',
        'Please Fill all fields',
        'Oops Sorry!',
      )
      :
      // Success: submit form 
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
      .then(result => {
        this.setState({ loading: false });
        //Error
        if (result.error) return notification(
          this.notificationDOMRef,
          'warning',
          result.error,
          'ERROR',
        );
        // Success
        new Promise(async (resolve, reject) => {
          await this.props.setIsLogged({ auth: true, username: result.data.username });
          resolve(this.props.history.push('/status'));
        })
      })
      .catch(error => {
        this.setState({ loading: false });
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
      loading,
    } = this.state;

    return (
      <>
        <Header {...this.props} className='register minimal' />
        <main className='register-page'>
          <form className='register-page__form'>
            <Input
              id='name'
              label='Your name'
              type='text'
              action={this.validateInput}
            ></Input>
            <Error message={name.error} />
            <Input
              id='babyName'
              label="Your baby's name"
              type='text'
              action={this.validateInput}
              placeholder='e.g. Billy or nickname'
            ></Input>
            <Error message={babyName.error} />
            <Input
              id='nickName'
              label='What name would you like us to call you?'
              type='text'
              action={this.validateInput}
              placeholder="e.g. Firstname, Billy's Mum, Zara's Dad"
            ></Input>
            <Error message={nickName.error} />
            <Input
              id='email'
              label='Your email'
              type='email'
              action={this.validateInput}
            ></Input>
            <Error message={email.error} />
            <Input
              id='password'
              label='Your password'
              type='password'
              action={this.validateInput}
            ></Input>
            <Error message={password.error} />
            <Input
              id='confirmPassword'
              label='Confirm password'
              type='password'
              action={this.validateInput}
            ></Input>
            <Error message={confirmPassword.error} />
            {loading && <Loading className="small-loader" />}
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

