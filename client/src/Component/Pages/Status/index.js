import React, { Component } from "react";

import Header from "../../CommonComponent/Header";
import Input from "../../CommonComponent/Input";
import Button from "../../CommonComponent/Button";
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

export default class Status extends Component {
  state = {
    name: "Tara",
    status: {
      select: "",
      value: ""
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

  handleClick = value => e => {
    this.setState(prevState => {
      const { colors } = prevState;
      const newColor = Object.keys(colors).reduce((acc, color) => {
        acc[color] = { color: "#A0A3A6" };
        return acc;
      }, {});
      newColor[value] = { color: "#c33650" };
      return { colors: newColor, status: { select: value } };
    });
  };
  handleChange = e => {
    const value = e.target.value;
    this.setState(prevState => {
      return { status: { ...prevState.status, value } };
    });
  };

  render() {
    const {
      name,
      colors: { sad, laugh, meh, mehRolling, grimace, frown, cry, tired, smile }
    } = this.state;
    return (
      <>
        <Header isLogged={true} />
        <div className="status">
          <h3 className="status__greeting">
            Hi <span className="status__username">{name}</span>
          </h3>
          <p className="status__question">How are you today ?</p>
          <div className="status__emoji-container">
            <div className="status__emoji">
              <Sad fill={sad.color} onClick={this.handleClick("sad")} />
              <p className="status__text" style={{ color: sad.color }}>
                Sad
              </p>
            </div>
            <div className="status__emoji">
              <Cry fill={cry.color} onClick={this.handleClick("cry")} />
              <p className="status__text" style={{ color: cry.color }}>
                Cry
              </p>
            </div>
            <div className="status__emoji">
              <Laugh fill={laugh.color} onClick={this.handleClick("laugh")} />
              <p className="status__text" style={{ color: laugh.color }}>
                Laugh
              </p>
            </div>
            <div className="status__emoji">
              <Smile fill={smile.color} onClick={this.handleClick("smile")} />
              <p className="status__text" style={{ color: smile.color }}>
                Smile
              </p>
            </div>
            <div className="status__emoji">
              <Meh fill={meh.color} onClick={this.handleClick("meh")} />
              <p className="status__text" style={{ color: meh.color }}>
                Meh
              </p>
            </div>
            <div className="status__emoji">
              <Frown fill={frown.color} onClick={this.handleClick("frown")} />
              <p className="status__text" style={{ color: frown.color }}>
                Frown
              </p>
            </div>
            <div className="status__emoji">
              <Tired fill={tired.color} onClick={this.handleClick("tired")} />
              <p className="status__text" style={{ color: tired.color }}>
                Tired
              </p>
            </div>
            <div className="status__emoji">
              <MehRolling
                fill={mehRolling.color}
                onClick={this.handleClick("mehRolling")}
              />
              <p className="status__text" style={{ color: mehRolling.color }}>
                Meh Rolling
              </p>
            </div>
            <div className="status__emoji">
              <Grimace
                fill={grimace.color}
                onClick={this.handleClick("grimace")}
              />
              <p className="status__text" style={{ color: grimace.color }}>
                Grimace
              </p>
            </div>
          </div>
          <p className="status__question">What's in your mind ?</p>
          <Input
            id="status"
            label=""
            placeholder="Thoughts"
            type="text"
            action={this.handleChange}
          />
          <div>
            <Button name="Save" className="large-save__button" />
            <Button name="Skip" className="large-skip__button" />
          </div>
        </div>
      </>
    );
  }
}
