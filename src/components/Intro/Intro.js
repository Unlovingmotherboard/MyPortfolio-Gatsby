import React, { Component } from 'react';
import RAnime from "react-anime"
import anime from "animejs"
import PropTypes, { func } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./IntroStyle.css"


const aboutMe = () => {

/*
555555 outerCircle outerCircleSVG
363535 middleCircle middleCircleSVG
272424 innerCircle innerCircleSVG
*/

    anime({
        targets: '.outerCircle',
        duration: 3000,
        scale: 5,
        fill: "#555555",
        easing: 'easeInOutQuad',
    });

    anime({
        targets: '.middleCircle',
        duration: 3100,
        scale: 7,
        fill: "#363535",
        easing: 'easeInOutQuad',
    });

    anime({
        targets: '.innerCircle',
        duration: 3200,
        scale: 12,
        fill: "#272424",
        easing: 'easeInOutQuad',
    });



    anime({
        targets: '.outerCircleSVG',
        duration: 500,
        fill: "#555555",
        easing: 'easeInOutQuad',
    });

    anime({
        targets: '.middleCircleSVG',
        duration: 500,
        fill: "#363535",
        easing: 'easeInOutQuad',
    });

    anime({
        targets: '.innerCircleSVG',
        duration: 500,
        fill: "#272424",
        easing: 'easeInOutQuad',
    });





    anime({
        targets: '#reverseStateButton',
        duration: 3000,
        opacity: 1,
        easing: 'easeInOutQuad',
        update: function () {
            document.getElementById("reverseStateButton").style.display = "block"
        }
    });
}



const revertToPreviousState = (p) => {

    anime({
        targets: '#reverseStateButton',
        duration: 1000,
        opacity: p.buttonOpacity,
        easing: 'easeInOutQuad',
        complete: function () {
            document.getElementById("reverseStateButton").style.display = "none"
        }
    });

    anime({
        targets: '.aboutMeCircle1',
        duration: 2000,
        scale: 1,
        fill: '#FFF',
        easing: 'easeInOutQuad'
    });

    anime({
        targets: '.circleSVG',
        duration: 2000,
        fill: '#000000',
        easing: 'easeInOutQuad'
    });
}

class Intro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            previousState: {
                textColor: "#FFF",
                buttonOpacity: 0,
                isTextHidden: false,
                isTextScaled: false,
            }
        };
    }

    //TODO - Try to figure out how to integrate state into how the portfolio works

    render() {
        return (
            <div id="introDiv">
                <div className="scene">
                    <div id="aboutMeCircleDiv">

                        <svg className="outerCircle" width="400" height="400">
                            <circle className="outerCircleSVG" cx="200" cy="200" r="200" />
                        </svg>

                        <svg className="middleCircle" width="300" height="300">
                            <circle className="middleCircleSVG" cx="150" cy="150" r="150" />
                        </svg>

                        <svg className="innerCircle" width="200" height="200">
                            <circle className="innerCircleSVG" cx="100" cy="100" r="100" />
                        </svg>

                    </div>
                </div>

                <div id="controlBox">
                    <div>
                        <h1 onClick={aboutMe} className="controlBoxText">About Me</h1>
                    </div>
                    <div>
                        <h1 className="controlBoxText">Projects</h1>
                    </div>
                    <div>
                        <h1 className="controlBoxText">Contact</h1>
                    </div>
                    <div id="reverseStateButton">
                        <button onClick={() => revertToPreviousState(this.state.previousState)}>Go Back</button>
                    </div>
                </div>
            </div>
        )
    }
};

export default Intro;
