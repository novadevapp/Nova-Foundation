import React, { Component } from "react";
import ReactNotification from "react-notifications-component";

import Header from "../../CommonComponent/Header";
import Input from "../../CommonComponent/Input";
import Button from "../../CommonComponent/Button";
import notification from "../../helpers/notification";
import {
  Sad,
  Laugh,
  Meh,
  MehRolling,
  Cry,
  Grimace,
  Smile,
  Frown,
  Tired
} from "./Emogi";

import "./style.css";
import "react-notifications-component/dist/theme.css";

export default class Status extends Component {
  state = {
    status: {
      select: "",
      value: "",
      error: ""
    },
    colors: {
      sad: {
        color: "#A0A3A6"
      },
      laugh: {
        color: "#A0A3A6"
      },
      smile: {
        color: "#A0A3A6"
      },
      grimace: {
        color: "#A0A3A6"
      },
      meh: {
        color: "#A0A3A6"
      },
      mehRolling: {
        color: "#A0A3A6"
      },
      tired: {
        color: "#A0A3A6"
      },
      cry: {
        color: "#A0A3A6"
      },
      frown: {
        color: "#A0A3A6"
      }
    }
  };
  notificationDOMRef = React.createRef();

  handleClick = value => e => {
    this.setState(prevState => {
      const { colors } = prevState;
      const newColor = Object.keys(colors).reduce((acc, color) => {
        acc[color] = { color: "#A0A3A6" };
        return acc;
      }, {});
      newColor[value] = { color: "#c33650" };
      return {
        colors: newColor,
        status: { value: prevState.status.value, select: value }
      };
    });
  };
  handleChange = e => {
    const value = e.target.value;
    this.setState(prevState => {
      return { status: { select: prevState.status.select, value } };
    });
  };

  handleSave = () => {
    const {
      status: { value, select }
    } = this.state;
    const newValue = value.trim();
    if (!newValue && !select) {
      this.setState({
        status: { error: "Please at least answer one question" }
      });
    } else {
      fetch("/api/v1/status", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ data: { value, select } })
      })
        .then(res => res.json())
        .then(result => {
          if (result.auth === false) {
            return new Promise(async (resolve, reject) => {
              await this.props.setIsLogged({ auth: false, username: '' });
              this.props.history.push('/login');
              resolve();
            })
          }
          if (result.error) {
            notification(this.notificationDOMRef, "warning", result.error, "Warning");
          } else {
            this.handleSkipe();
          }
        })
        .catch(() => {
          notification(
            this.notificationDOMRef,
            "danger",
            "Server Error Please Try Again",
            "Error"
          );
        });
    }
  };

  handleSkipe = () => {
    this.props.history.push("/home");
  };

  render() {
    const {
      colors: {
        sad,
        laugh,
        meh,
        mehRolling,
        grimace,
        frown,
        cry,
        tired,
        smile
      },
      status: { error }
    } = this.state;
    return (
      <>
        <Header {...this.props} />
        <div className='status'>
          <h3 className='status__greeting'>
            Hi{" "}
            <span className='status__username'>
              {this.props.isLogged.username}
            </span>
          </h3>
          <p className='status__question'>How are you today ?</p>
          <div className='status__emoji-container'>
            <div className='status__emoji'>
              <Sad fill={sad.color} onClick={this.handleClick("sad")} />
              <p className='status__text' style={{ color: sad.color }}>
                Sad
              </p>
            </div>
            <div className='status__emoji'>
              <Cry fill={cry.color} onClick={this.handleClick("cry")} />
              <p className='status__text' style={{ color: cry.color }}>
                Upset
              </p>
            </div>
            <div className='status__emoji'>
              <Laugh fill={laugh.color} onClick={this.handleClick("laugh")} />
              <p className='status__text' style={{ color: laugh.color }}>
                Positive
              </p>
            </div>
            <div className='status__emoji'>
              <Smile fill={smile.color} onClick={this.handleClick("smile")} />
              <p className='status__text' style={{ color: smile.color }}>
                Hopeful
              </p>
            </div>
            <div className='status__emoji'>
              <Meh fill={meh.color} onClick={this.handleClick("meh")} />
              <p className='status__text' style={{ color: meh.color }}>
                Adjusting
              </p>
            </div>
            <div className='status__emoji'>
              <Frown fill={frown.color} onClick={this.handleClick("frown")} />
              <p className='status__text' style={{ color: frown.color }}>
                Depressed
              </p>
            </div>
            <div className='status__emoji'>
              <Tired fill={tired.color} onClick={this.handleClick("tired")} />
              <p className='status__text' style={{ color: tired.color }}>
                Anxious
              </p>
            </div>
            <div className='status__emoji'>
              <MehRolling
                fill={mehRolling.color}
                onClick={this.handleClick("mehRolling")}
              />
              <p className='status__text' style={{ color: mehRolling.color }}>
                Despondent
              </p>
            </div>
            <div className='status__emoji'>
              <Grimace
                fill={grimace.color}
                onClick={this.handleClick("grimace")}
              />
              <p className='status__text' style={{ color: grimace.color }}>
                Angry
              </p>
            </div>
          </div>
          <p className='status__question'>What's in your mind ?</p>
          <Input
            id='status'
            label=''
            placeholder='Thoughts'
            type='text'
            action={this.handleChange}
          />
          <div>
            {error && <p className='status__error'>{error}</p>}
            <Button
              name='Save'
              className='large-save__button'
              onClick={this.handleSave}
            />
            <Button
              name='Skip'
              className='large-skip__button'
              onClick={this.handleSkipe}
            />
          </div>
        </div>
        <ReactNotification ref={this.notificationDOMRef} />
      </>
    );
  }
}
