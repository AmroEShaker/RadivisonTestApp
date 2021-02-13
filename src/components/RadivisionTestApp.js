import React from "react";
import Header from "./Header";
import ImageOne from "../../public/assets/ImageOne.jpg";
import ImageTwo from "../../public/assets/ImageTwo.jpg";
import ImageThree from "../../public/assets/ImageThree.jpg";

export default class IndecisionApp extends React.Component {
  state = {
    image: ImageOne,
    button1Clicked: true,
    button2Clicked: false,
    button3Clicked: false,
  };

  handleButtonOneClick = () => {
    return this.setState(() => ({
      image: ImageOne,
      button1Clicked: true,
      button2Clicked: false,
      button3Clicked: false,
    }));
  };

  handleButtonTwoClick = () => {
    return this.setState(() => ({
      image: ImageTwo,
      button1Clicked: false,
      button2Clicked: true,
      button3Clicked: false,
    }));
  };

  handleButtonThreeClick = () => {
    return this.setState(() => ({
      image: ImageThree,
      button1Clicked: false,
      button2Clicked: false,
      button3Clicked: true,
    }));
  };

  handleImageClick = () => {
    if (this.state.image == ImageOne) {
      return this.setState(() => ({
        image: ImageTwo,
        button1Clicked: false,
        button2Clicked: true,
        button3Clicked: false,
      }));
    } else if (this.state.image == ImageTwo) {
      return this.setState(() => ({
        image: ImageThree,
        button1Clicked: false,
        button2Clicked: false,
        button3Clicked: true,
      }));
    } else {
      return this.setState(() => ({
        image: ImageOne,
        button1Clicked: true,
        button2Clicked: false,
        button3Clicked: false,
      }));
    }
  };

  render() {
    return (
      <div>
        <Header title="Radivison Test App"/>
        <div className="container__image">
          <img
            className="image"
            src={this.state.image}
            onClick={this.handleImageClick}
          />
        </div>
        <div className="container__buttons">
          <button
            className={
              this.state.button1Clicked ? "button button--link" : "button"
            }
            onClick={this.handleButtonOneClick}
          >
            Option One
          </button>
          <button
            className={
              this.state.button2Clicked ? "button button--link" : "button"
            }
            onClick={this.handleButtonTwoClick}
          >
            Option Two
          </button>
          <button
            className={
              this.state.button3Clicked ? "button button--link" : "button"
            }
            onClick={this.handleButtonThreeClick}
          >
            Option Three
          </button>
        </div>
      </div>
    );
  }
}
