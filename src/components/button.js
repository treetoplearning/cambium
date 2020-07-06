import PropTypes from "prop-types"
import React from "react"


import "../css/global.css"

const Button = ({ text, url, isTitle }) => (
  <a href={url}>
    <p className={"px-8 py-1 w-auto rounded-lg text-white bg-base transition duration-100 ease-in-out hover:bg-green-700 shadow appearance-none leading-tight focus:outline-none focus:shadow-outline " + (isTitle ? "text-sm md:text-lg" : "text-md") 
    }>{text}</p>
  </a>
)

Button.propTypes = {
  text: PropTypes.string,
  url: PropTypes.string,
  isTitle: PropTypes.bool
}

export default Button
