import PropTypes from "prop-types"
import React from "react"

import "../css/global.css"

const Icon = ({ src }) => (
  <div className="flex h-64 bg-white rounded-lg w-128">
    <div className="flex justify-center p-6">
      <img src={src} />
    </div>
  </div>
)

Holder.propTypes = {
  source: PropTypes.string
}

Holder.defaultProps = {}

export default Holder
