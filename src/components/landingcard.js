import Holder from "../components/holder"
import Description from "../components/description"

import PropTypes from "prop-types"
import React from "react"

import "../css/global.css"

const LandingCard = ({ title, body, src, reversed }) => (
  <div
    className={
      "flex justify-between w-full flex-col " +
      (reversed ? "md:flex-row-reverse" : "md:flex-row")
    }
  >
    <div className="flex items-center p-6 w-100 md:w-1/2">
      <Description title={title} body={body} />
    </div>
    <div className="flex items-center p-6 w-100 md:w-1/2">
      <Holder src={src} />
    </div>
  </div>
)

LandingCard.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  src: PropTypes.string,
  reversed: PropTypes.bool
}

LandingCard.defaultProps = {}

export default LandingCard
