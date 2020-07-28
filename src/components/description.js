import PropTypes from "prop-types"
import React from "react"

import "../css/global.css"

const Description = ({ title, body }) => (
  <div className="flex flex-col font-mono text-white">
    <p className="ml-6 text-xl font-medium underline sm:text-3xl">{title}</p>
    <p className="text-center text-md sm:text-lg ">{body}</p>
  </div>
)

Description.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
}

Description.defaultProps = {
  title: "",
  body: ""
}

export default Description
