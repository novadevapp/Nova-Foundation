import React, { Component } from "react";
import ReactNotification from "react-notifications-component";
import { withRouter } from "react-router-dom";

import notification from "../../helpers/notification";
import Header from "../../CommonComponent/Header";
import Input from "../../CommonComponent/Input";
import Button from "../../CommonComponent/Button";
import Footer from "../../CommonComponent/Footer";
import Loading from "../../CommonComponent/Loading";

import "react-notifications-component/dist/theme.css";
import "./style.css";
import { fail } from "assert";

class Login extends Component {
  state = {
    email: {
      value: "",
      error: ""
    },
    password: {
      value: "",
      error: ""
    },
    loading: false
  };

  notificationDOMRef = React.createRef();

  handleInput = e => {
    let { name, value } = e.target;
    if (name === "email") value = value.trim();
    if (!value)
      this.setState({ [name]: { error: `please fill the ${name} field` } });
    else this.setState({ [name]: { value } });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email.value || !password.value) {
      const emailError = email.value ? "" : "please fill the email field";
      const passwordError = password.value
        ? ""
        : "please fill the password field";
      this.setState(prev => {
        return {
          email: { ...prev.email, error: emailError },
          password: { ...prev.password, error: passwordError }
        };
      });
      return;
    } else {
      this.setState({ loading: true });
      fetch("/api/v1/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          data: { email: email.value, password: password.value }
        })
      })
        .then(res => res.json())
        .then(({ data, error }) => {
          if (error) {
            notification(
              this.notificationDOMRef,
              "danger",
              data.error,
              "Error"
            );
            this.setState({ loading: false });
          } else {
            return new Promise(async (resolve, reject) => {
              await this.props.setIsLogged({
                auth: true,
                username: data.username
              });
              this.props.history.push("/home");
              resolve();
            });
          }
        })
        .catch(() => {
          this.setState({ loading: false });
          notification(
            this.notificationDOMRef,
            "danger",
            "Can't login please try again",
            "Error"
          );
        });
    }
  };
  render() {
    const { email, password, loading } = this.state;
    return (
      <>
        <Header {...this.props} />
        <div className="login">
          <form onSubmit={this.handleSubmit}>
            <h1 className="login__header">Please Login</h1>
            <Input
              id="email"
              label="Your email"
              placeholder="Email"
              type="email"
              action={this.handleInput}
            />
            {email.error && <p className="login__error">{email.error}</p>}
            <Input
              id="password"
              label="Your password"
              placeholder="Password"
              type="password"
              action={this.handleInput}
            />
            {password.error && <p className="login__error">{password.error}</p>}
            {loading && <Loading className="small-loader" />}
            <Button
              name="Login"
              className="register__button login__btn"
              onClick={this.handleSubmit}
            />
          </form>
        </div>
        <ReactNotification ref={this.notificationDOMRef} />
        <Footer />
      </>
    );
  }
}

export default withRouter(Login);
