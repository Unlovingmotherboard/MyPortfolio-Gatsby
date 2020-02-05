import React, { Component } from 'react';
import RAnime from "react-anime"
import anime from "animejs"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./IntroStyle.css"


const me1 = () => {
    anime({
        targets: '#introDiv',
        duration: 2000,
        backgroundColor: '#000000',
        easing: 'easeInOutQuad'
    });

    anime({
        targets: '.controlBoxText',
        duration: 2000,
        color: '#FFF',
        easing: 'easeInOutQuad'
    });

    anime({
        targets: '.circle1',
        duration: 2000,
        scale: 20,
        fill: '#FFF',
        easing: 'easeInOutQuad'
    });

    anime({
        targets: '.circleSVG',
        duration: 2000,
        fill: '#b4eb34',
        easing: 'easeInOutQuad'
    });
}

const revertToPreviousState = () => {
    console.log(this.state.previousState)
}

class Intro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            previousState: {
                backgroundColor: "#000000",
                color: "#FFF"
            }
        };
      }

      //TODO - Try to figure out how to integrate state into how the portfolio works

    render() {
        return (
            <div id="introDiv">
                <div className="scene">
                    <div id="circle">
                        <svg className="circle1" width="200" height="200">
                            <circle className="circleSVG" cx="100" cy="100" r="90" />
                        </svg>
                    </div>
                </div>

                <div id="controlBox">
                    <div>
                        <h1 onClick={me1} className="controlBoxText">About Me</h1>
                    </div>
                    <div>
                        <h1 className="controlBoxText">Projects</h1>
                    </div>
                    <div>
                        <h1 className="controlBoxText">Contact</h1>
                    </div>
                    <div>
                        <button>Go Back</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Intro;
