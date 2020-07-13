import PropTypes from "prop-types"
import React from "react"

import { getHeartwoodLink } from "../utils/utils"

import "../css/global.css"

const Button = ({ text, isTitle, url}) => {
  
  const targetUrl = url || getHeartwoodLink()

  return (
  <a href={targetUrl}>
    <p
      className={
        "px-8 py-1 w-auto rounded-lg text-white bg-base transition duration-100 ease-in-out hover:bg-green-700 shadow appearance-none leading-tight focus:outline-none focus:shadow-outline " +
        (isTitle ? "text-sm md:text-lg" : "text-md")
      }
    >
      {text}
    </p>
  </a>
)
}

Button.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  isTitle: PropTypes.bool
}

Button.defaultProps = {
  url: null
}

export default Button
