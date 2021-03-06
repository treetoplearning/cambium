import PropTypes from "prop-types"
import React from "react"

import "../css/global.css"

const Holder = ({ src }) => (
  <div className="flex flex-col items-center justify-center w-full p-8 bg-white shadow-lg rounded-xl h-128">
    <img src={src} alt="src" />
  </div>
)

Holder.propTypes = {
  source: PropTypes.string
}

Holder.defaultProps = {}

export default Holder
