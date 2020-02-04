import React from "react"
import RAnime from "react-anime"
import anime from "animejs"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./IntroStyle.css"


const Intro = () => {
    const me1 = () => {
        anime({
            targets: '#introDiv',
            duration: 2000,
            backgroundColor: '#FFF',
            easing: 'easeInOutQuad'
        });

        anime({
            targets: '.controlBoxText',
            duration: 2000,
            color: '#FFF',
            easing: 'easeInOutQuad'
        });
    }

    const me2 = () => {
        anime({
            targets: '#introDiv',
            duration: 2000,
            backgroundColor: '#b4eb34',
            easing: 'easeInOutQuad'

        });
        anime({
            targets: '.controlBoxText',
            duration: 2000,
            color: '#000000',
            easing: 'easeInOutQuad'
        });
    }
    return (
           <div id="introDiv">
               <div id="controlBox">
                   <div>
                   <h1 onClick={me1} className="controlBoxText">Me1</h1>
                   </div>
                   <div>
                   <h1 onClick={me2} className="controlBoxText">Me2</h1>
                   </div>
                   <div>
                   <h1 className="controlBoxText">Me</h1>
                   </div>
                   <div>
                   <h1 className="controlBoxText">Me</h1>
                   </div>
               
               </div>
           </div>
    )
}



export default Intro
