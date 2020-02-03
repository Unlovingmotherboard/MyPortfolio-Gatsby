import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "./IntroStyle.css"

import headShot from "../../images/P1200423.jpg"

const Intro = () => {

  return (
    <>
      <div id="IntroDIV" alt="myheadShot">
        <div id="headShotDiv">
            <img id="headShot" src={headShot}></img>
        </div> 
      </div>
    </>
  )
}



export default Intro
