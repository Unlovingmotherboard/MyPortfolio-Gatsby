import React, { Component } from 'react';
import RAnime from "react-anime"
import anime from "animejs"
import PropTypes, { func } from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./IntroStyle.css"


const aboutMeTimeline = () => {

    let t1 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 2000,
    });
    let t2 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 4100,
    });
    let t3 = anime.timeline({
        easing: 'easeOutExpo',
        duration: 6200,
    });

    let aboutMeText = anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000,
    })


    aboutMeText.add({
        targets: '.aboutMeTextDIV',
        easing: 'easeOutExpo',
        translateY: -200,
    }).add({
        targets: '.aboutMeTextDIV',
        easing: 'easeOutExpo',
        scale: 2
    })


    /* 
        contactTextDIV
        projectsTextDIV
    */

    // anime({
    //     targets: '.aboutMeTextDIV',
    //     duration: 3000,
    //     easing: 'easeOutExpo',
    //     translateY: -200,
    // })
    anime({
        targets: '.contactTextDIV',
        duration: 100,
        easing: 'easeOutExpo',
        translateX: -2000,
    })
    anime({
        targets: '.projectsTextDIV',
        duration: 100,
        easing: 'easeOutExpo',
        translateX: 2000,
    })

    //THIS SCALES THE CIRCLES
    t1.add({
        targets: '.outerCircle',
        scale: 7,
    })
    anime({
        targets: '.outerCircleSVG',
        duration: 1000,
        fill: "#6e90fa",
        easing: 'easeInOutQuad',
    });

    t2.add({
        targets: '.middleCircle',
        scale: 7,
    })
    anime({
        targets: '.middleCircleSVG',
        duration: 1000,
        fill: "#4270ff",
        easing: 'easeInOutQuad',
    });


    t3.add({
        targets: '.innerCircle',
        scale: 7,
    })
    anime({
        targets: '.innerCircleSVG',
        duration: 1000,
        fill: "#1f55ff",
        easing: 'easeInOutQuad',
    });

    //MAKES THE BUTTON TO REVERT TO INITIAL STATE APPEAR
    anime({
        targets: '#reverseStateButton',
        duration: 3000,
        opacity: 1,
        easing: 'easeInOutQuad',
        update: function () {
            document.getElementById("reverseStateButton").style.display = "block"
        }
    });

    /*
555555 outerCircle outerCircleSVG
363535 middleCircle middleCircleSVG
272424 innerCircle innerCircleSVG
*/

}


const revertToPreviousState = (p) => {

    //THIS SCALES THE CIRCLES DOWN
    anime({
        targets: '.outerCircle',
        duration: 3000,
        scale: 1,
        easing: 'easeInOutQuad',
    });

    anime({
        targets: '.middleCircle',
        duration: 3100,
        scale: 1,
        easing: 'easeInOutQuad',
    });

    anime({
        targets: '.innerCircle',
        duration: 3200,
        scale: 1,
        easing: 'easeInOutQuad',
    });


    anime({
        targets: '.outerCircleSVG',
        duration: 4000,
        fill: "#000000",
        easing: 'easeInOutQuad',
    });

    anime({
        targets: '.middleCircleSVG',
        duration: 4000,
        fill: "#000000",
        easing: 'easeInOutQuad',
    });

    anime({
        targets: '.innerCircleSVG',
        duration: 4000,
        fill: "#000000",
        easing: 'easeInOutQuad',

    });


    //REVERTS TEXT BACK

    anime({
        targets: '.aboutMeTextDIV',
        duration: 3000,
        easing: 'easeOutExpo',
        translateY: 0,
        scale: 1
    })

    anime({
        targets: '.contactTextDIV',
        duration: 100,
        easing: 'easeOutExpo',
        translateX: 0,
    })
    anime({
        targets: '.projectsTextDIV',
        duration: 100,
        easing: 'easeOutExpo',
        translateX: 0,
    })

    anime({
        targets: '#reverseStateButton',
        duration: 1000,
        opacity: p.buttonOpacity,
        easing: 'easeInOutQuad',
        complete: function () {
            document.getElementById("reverseStateButton").style.display = "none"
        }
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
                    <div className="aboutMeTextDIV">
                        <h1 onClick={aboutMeTimeline} className="controlBoxText">About Me</h1>
                    </div>
                    <div className="projectsTextDIV">
                        <h1 className="controlBoxText">Projects</h1>
                    </div>
                    <div className="contactTextDIV">
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
